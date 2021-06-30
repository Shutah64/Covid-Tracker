import axios from 'axios'

const apiCall = async(API)=>{
   try{
       const res = axios.get(API)
       return res
} catch(error){
    console.log(error)
}

}

export {apiCall}