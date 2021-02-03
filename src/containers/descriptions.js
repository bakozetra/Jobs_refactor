import React, { useContext, useState } from "react"
import { Description } from "../component"
import { useParams } from 'react-router-dom'
import { DataContext } from '../context/dataContext'
export default function DescriptionContainer() {
  let { data } = useContext(DataContext);
  const { descriptions } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  data = data?.find(job => job.id == descriptions);
  return <Description>
    {isLoading ? <h2>Loading....</h2> : ""}
    <>
      <Description.Subheading>How to Apply</Description.Subheading>
      <Description.GoBack href="/">Go back</Description.GoBack>
      <Description.Title>{data.title}</Description.Title>
      <Description.Button>{data.type}</Description.Button>
      <>
        <Description.City>{data.location}</Description.City>
        <Description.Name>{data.company}</Description.Name>
        <Description.Image src={data.company_logo} />
      </>
      <Description.Paragraph>{data.description}</Description.Paragraph>
    </>

  </Description>

}
