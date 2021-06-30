import React,{useEffect, useState} from "react";
import styles from "./CountryPicker.module.css";
import { apiCall } from "../../Api";
import { useDispatch } from "react-redux";
import {actionCountry} from '../../Store_Redux/Actions'



const countryAPI = 'https://covid19.mathdro.id/api/countries'
export default function CountryPicker() {
// States
const [countryData, setCountryData] = useState(0)
// <----->

// Unhooking the Dispatch hook
const dispatch = useDispatch()
// <---->

  // LifeCycle method for Api calling
  useEffect(()=>{
    const fetcher = async () => {
      let countryData
      countryData = await apiCall(countryAPI);
      setCountryData(countryData.data.countries.map((country)=>country.name));
      
    };
    fetcher();
    
  }, [])
  // <---->


  // For Dispatching the Country to Store
  const handleCountry=(e)=>{
    
   
    dispatch(actionCountry(e.target.value))
  }
  // <---->


  return (
    <div className={styles.countryPicker}>
      <select className={styles.input} onChange={(e)=>handleCountry(e)}>
        <option value="Global">Global</option>
       {countryData ? countryData.map((country, key)=><option value={country} key={key}>{country}</option>): 'Loading...'}
      </select>
    </div>
  );
}
