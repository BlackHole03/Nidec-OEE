import { createRoot } from 'react-dom/client'
import { useEffect, useRef, useState } from 'react'
import useMachine from './api/useMachine'
import getConnection from './socket'
import MachineCard from './components/MachineCard'
import OeeCard from './components/OeeCard'
import OptionButton from './components/OptionButton'
import VisualizationTimeline from './components/VisualizationTimeline'
import VisualizationContext from './context/VisualizationContext'
import styles from '../../scss/oee/visualization.module.scss'

const Visualization = () => {
    const oeeList = useRef({})
    const socket = getConnection()
    const { get, cancel } = useMachine()
    const [machines, setMachines] = useState([])
    const [isExpand, setIsExpand] = useState(false)
    const [mode, setMode] = useState('shift') // day|shift
    const [option, setOption] = useState(false) // false: card| true: timeline
    const [averageOee, setAverateOee] = useState(0)
    const [averageA, setAverageA] = useState(0)
    const [averageP, setAverageP] = useState(0)
    const [averageQ, setAverageQ] = useState(0)

    const changeExpandCompress = () => setIsExpand(prevState => !prevState)

    const changeMode = val => setMode(val)

    const changeOption = () => setOption(prevOption => !prevOption)

    const changeOeeList = (machineId, value) => {
        oeeList.current[machineId] = value
        let length = Object.keys(oeeList.current).length
        let oee = 0, a = 0, p = 0, q = 0
        Object.values(oeeList.current).map(value => {
            oee += Number(value.Oee)
            a += Number(value.A)
            p += Number(value.P)
            q += Number(value.Q)
        })
        setAverateOee(Math.round(oee * 100 / length) / 100)
        setAverageA(Math.round(a * 100 / length) / 100)
        setAverageP(Math.round(p * 100 / length) / 100)
        setAverageQ(Math.round(q *100 / length) / 100)
    } 

    const getMachines = page => {
        get(page)
        .then(res => {
            const { data, current_page, last_page } = res.data
            setMachines(prevState => prevState.concat(data))

            if(current_page < last_page) getMachines(current_page + 1)
        })
        .catch(err => console.error(err))
    }

    const renderMachines = machine => (
        <div
            className='col-3 mt-3'
            key={`machine-${machine.ID}`}
        >
            <MachineCard data={machine} />
        </div>
    )

    const renderTimeline = machine => (
        <div
            className='col-12 mb-3'
            key={`machine-timeline${machine.ID}`}
        >
            <VisualizationTimeline data={machine} />
        </div>
    )

    useEffect(() => {
        getMachines(1)

        return () => cancel()
    }, [])

    return (
        <VisualizationContext.Provider value={{
            isExpand,
            changeExpandCompress,
            mode,
            changeMode,
            changeOption,
            socket,
            changeOeeList
        }}>
            <div className={isExpand ? styles['wrap'] : ''}>
                {option ? (
                    <div className='row'>
                        {machines.map(renderTimeline)}
                    </div>
                ) : (
                    <>
                        <div className='row'>
                            <div className='col-3'>
                                <OeeCard title='OEE' value={averageOee} />
                            </div>
                            <div className='col-3'>
                                <OeeCard title='Availability' value={averageA} />
                            </div>
                            <div className='col-3'>
                                <OeeCard title='Performance' value={averageP} />
                            </div>  
                            <div className='col-3'>
                                <OeeCard title='Quality' value={averageQ} />
                            </div>
                            {machines.map(renderMachines)}
                        </div>
                    </>
                )}
                <OptionButton />
            </div>
        </VisualizationContext.Provider>
    )
}

const root = createRoot(document.getElementById('app'))
root.render(<Visualization />)