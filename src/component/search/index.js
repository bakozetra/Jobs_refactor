import React from 'react'
import {Container , Input , Button} from "./styles/search"
export default function Search({ children , ...restProps}) {
  return <Container {...restProps}>{children}</Container>
}
Search.Input = function SearchInput ({...restProps}) {
   return <Input {...restProps}/>
}
Search.Button = function SearchButton ({ children ,...restProps}) {
   return <Button {...restProps}>{children}</Button>
}
