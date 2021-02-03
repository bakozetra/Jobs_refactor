import React, { useContext, useState } from "react"
import { Country } from "../component"
import { Link } from "react-router-dom"


export default function CountryContainer({ data, newData }) {
  const [isLoading, setIsLoading] = useState(true)
  console.log(isLoading);
  console.log(newData);
  return <Country>
      {!isLoading ? <h2>Loading....</h2> : 
      data?.map(item => {
        return (
          <Link key={item.id} to={`/${item.id}`}>
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
      })
      }
    
    </Country>
}
