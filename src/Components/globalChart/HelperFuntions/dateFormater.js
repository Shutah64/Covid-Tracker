
   const dateFormater=(date)=>{
      let ans
    
      // Adding month names by Custom methods
      const months = ['Jan', 'Feb', 'March', 'April','May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      // <---->
    
      // Copies of the original Array
      const splitedCopy = [date.split('-').slice()]
      const splited = date.split('-').slice()
      // <---->
    
      // For loop for adding the month names
      for(let i = 0; i < splitedCopy.length; i++){
        ans = splited.splice(0,1).join(' ') +" "+months[parseInt(splitedCopy[i][1] - 1)]
      }
      // <----->
    
      return ans
    }
    export default dateFormater
    