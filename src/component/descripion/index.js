import React from "react";
import { Container , Paragraph , Link , Title , Image , GoBack , City , Name ,Button , Subheading} from "./styles/description"
export default function Description({children , ...restprops}) {
  return <Container {...restprops}>{children}</Container>
}
Description.Paragraph = function DescriptionParagraph({children , ...restprops}) {
 return  <Paragraph {...restprops}>{children}</Paragraph>
}
Description.Link = function DescriptionLink({children , ...restprops}) {
 return  <Link {...restprops}>{children}</Link>
}
Description.Image = function DescriptionImage({...restprops}) {
 return  <Image {...restprops}/>
}
Description.Title = function DescriptionTitle({children , ...restprops}) {
 return  <Title {...restprops}>{children}</Title>
}
Description.GoBack = function DescriptionGoBack({children , ...restprops}) {
 return  <GoBack {...restprops}>{children}</GoBack>
}
Description.City = function DescriptionCity({children , ...restprops}) {
 return  <City {...restprops}>{children}</City>
}
Description.Name = function DescriptionName({children , ...restprops}) {
 return  <Name {...restprops}>{children}</Name>
}
Description.Button = function DescriptionButton({children , ...restprops}) {
 return  <Button {...restprops}>{children}</Button>
}
Description.Subheading = function DescriptionSubheading({children , ...restprops}) {
 return  <Subheading {...restprops}>{children}</Subheading>
}
