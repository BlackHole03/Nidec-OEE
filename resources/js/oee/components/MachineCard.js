import { useContext, useEffect, useState } from 'react'
import VisualizationContext from '../context/VisualizationContext'
import useInitMachine from '../api/useInitMachine'
import styles from '../../../scss/oee/machine-card.module.scss'
import t from '../../lang'

const MachineCard = ({ data }) => {
    const { machineCardInit, cancel } = useInitMachine()
    const { socket, mode, changeOeeList } = useContext(VisualizationContext)
    const [ isConnected, setIsConnected ] = useState(parseIsConnected(data.IsConnected))
    const [oee, setOee] = useState('--')
    const [product, setProduct] = useState('--')
    const [plan, setPlan] = useState('--')
    const [actual, setActual] = useState('--')
    const [bg, setBg] = useState('gray')

    function parseIsConnected(state) {
        if(state == '0') {
            return false
        } else {
            return true
        }
    }

    const initMachine = () => {
        machineCardInit(data.ID)
        .then(res => {
            const { production, shift } = res.data
            if(shift) {
                setOee(prev => shift.Oee || prev)
                changeOeeList(data.ID, shift)
            }
            if(production) {
                setActual(production.a)
                setPlan(production.p)
                setProduct(() => production.products.map(product => product.Name).join(' | '))
            }
        })
        .catch(err => console.log(err))
    }

    const handleSocket = function(msg) {
        if(mode in msg) {
            setOee(msg[mode].Oee)
            changeOeeList(data.ID, msg[mode])
        }
        if('production' in msg) {
            const { p, a } = msg.production
            setPlan(p)
            setActual(a)
        }
        if('plan' in msg) {
            setProduct(() => msg.plan.map(plan => plan.master_product.Name).join(' | '))
        }
        if('iot' in msg) {
            setIsConnected(parseIsConnected(msg.iot))
        }
        if('machineStatus' in msg) {
            switch(Number(msg.machineStatus)) {
                case 1:
                    setBg('green')
                    break
                case 2:
                    setBg('orange')
                    break
                case 3:
                    setBg('red')
                    break
                default:
                    setBg('gray')
                    break

            }
        }
    }

    useEffect(() => {
        const event = `machine-${data.ID}`
        socket.on(event, handleSocket)

        return () => socket.off(event, handleSocket)
    }, [mode])

    useEffect(() => {
        initMachine()

        return () => cancel()
    }, [])
    
    return (
        <div className={styles['machine-card']}>
            <div className={styles['machine-card-header']}>
                {data.Name}
            </div>
            <div className={styles['machine-card-body']}>
                <div className={styles['percent']} bg={bg}>
                    {`${oee}%`}
                </div>
                <div className={styles['info']} bg={bg}>
                    {product}
                </div>
                {isConnected || (
                    <div className={styles['status']}>
                        <span className="badge badge-warning">{t('Iot disconnect')}</span>
                    </div>
                )}
                <div className={styles['detail']}>
                    <a
                        href={`/oee/visualization/detail/${data.ID}`}
                        role="button"
                        className="btn btn-primary"
                    >
                        {t('Detail')}
                    </a>
                </div>
            </div>
            <div className={styles['machine-card-footer']}>
                <div className='d-flex'>
                    <div className={styles['text']}>P</div>
                    <div className={styles['text']}>{plan}</div>
                </div>
                <div className='d-flex'>
                    <div className={styles['text']}>A</div>
                    <div className={styles['text']}>{actual}</div>
                </div>
            </div>
        </div>
    )
}

export default MachineCard