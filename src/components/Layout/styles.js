import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > img {
    margin-bottom: 80px;
  }

  ${({ theme }) => `
    @media only screen and (max-width: ${theme.breakPoints.medium}) {
      height: auto;
      margin: 16px 0;
      & > img {
        margin-bottom: 40px;
     }
    }
  `}
`;
