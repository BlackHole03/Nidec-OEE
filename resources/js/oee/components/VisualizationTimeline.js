import moment from 'moment'
import ResizeObserver from 'resize-observer-polyfill'
import { useRef, useEffect, useContext, useState } from 'react'
import { use, init, graphic } from 'echarts/core'
import { CustomChart, PieChart } from 'echarts/charts'
import { DatasetComponent, GridComponent, TooltipComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import useInitMachine from '../api/useInitMachine'
import styles from '../../../scss/oee/visualization-timeline.module.scss'
import VisualizationContext from '../context/VisualizationContext'
import trans from '../../lang'

use([CustomChart, PieChart, DatasetComponent, GridComponent, TooltipComponent, CanvasRenderer])

const VisualizationTimeline = ({ data }) => {
    const { socket } = useContext(VisualizationContext)
    const { machineCardInit, runtimeHistoryInit, cancel } = useInitMachine()
    const wrapChart = useRef(null)
    const chart = useRef(null)
    const [t, setT] = useState(0)
    const [p, setP] = useState(0)
    const [a, setA] = useState(0)
    const [product, setProduct] = useState(null)
    const [datasheets, setDatasheets] = useState([])
    const [pieDatasheets, setPieDatasheets] = useState([])

    const getColor = machineStatus => {
        switch(Number(machineStatus)) {
            case 1:
                return '#20A551'
            case 2:
                return '#FCB73F'
            case 3:
                return '#FB0D1B'
            default:
                return '#787878'
        }
    }

    const getName = machineStatus => {
        switch(Number(machineStatus)) {
            case 1:
                return trans('run')
            case 2:
                return trans('stop not error')
            case 3:
                return trans('stop due to error')
            default:
                return null
        }
    }

    const renderItem = (params, api) => {
        let categoryIndex = api.value('index')
        let start = api.coord([api.value('start'), categoryIndex])
        let end = api.coord([api.value('end'), categoryIndex])
        let height = api.size([0, 1])[1]
        let rectShape = graphic.clipRectByRect(
            {
                x: start[0],
                y: start[1] - height / 2,
                width: end[0] - start[0],
                height: height
            },
            {
                x: params.coordSys.x,
                y: params.coordSys.y,
                width: params.coordSys.width,
                height: params.coordSys.height
            }
        )
        return ( rectShape && {
            type: 'rect',
            transition: ['shape'],
            shape: rectShape,
            style: {
                fill: api.value('color')
            }
        })
    }

    const initMachine = () => {
        machineCardInit(data.ID)
        .then(res => {
            const { production } = res.data
            
            if(production) {
                setA(production.a)
                setT(production.t)
                setP(production.p)
                setProduct(() => production.products.map(product => product.Name).join(' | '))
            }
        })
        .catch(err => console.log(err))
    }

    const option = {
        xAxis: [
            {
                min: 0,
                max: 1439,
                interval: 180,
                axisLabel: {
                    align: 'left',
                    fontSize: 9,
                    formatter: value => moment().startOf('day').add(8, 'hours').add(value, 'minutes').format('HH:mm').toString()
                },
                axisLine: {
                    show: true
                }
            }
        ],
        yAxis: [
            {
                show: false,
                data: []
            }
        ],
        grid: {
            top: 0,
            bottom: '20%',
            right: '15%',
            left: 0
        },
        tooltip: {},
        series: [
            {
                name: 'timeline',
                datasetIndex: 0,
                type: 'custom',
                renderItem: renderItem,
                tooltip: {
                    position: 'left',
                    trigger: 'item',
                    formatter: ({ data }) => {
                        const start = moment().startOf('day').add(8, 'hours').add(data.start, 'minutes').format('HH:mm:ss').toString()
                        const end = moment().startOf('day').add(8, 'hours').add(data.end, 'minutes').format('HH:mm:ss').toString()
                        const value = moment().startOf('day').add(data.value, 'minutes').format('HH:mm:ss').toString()
                        return `${data.name}<br />${trans('Start')}: ${start}<br />${trans('End')}: ${end}<br />${trans('Duration')}: ${value}`
                    },
                },
                itemStyle: {
                    opacity: 0.8    
                },
                encode: {
                    x: [1, 2],
                    y: 0
                }
            },
            {
                name: 'pie',
                datasetIndex: 1,
                type: 'pie',
                color: pieDatasheets.map(val => val.color),
                label: {
                    position: 'inside',
                    formatter: '{d}%',
                    fontSize: 8
                },
                tooltip: {
                    trigger: 'item',
                    formatter: ({ percent, data, name }) => `${name}<br />${moment().startOf('day').add(data.value, 'minutes').format('HH:mm:ss').toString()}<br />${percent}%`,
                    position: 'left'
                },
                radius: '90%',
                center: ['93%', '50%'],
            }
        ],
        dataset: [
            {source: datasheets},
            {source: pieDatasheets},
        ]
    }

    const updateDataset = ({ isCreated, name, color, index, start, end, value }) => {
        if(isCreated) {
            setDatasheets(prevDataset => {
                prevDataset.push({ index, start, end, name, color, value })
                return [...prevDataset]
            })
        } else {
            setDatasheets(prevDataset => {
                prevDataset.pop()
                prevDataset.push({ index, start, end, name, color, value })
                return [...prevDataset]
            })
        }
    }

    const processData = ({ data, isCreated }) => {
        const startDay = moment().startOf('day').add(8, 'hours')
        const timeCreated = moment(data.Time_Created)
        const timeUpdated = moment(data.Time_Updated)
        const start = timeCreated.diff(startDay, 'minutes', true)
        const end = timeUpdated.diff(startDay, 'minutes', true)
        const machineStatus = data.IsRunning
        const name = getName(machineStatus)
        const color  = getColor(machineStatus)

        updateDataset({
            isCreated,
            index: 0,
            start,
            end,
            name,
            value: end - start,
            color
        })
    }

    const initRuntimeHistory = () => {
        runtimeHistoryInit(data.ID)
        .then(res => {
            const { data, status } = res.data

            if(status) {
                data.forEach(value => processData({ data: value, isCreated: true }))
            }
        })
        .catch(err => console.log(err))
    }

    const handleSocket = function(msg) {
        if('production' in msg) {
            const { t, p, a } = msg.production
            setT(t)
            setP(p)
            setA(a)
        }
        if('plan' in msg) {
            setProduct(() => msg.plan.map(plan => plan.master_product.Name).join(' | '))
        }
        if('timeline' in msg) {
            processData(msg.timeline)
        }
    }

    useEffect(() => {
        const event = `machine-${data.ID}`
        socket.on(event, handleSocket)

        return () => socket.off(event, handleSocket)
    }, [])

    useEffect(() => {
        chart.current && chart.current.setOption(option)
    }, [pieDatasheets])

    useEffect(() => {
        const pieData = datasheets.reduce((data, current) => {
            const name = current.name
            if(name in data) {
                data[name].value += current.value
            } else {
                data[name] = {
                    value: current.value,
                    name,
                    color: current.color
                }
            }
            
            return data
        }, {})
        
        setPieDatasheets(Object.values(pieData))
    }, [datasheets])

    useEffect(() => {
        chart.current = init(wrapChart.current)
        chart.current.setOption(option)

        const resize = new ResizeObserver(e => {
            chart.current.resize()
        })

        const wrap = document.getElementById('app')

        chart.current.on('finished', () => {
            resize.observe(wrap)
        })

        return () => resize.unobserve(wrap)
    }, [])

    useEffect(() => {
        initMachine()
        initRuntimeHistory()

        return () => cancel()
    }, [])

    return (
        <div className={styles['visualization-timeline']}>
            <div className={styles['flex-container']}>
                <div className={styles['flex-item1']}>
                    <div className={styles['grid-container']}>
                        <div className={`${styles['grid-item-1']} ${styles['border']}`} title={data.Name}>{data.Name}</div>
                        <div className={`${styles['grid-item-2']} ${styles['border']}`}>T</div>
                        <div className={`${styles['grid-item-3']} ${styles['border']}`}>{t}</div>
                        <div className={`${styles['grid-item-4']} ${styles['border']}`} title={product}>{product}</div>
                        <div className={`${styles['grid-item-5']} ${styles['border']}`}>P</div>
                        <div className={`${styles['grid-item-6']} ${styles['border']}`}>{p}</div>
                        <div className={`${styles['grid-item-7']} ${styles['border']}`}>A</div>
                        <div className={`${styles['grid-item-8']} ${styles['border']}`}>{a}</div>
                    </div>
                </div>
                <div className={styles['flex-item2']}>
                    <div className={styles['chart']} ref={wrapChart}></div>
                </div>
            </div>
        </div>
    )
}

export default VisualizationTimeline