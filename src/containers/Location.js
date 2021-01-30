import React, { useContext, useState } from "react";
import { Location } from "../component";
import { DataContext } from "../context/dataContext";
import CountryContainer from "./country";

export default function LocationContainer() {
  const { data, setData } = useContext(DataContext);
  const [input, setInput] = useState("")
  function SearchLocation() {
    const filterJob = data?.filter(job => job.location.toLocaleLowerCase().includes(input))
    setData(filterJob);
  }

  return <Location>
    <div>
      <Location.Chekcbox type="checkbox" />
      <Location.Label>Full time</Location.Label>
    </div>
    <Location.Input
      value={input}
      onChange={(e) => SearchLocation(setInput(e.target.value))}/>
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