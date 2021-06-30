import React from 'react';
import styles from './Cards.module.css';
import { Card } from '../index'
import { useSelector } from 'react-redux';


export default function Cards({ data }) {
    const country = useSelector(state=> state.currentCountry)
const countryData = useSelector(state=> state.countryData)

    //  Getting the Last update
    // if(country == 'Global'){
    //     const lastUpdated = data ? data.lastUpdate : ''
    // } else {
    //     const lastUpdated = data ? data.lastUpdate : ''
    // }
    const lastUpdated = data ? data.lastUpdate : ''
    console.log(lastUpdated)
    // <----->


    // Mapper to shorten the jsx
    const cardData = data ? [
        [
            data.confirmed.value,
            'Active Cases'
        ], [
            data.recovered.value,
            'Recovered Cases'
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
