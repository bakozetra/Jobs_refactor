import React, { useContext } from 'react'
import { DataContext } from '../context/dataContext'
export default function Description () {
  const {data , setData} = useContext(DataContext);
  function fiterId (id) {
    const fitlerIdjob = data?.map(id => id == id);
    setData(fitlerIdjob);
    console.log(filterIdjob);
  }

  return <>
  {
   data?.map(desc => {
     return <div>
       <p>
       {desc.title}
       </p>
     </div>
   })
  }
    
  </>
}