let data = {
     name: "Robert",
     avatar: "https://github.com/robertmatos.png",
     "monthly-budget": 4000,
     "days-per-week": 5,
     "hours-per-day": 6,
     "vacation-per-year": 5,
     "value-hour": 75,
};
 
module.exports = {
     get(){
          return data;
     },
     update(newData){
          data = newData;
     }
}
