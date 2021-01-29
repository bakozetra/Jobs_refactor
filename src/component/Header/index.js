import React from "react";
import { Container , Image } from "./styles/header";

export default function Header({children , ...restProps}) {
  return <Container {...restProps} >{children}</Container>
}
Header.Image = function HeaderImage({...restProps}) {
  return <Image {...restProps}/>
}