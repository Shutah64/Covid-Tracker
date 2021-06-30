const actionCountry=(country)=>{
    return {
        type: 'SET_COUNTRY',
        payload: country
    }
}
const actionCountryData = (countryData) =>{
    return{
        type: 'SET_COUNTRY_DATA',
        payload: countryData
    }
}
export {actionCountry, actionCountryData}