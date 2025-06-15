const setItem = (key, value) => {
  if(typeof window !== 'undefined'){
    sessionStorage.setItem(key, JSON.stringify(value));
  }
  
};

const getItem = (key) => {
  if(typeof window !== 'undefined'){
    if (sessionStorage.getItem(key)) return JSON.parse(sessionStorage.getItem(key));
    return false;
  }

};
const clearStorage = () => {
  sessionStorage.clear();
};
const getToday = ()=>{
  const date = new Date();
  const today = date.getDate() +
  " " +
  date.toLocaleString("default", { month: "long" }) +
  "," +
  date.getFullYear();
   return today;
}
const changeDateFormat=(newDate)=>{
  const date = new Date(newDate);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  
  // Original date formatting
  const formattedDate = date.toLocaleDateString('en-US', options);
  return formattedDate;
}

export {
  setItem,
  getItem,
  clearStorage,
  getToday,
  changeDateFormat
};
