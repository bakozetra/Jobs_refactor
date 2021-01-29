import React from "react";
import {
  Title,
  Container,
  Image,
  Button,
  Name,
  Detail,
  Content , 
  Date , 
  City , 
  About
} from "./styles/country";

export default function Country({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Country.Title = function CountryTitle({ children, ...restProps }) {
  return <Title {...restProps} >{children}</Title>
}
Country.Image = function CountryImage({ ...restProps }) {
  return <Image {...restProps} />
}
Country.Button = function CountryButton({ children, ...restProps }) {
  return <Button {...restProps} >{children}</Button>
}
Country.Name = function CountryName({ children, ...restProps }) {
  return <Name {...restProps} >{children}</Name>
}
Country.Content = function CountryContent({ children, ...restProps }) {
  return <Content {...restProps} >{children}</Content>
}
Country.Detail = function CountryDetail({ children, ...restProps }) {
  return <Detail {...restProps} >{children}</Detail>
}
Country.City = function CountryCity({ children, ...restProps }) {
  return <City {...restProps} >{children}</City>
}
Country.Date = function CountryDate({ children, ...restProps }) {
  return <Date {...restProps} >{children}</Date>
}
Country.About = function CountryAbout({ children, ...restProps }) {
  return <About {...restProps} >{children}</About>
}
