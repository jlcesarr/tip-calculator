import styled, { css } from "styled-components";

export const Container = styled.div`
  max-width: 920px;
  width: 100%;
  min-height: 481px;
  padding: 42px 32px;
  position: relative;
  display: flex;
  column-gap: 56px;

  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border-radius: ${theme.borderRadius};
  `};

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

export const SaveResultsLabel = styled.label`
  position: absolute;
  right: 34px;
  top: 10px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  ${({ theme }) => css`
    color: ${theme.colors.darkCyan};

    input[type="checkbox"] {
      accent-color: ${theme.colors.darkCyan};
      margin-left: 8px;
    }
  `};

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakPoints.medium - 1}) {
      display: none;
    }
  `}
`;
