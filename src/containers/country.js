import React, { useContext } from "react"
import { Country } from "../component"
import { DataContext } from "../context/dataContext"

export default function CountryContainer() {
  const { data } = useContext(DataContext);
  console.log(data);
  return <Country>
    {data.map(item => {
      return (
        <Country.Content>
          <Country.Image src={item.company_logo} />
          <Country.Detail>
            <Country.Name>{item.company}</Country.Name>
            <Country.Title>{item.title}</Country.Title>
            <Country.Button>{item.type}</Country.Button>
          </Country.Detail>
        </Country.Content>
      )
    })}
  </Country>
}