import React, { useContext, useEffect, useState } from "react";
import { Search } from "../component";
import { DataContext } from "../context/dataContext"
import { Country } from "../component"
import CountryContainer from "./country";
import {useParams} from "react-router-dom"

export default function SearchContainer() {
  const {data, setData , FetchData} = useContext(DataContext);
  const [input, setinput] = useState("");
  const [isLogging, setIsLogging] = useState(true);
  const { jobId } = useParams();

  // console.log('This is Data', FetchData())  ;
  function handleSubmit(e) {
    e.preventDefault();
    const filterJob = data?.filter(job => job.title.toLocaleLowerCase().includes(input) || job.company.toLocaleLowerCase().includes(input))
    setData(filterJob);
  }

  console.log(input);
  useEffect(() => {
    if(input === "") {
      FetchData()
    }
  } , [])

  return <> <Search>
    {isLogging &&
      <>
        <Search.Input
          value={input}
           placeholder = "Title , company , expirt... "
          onChange={(e) => setinput(e.target.value)} />
        <Search.Button onClick={handleSubmit}>
          search
       </Search.Button>
      </>}
  </Search>
  <div>
    <CountryContainer data={data}  setData={setData}/>
    </div>
  </>
}
