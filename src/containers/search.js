import React, { useContext, useState } from "react";
import { Search } from "../component";
import { DataContext } from "../context/dataContext"
import { Country } from "../component"
import CountryContainer from "./country";

export default function SearchContainer() {
  const {data, setData } = useContext(DataContext);
  const [input, setinput] = useState("");
  const [isLogging, setIsLogging] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    const filterJob = data?.filter(job => job.title.toLocaleLowerCase().includes(input) || job.company.toLocaleLowerCase().includes(input))
    console.log(filterJob);
    return setData(filterJob);
  }
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
