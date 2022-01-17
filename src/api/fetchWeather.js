import React from 'react'
import axios from 'axios';
const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '29c8fd64f34400d4961cecd00b78aad9';
export const fetchWeather = async (event) => {
 const data=  await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${event}&appid=${API_KEY}`)
   .then((res)=>
    //    console.log("data of City ",res);
       res.data
   ).catch((err)=>{
       console.log(err);
   })
   return data
}
