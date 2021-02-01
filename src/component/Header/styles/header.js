import styled from 'styled-components';
export const Container = styled.header `
position : relative;
`;
export const Image = styled.img `
    width: 351px;
    height: 138px;
    max-width: 100%;
    border-radius: 8px;
@media(min-width: 375px) {
    width: 100%;
    height: 20vh;
}
`;