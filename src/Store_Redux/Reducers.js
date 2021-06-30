

const currentCountry =(state='Global', action)=>{
    switch(action.type){
        case 'SET_COUNTRY': return action.payload;
        default: return state

    }
}
const countryData =(state=0, action)=>{
    switch(action.type){
        case 'SET_COUNTRY_DATA': return action.payload;
        default: return state
    }
}

export {currentCountry, countryData}