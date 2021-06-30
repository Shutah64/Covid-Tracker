const convertDailytoWeekly =(daily)=>{
    const weekly = []
      for(let i=0; i<daily.length; i+=7){
        weekly.push(daily[i])
      }
      return weekly
    }

    export default convertDailytoWeekly