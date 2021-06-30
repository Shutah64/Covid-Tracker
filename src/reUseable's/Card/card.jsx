import React from 'react';
import styles from './card.module.css';
import CountUp from 'react-countup';


// Helper Functions
const formatDate =(date)=>{
        const splited = date.toLowerCase().split('t').slice()
        const simpleFormat = []
        simpleFormat.push(splited[0])
        return simpleFormat
}
// <---->

export default function card({cardData, lastUpdated, type}) {
    return (
        <div className={styles.card}>
            <span>{type}</span>
            <span className={styles.number}><CountUp start={0} end={cardData} duration={2.75} separator="," className={styles.number} /></span>
            <span className={styles.date}>{formatDate(lastUpdated)}</span>
            <span className={styles.cases}>number of {type} of COVID-19</span>
        </div>
    )
}
