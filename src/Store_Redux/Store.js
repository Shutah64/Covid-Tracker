import {currentCountry, countryData } from './Reducers'
import { createStore, combineReducers} from 'redux'


const allReducer = combineReducers({
    currentCountry,
    countryData
})
let store = createStore(allReducer);


export default store