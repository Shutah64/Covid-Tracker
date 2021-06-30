import React,{useEffect, useState} from 'react'
import { Line } from "react-chartjs-2";
import styles from './globalChart.module.css'
import {apiCall} from '../../Api'
import convertDailytoWeekly from './HelperFuntions/convertToWeekly';
import dateFormater from './HelperFuntions/dateFormater';



export default function GlobalChart() {
  // states
  const [dailyData, setDailyData] = useState(0)
  // <----->
  
  const weeklyData = convertDailytoWeekly(dailyData)
  
  // Life Cycle Method for Api call
  const dailyAPI= 'https://covid19.mathdro.id/api/daily'
  useEffect(()=>{
    const fetcher = async () => {
      let dailyData
      dailyData = await apiCall(dailyAPI);
      setDailyData(dailyData.data);
    };
    fetcher();
    
  }, [])
  // <----->


  // Data for Line Chart
  const data = dailyData ? {
    labels: [...weeklyData.map((cases)=> dateFormater(cases.reportDate))],
    datasets: [
      {
        label: "Confirmed Cases",
        data: [...weeklyData.map((cases)=>cases.confirmed.total)],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      },
      {
        label: "Deaths",
        data: [...weeklyData.map((cases)=>cases.deaths.total)],
        fill: true,
        backgroundColor: "rgb(255, 33, 0, 0.2)",
        borderColor: "rgb(255, 33, 0, 1)"
      }
    ],
   
  }: '';
  // <------>



    return (
        <div className={styles.chartWrapper}>

          {/* This is the chart */}
            <Line data={data}/>
            {/* <----> */}

       </div>
    )
}
