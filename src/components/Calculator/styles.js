import styled, { css } from "styled-components";

export const Container = styled.div`
  max-width: 920px;
  background-color: ${({ theme }) => theme.white};
  width: 100%;
  min-height: 481px;
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 42px 32px;
  display: flex;
  column-gap: 56px;

  ${({ theme }) => console.log(theme.breakPoints.medium)}

  ${({ theme }) => `
    @media only screen and (max-width: ${theme.breakPoints.medium}) {
      row-gap: 32px;
      flex-direction: column;
      align-items: center;
      padding: 24px 32px;
      max-width: 90vw;
    }
  `}
`;
