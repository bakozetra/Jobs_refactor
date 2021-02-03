import React, { useState } from "react";
import { CountryContainer, LocationContainer } from "../containers";
export default function Home() {
  const [isLoading , setLoading] = useState(false)
  return <div>
  <LocationContainer/>
   <CountryContainer/>
  </div>
}