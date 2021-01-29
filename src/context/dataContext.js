import React , { createContext, useState , useEffect } from 'react';

export const DataContext = createContext();
 export const  UseContentProvider = ({children}) => {
   
  const [data, setData] = useState([]);
  const URL =  `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?`;

  const FetchData = async () => {
    const res = await fetch(URL);
    const getData = await res.json();
    setData(getData)
    console.log(data);
  }
  useEffect(() => {
    FetchData()
  } , [])
   console.log(data);
  return <DataContext.Provider value ={{data , setData }}>{children}</DataContext.Provider>
  }

