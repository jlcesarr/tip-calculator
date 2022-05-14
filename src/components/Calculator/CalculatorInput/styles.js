import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.grayish.darkCyan};
  display: block;
  margin-bottom: ${(props) => props.mb || "16px"};
  margin-top: ${(props) => props.mt || "16px"};
`;

export const Input = styled.input`
  font-size: ${({ theme }) => theme.input.fontSize};
  border-radius: ${({ theme }) => theme.input.borderRadius};
  border: none;
  max-width: 379px;
  height: 48px;
  background-color: #f3f9fa;
  text-align: right;
  padding: 5px;
  color: ${({ theme }) => theme.darkCyan};
  font-weight: bold;
  font-family: "Space Mono";
  outline: none;
  border: 3px solid transparent;

  ${(props) =>
    props.valid == false
      ? css`
          border: 2px solid red;
        `
      : null}

  ${(props) =>
    props.border
      ? `
          &:hover, &:focus{
            border-color: ${props.theme.strongCyan};
          }
        `
      : null}

${({ theme }) => `
    @media only screen and (max-width: ${theme.breakPoints.medium}) {
      max-width: 100%;
    }
  `}
`;

export const Percentages = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, 100px));
  gap: 16px;
  max-width: 379px;

  ${({ theme }) => `
    @media only screen and (max-width: ${theme.breakPoints.medium}) {
      grid-template-columns: repeat(2, 1fr);
    }
  `}
`;

export const Tip = styled.div`
  background-color: ${(props) =>
    props.selected ? props.theme.strongCyan : props.theme.darkCyan};
  height: 48px;
  font-size: ${({ theme }) => theme.input.fontSize};
  color: ${({ theme }) => theme.white};
  border-radius: ${({ theme }) => theme.input.borderRadius};
  text-align: center;
  padding: 5px 0;
  cursor: pointer;
  transition: 0.3s ease-in;
`;

export const TipInput = styled(Tip)`
  outline: none;
  border: none;
  width: 100%;
  display: block;
  background-color: ${({ theme }) => theme.grayish.veryLightCyan};
  transition: unset;
  text-align: right;
  padding: 0 5px;
  border: 3px solid transparent;
  /* caret-color: ${({ theme }) => theme.grayish.veryLightCyan}; */
  &,
  ::placeholder {
    color: ${({ theme }) => theme.darkCyan};
    font-weight: bolder;
  }

  ::placeholder {
    text-align: center !important;
    font-size: 22px;
  }

  &:focus,
  &:hover {
    background-color: unset;
    border-color: ${({ theme }) => theme.strongCyan};
  }
`;

export const ErrorMessage = styled.span`
  /* margin-left: 190px; */
  float: right;
  color: ${({ theme }) => theme.errorMessage};
`;
