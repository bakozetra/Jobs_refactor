import React , { createContext, useState , useEffect } from 'react';

export const DataContext = createContext();
 export const  UseContentProvider = ({children}) => {
   
  const [data, setData] = useState([]);
  const URL =  `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?`;

  const FetchData = async (input) => {
    const API = `${URL}${input}`
    const res = await fetch(API);
    const getData = await res.json();
    setData(getData)
    console.log(data);
  }
  useEffect(() => {
    FetchData()
  } , [])
   console.log(data);
  return <DataContext.Provider value ={{data , setData , FetchData }}>{children}</DataContext.Provider>
  }

