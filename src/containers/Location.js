import React, { useContext, useEffect, useState } from "react";
import { Location } from "../component";
import { DataContext } from "../context/dataContext";
import CountryContainer from "./country";

export default function LocationContainer() {
  const { data, setData, FetchData } = useContext(DataContext);
  const [input, setInput] = useState("")
  const [checked, setChecked] = useState(false);
  console.log(checked);

  function SearchLocation() {
    const filterJob = data?.filter(job => job.location.toLocaleLowerCase().includes(input))
    setData(filterJob);
  }

  function SearchFullTitme() {
    const filterJob = data?.filter(job => job.type.toLocaleLowerCase() == "full time")
    setData(filterJob);
    console.log(filterJob);
  }

  function allTime() {
    FetchData()
  }
  function ClickRadioButton(e) {
    console.log(e.target);
    const filterJob = data?.filter(city => city.location.toLocaleLowerCase() == e.toLocaleLowerCase())
    console.log(filterJob);
    setData(filterJob);
  }

   useEffect(() => {
     if(input === "") {
       FetchData()
     }
   } , [])

  return <Location>
    <div>
      {
        !checked ?
          <Location.Chekcbox
            type="checkbox"
            checked={checked}
            onChange={() => SearchFullTitme(setChecked(!checked))}
          />
          :
          <Location.Chekcbox
            type="checkbox"
            checked={checked}
            onChange={() => allTime(setChecked(!checked))}
          />
      }

      <Location.Label>Full time</Location.Label>
    </div>
    <Location.Image src="../image/earth-fill.png"/>
    <Location.Input
      value={input}
      onChange={(e) => SearchLocation(setInput(e.target.value))} />
    <form>
      <div>
        <Location.RadioInput
          type="radio"
          name="test"
          id="london"
          value="London"
          onChange={(e) => ClickRadioButton(e.target.value)} />
        <Location.Label for="london">London</Location.Label>
      </div>
      <div>
        <Location.RadioInput
          type="radio"
          name="test"
          id="amsterdam"
          value="Amsterdam"
          onChange={(e) => ClickRadioButton(e.target.value)} />
        <Location.Label for="amsterdam">Amsterdam</Location.Label>
      </div>
      <div>
        <Location.RadioInput
          type="radio"
          name="test"
          id="new-york"
          value="New york"
          onChange={(e) => ClickRadioButton(e.target.value)} />
        <Location.Label for="new york">New york</Location.Label>
      </div>
      <div>
        <Location.RadioInput
          type="radio"
          name="test"
          id="berlin"
          value="Berlin" 
          onChange={(e) => ClickRadioButton(e.target.value)}/>
        <Location.Label for="berlin">Berlin</Location.Label>
      </div>
    </form>
  </Location>
}