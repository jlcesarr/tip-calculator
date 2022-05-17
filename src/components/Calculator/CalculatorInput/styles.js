import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  ${({ theme }) => `
    @media only screen and (min-width: ${
      theme.breakPoints.small
    }) and (max-width: ${theme.breakPoints.medium}) {
      max-width: 50%;
    }

    @media only screen and (max-width: ${theme.breakPoints.small - 1}) {
      max-width: 100%;
    }
  `}
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.grayish.darkCyan};
  flex-direction: column;
  margin-bottom: ${(props) => (props.mb ? `${props.mb + "px"}` : "16px")};
  margin-top: ${(props) => (props.mb ? `${props.mb + "px"}` : "16px")};
  position: relative;
`;

export const Icon = styled.img`
  position: absolute;
  left: 10px;
  top: 48px;
`;

export const Input = styled.input`
  border: none;
  height: 48px;
  text-align: right;
  padding: 5px;
  font-weight: bold;
  font-family: "Space Mono";
  outline: none;
  margin-top: 8px;
  display: block;

  width: 100%;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  ${({ value, valid, theme }) => css`
    background-color: ${theme.grayish.veryLightCyan};
    border-radius: ${theme.input.borderRadius};
    font-size: ${theme.input.fontSize};
    color: ${theme.darkCyan};
    border: 3px solid ${valid == false ? theme.red : "transparent"};
  `}

  ::placeholder {
    color: "#9ebbbd";
    font-weight: bolder;
  }

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
  margin-top: 8px;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  ${({ theme }) => `
    @media only screen and (max-width: ${theme.breakPoints.medium}) {
      grid-template-columns: repeat(2, 1fr);
    }
  `}
`;

export const Tip = styled.button`
  border: none;
  height: 48px;
  text-align: center;
  padding: 5px 0;
  cursor: pointer;
  transition: 0.3s ease-in;
  font-weight: bold;

  ${({ theme, selected }) => css`
    border-radius: ${({ theme }) => theme.input.borderRadius};
    font-size: ${({ theme }) => theme.input.fontSize};
    color: ${({ theme }) => theme.white};
    background-color: ${selected ? theme.strongCyan : theme.darkCyan};
  `}
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
  float: right;
  margin-right: 5px;
  color: ${({ theme }) => theme.red};

  &::after {
    clear: both;
  }

  ${({ theme }) => `
    @media only screen and (max-width: ${theme.breakPoints.medium}) {
      margin-right: 0px;
    }

  `}
`;
