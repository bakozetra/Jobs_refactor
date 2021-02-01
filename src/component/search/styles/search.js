import styled from 'styled-components';

export const Container = styled.form`

    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -6rem; 
    width: 94%;
    margin-left: auto;
    margin-right: auto; 
    background-image : url();
    @media (min-width : 375px) {
        width : 80%;
    }`;

export const Input = styled.input`
background-image: url(../image/baseline_work.png);
background-repeat : no-repeat;
background: rgba(255, 255, 255, 1);
width: 315px;
height: 55px;
outline : none;
border : none;
box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
border-radius: 4px;
@media(min-width : 375px) {
  width : 790px;
  height : 55px;
}
`;

export const Button = styled.button`
background: rgba(30, 134, 255, 1);
width: 104px;
height: 47px;
outline : none;
border : none;
border-radius: 4px;
position: absolute;
    right: 1rem;
@media (min-width : 375px) {
    width : 146px;
    margin-left: -9.7rem;
    position : inherit;
}
`;

