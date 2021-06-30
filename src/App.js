// All the imports for My App
import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
import logo from "./images/logo.png";
import { apiCall } from "./Api";
import { Cards, CountryPicker, CountryChart, GlobalChart } from "./Components";
import {useSelector} from 'react-redux'
// My App starts
function App() {
  // My States
  const [globalData, setGlobalData] = useState(0);
  // <---->

// Getting the data from redux store
const country = useSelector(state=> state.currentCountry)
const countryData = useSelector(state=> state.countryData)
// <---->

  // My API's
  const AllAPI = "https://covid19.mathdro.id/api";

  // Using LifeCycle method for API calls
  useEffect(() => {
    let data;
    const fetcher = async () => {
      data = await apiCall(AllAPI);
      setGlobalData(data);
      console.log(data.data)
    };
    fetcher();
  }, []);
// <---->
  return (
    <div className="App">
      <div className={styles.container}>
        <div className={styles.appContent}>

          {/* The Logo goes here */}
          <div className={styles.logo}>
            <img src={logo} alt='Logo' />
          </div>
          { country == 'Global' ? <Cards data={globalData.data}/> : <Cards data={countryData}/> }
          <CountryPicker/>
          {country == 'Global' ? <GlobalChart/> : <CountryChart/>}

        </div>
      </div>
    </div>
  );
}

export default App;
