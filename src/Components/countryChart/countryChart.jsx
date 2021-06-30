import React,{useEffect, useState} from 'react'
import { Bar } from "react-chartjs-2";
import { useSelector, useDispatch} from 'react-redux';
import {actionCountryData} from '../../Store_Redux/Actions'
import {apiCall} from '../../Api'
import styles from './countryChart.module.css'


export default function CountryChart() {
  // States
  const [byCountryData, setByCountryData] = useState(0)
  // <----->


  // Unhooking the useDispatch Hook
  const dispatch = useDispatch()
  // <---->

  // Data from Redux store
  const country = useSelector((state)=>state.currentCountry)
  // <---->
  
  
  // LifeCycle method for Api calling
  const ByCountryAPI = `https://covid19.mathdro.id/api/countries/${country}`
   useEffect(()=>{
    if(country !== 'Global') {
      const fetcher = async () => {
        let countryData
        countryData = await apiCall(ByCountryAPI);
        setByCountryData(countryData.data);
        dispatch(actionCountryData({
          confirmed: countryData.data.confirmed,
          recovered: countryData.data.recovered,
          deaths: countryData.data.deaths,
          lastUpdate: countryData.data.lastUpdate
        }))
      };
      fetcher();
    }
    
    
  }, [country])
  // <---->

  // Chart data
  const data = byCountryData ? {
    labels: [country],
    datasets: [{
      label: 'Confirmed',
      data: [byCountryData.confirmed.value],
      backgroundColor: [
       "rgba(75,192,192,0.7)",
        ],
      borderColor: [
        "rgba(75,192,192,1)",
      ],
      borderWidth: 1
    },
    {
      label: 'Recovered',
      data: [byCountryData.recovered.value],
      backgroundColor: [
       "rgb(0, 255, 93 )",
        ],
      borderColor: [
        "rgb(0, 255, 93 )",
      ],
      borderWidth: 1
    },
    {
      label: 'Deaths',
      data: [byCountryData.deaths.value],
      backgroundColor: [
       "rgb(255, 33, 0, 0.7)",
        ],
      borderColor: [
        "rgb(255, 33, 0, 1)",
      ],
      borderWidth: 1
    }]
  }: '';
  // <------>


    return (
        <div className={styles.chartWrapper}>
           {byCountryData? <Bar data={data}/> : 'loading...'}
        </div>
    )
}
