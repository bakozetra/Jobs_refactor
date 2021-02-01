import React from "react";
export default function Description ({children , ...restprops}) {
  return <Container {...restprops}>{children}</Container>
}
Description.Paragraph = function DescriptionParagraph({children , ...restprops}) {
 return  <Paragraph {...restprops}>{children}</Paragraph>
}
