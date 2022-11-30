import { useContext } from 'react'
import t from '../../lang'
import VisualizationContext from '../context/VisualizationContext'
import styles from '../../../scss/oee/option-button.module.scss'

const OptionButton = () => {
    const { isExpand, changeExpandCompress, mode, changeMode, changeOption } = useContext(VisualizationContext)

    return (
        <div className={styles['option-button']}>
            <button
                className='btn btn-light'
                type='button'
                onClick={changeExpandCompress}
            >
                <i className={`fa-solid ${isExpand ? 'fa-compress' : 'fa-expand'}`}></i>
            </button>
            <button
                className='btn btn-light'
                type='button'
                onClick={changeOption}
            >
                <i className='fa-solid fa-arrow-right-arrow-left'></i>
            </button>
            <div className='btn-group dropup'>
                <button
                    type='button'
                    className='btn btn-light dropdown-toggle'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                >
                    {t(mode)}
                </button>
                <div className='dropdown-menu'>
                    <a
                        className={`dropdown-item ${mode === 'shift' ? 'active' : ''}`}
                        href='#'
                        onClick={() => changeMode('shift')}
                    >
                        {t('shift')}
                    </a>
                    <a
                        className={`dropdown-item ${mode === 'day' ? 'active' : ''}`}
                        href='#'
                        onClick={() => changeMode('day')}
                    >
                        {t('day')}
                    </a>
                </div>
            </div>
        </div>
    )
}

export default OptionButton