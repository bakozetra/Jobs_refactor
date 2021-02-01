import styled from "styled-components"
export const Container = styled.div`
background-color : lightgray;
margin-top: 17rem;
@media(min-width : 375px) {
  width: 70%;
  margin-left: auto;
  margin-top: 4rem;
}
 `;

export const Title = styled.h2`
    font-size: 16px;`;
export const Image = styled.img`
width: 90px;
height: 90px;
margin-left: 1rem;
`;

export const Button = styled.button`
outline :none;
width: 90px;
height: 26px;
border: 1px solid rgba(51, 70, 128, 1);
color: rgba(51, 70, 128, 1);
border-radius : 5px;
`;

export const Name = styled.p``;

export const Content = styled.div`
display : flex ;
align-items : center;
background-color : white;
margin-bottom : 1rem; 
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
border-radius: 4px;`;

export const Detail = styled.div`
margin-left : 2rem;
`;