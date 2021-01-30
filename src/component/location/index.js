import React from "react"
import {Label , Input , Container , Radio , Button ,Chekcbox} from "./styles/location"
export default function Location ({children , ...restProps}) {
 return <Container {...restProps}>{children}</Container>
}
Location.Input = function LocationInput({ ...restProps}) {
   return <Input {...restProps}/>
}
Location.Button = function LocationButton({ ...restProps}) {
   return <Button {...restProps}/>
}
Location.Radio = function LocationRadio({ ...restProps}) {
   return <Radio {...restProps}/>
}
Location.Label = function LocationLabel({ ...restProps}) {
   return <Label {...restProps}/>
}
Location.Chekcbox = function LocationChekcbox({ ...restProps}) {
   return <Chekcbox {...restProps}/>
}
