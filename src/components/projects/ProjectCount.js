import styles from './ProjectCount.module.css'

import CountDown from '../count/CountDown';

function ProjectCount () {
    return (
        <count className={styles.count_control} >
            <CountDown text="Dias" number={30} />
            <CountDown text="Horas" number={19} />
            <CountDown text="Minutos" number={35} />
            <CountDown text="Segundos" number={49} /> 
        </count>
    )
}

export default ProjectCount; 

