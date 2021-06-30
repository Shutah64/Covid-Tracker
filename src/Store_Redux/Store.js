import {currentCountry, countryData } from './Reducers'
import { createStore, combineReducers} from 'redux'


const allReducer = combineReducers({
    currentCountry,
    countryData
})
let store = createStore(allReducer);
store.subscribe(()=> console.log(store.getState()))


export default store