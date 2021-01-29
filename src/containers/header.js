import React from "react";
import { Header } from "../component";
import CountryContainer from "./country";
import SearchContainer from "./search";
export default function HeaderContainer() {
  return <>
    <Header>
    <Header.Image src="../image/backgroundImg.png"/>
      <SearchContainer />
    </Header>
    <CountryContainer/>
  </>
}