import React, { useContext } from "react"
import { Country } from "../component"
import { DataContext } from "../context/dataContext"
import {Link} from "react-router-dom"


export default function CountryContainer({data , newData ,setData}) {
  function filterId (id) {
    const fitlerIdjob = data?.map(id => id == id);
    setData(fitlerIdjob);
    console.log(filterIdjob);
  }

  console.log(newData);
  return <Country>
      {data?.map(item => { 
        return (
          <Link to={`/:${item.id}`}>
          <Country.Content>
            <Country.Image src={item.company_logo} />
            <Country.Detail>
              <Country.Name>{item.company}</Country.Name>
              <Country.Title>{item.title}</Country.Title>
              <Country.Button>{item.type}</Country.Button>
            </Country.Detail>
          </Country.Content>
          </Link>
        )
      })}
    </Country>
}