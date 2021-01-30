import React, { useContext, useState } from "react";
import { Location } from "../component";
import { DataContext } from "../context/dataContext";
import CountryContainer from "./country";

export default function LocationContainer() {
  const { data, setData , FetchData } = useContext(DataContext);
  const [input, setInput] = useState("")
  const [checked, setChecked] = useState(false);
  console.log(checked);
  function SearchLocation() {
    const filterJob = data?.filter(job => job.location.toLocaleLowerCase().includes(input))
    setData(filterJob);
  }
  function SearchFullTitme() {
    const filterJob = data?.filter(job => job.type.toLocaleLowerCase() == "full time" )
    setData(filterJob);
    console.log(filterJob);
  }

  function allTime() {
     FetchData()
  }
  console.log(allTime);
  
  // const isChecked = !checked ?
  //  <Location.Chekcbox  onChange = {() => SearchFullTitme(setChecked(!checked)) } /> 
  //  :  <Location.Chekcbox />;
  
  return <Location>
    <div>
      { 
      !checked ? 
      <Location.Chekcbox
        type="checkbox"
        checked={checked}
           onChange = {() => SearchFullTitme(setChecked(!checked)) } 
      />
      : 
      <Location.Chekcbox
      type="checkbox"
      checked={checked}
    
     onChange = {() => allTime(setChecked(!checked)) }         
    />
    }
      
      <Location.Label>Full time</Location.Label>
    </div>
    <Location.Input
      value={input}
      onChange={(e) => SearchLocation(setInput(e.target.value))} />
    {/* <>
      <>
        <Location.Input type="radio" checked value="New york"/>
        <Location.Label for ="new">New york</Location.Label>
      </>
      <>
        <Location.Input type="radio" value="New york"/>
        <Location.Label for ="new">New york</Location.Label>
      </>
      <>
        <Location.Input type="radio" value="New york"/>
        <Location.Label for ="new">New york</Location.Label>
      </>
       */}
    {/* </> */}
  </Location>
}