import React from "react";
import { Header } from "../component";
import SearchContainer from "./search";
export default function HeaderContainer() {
  return <>
    <Header to="/">
    <Header.Image src="../image/backgroundImg.png"/>
      <SearchContainer />
    </Header>
  </>
}