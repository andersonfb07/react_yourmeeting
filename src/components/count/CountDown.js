import styles from './CountDown.module.css'

const CountDown = ( {number, text} ) => {
    return (
        <div className={styles.count_down}>
            <p>{number}</p>
            <h3>{text}</h3>
        </div>
    )
}

export default CountDown 