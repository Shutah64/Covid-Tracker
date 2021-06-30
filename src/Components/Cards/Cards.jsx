import React from 'react';
import styles from './Cards.module.css';
import {Card} from '../index'



export default function Cards({ data }) {
   
    //  Getting the Last update Date
    const lastUpdated = data ? data.lastUpdate : ''
    // <----->


    // Mapper to shorten the jsx
    const cardData = data ? [
        [
            data.confirmed.value,
            'Active'
        ], [
            data.recovered.value,
            'Recovered'
        ], [
            data.deaths.value,
            'Deaths'
        ]
    ] : ''
    // <---->

    return (
        <div>
            {data ?
                <div className={styles.cardWrapper}>
                    {
                        cardData.map((value, key) => {
                            return <Card key={key} cardData={value[0]} type={value[1]} lastUpdated={lastUpdated} />
                        })
                    }
                </div>
                : 'loading....'
            }
        </div>
    )
}
