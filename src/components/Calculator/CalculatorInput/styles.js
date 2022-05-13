import styled, { css } from "styled-components";

export const Container = styled.div``;

export const Label = styled.label`
  font-size: 16px;
  color: ${({ theme }) => theme.grayish.darkCyan};
  display: block;
  margin-bottom: ${(props) => (props.mb ? props.mb : "16px")};
  margin-top: ${(props) => (props.mt ? props.mt : "16px")};
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
`;

export const Percentages = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, 100px));
  gap: 16px;
  max-width: 379px;
`;

export const Tip = styled.div`
  background-color: ${({ theme }) => theme.darkCyan};
  height: 48px;
  font-size: ${({ theme }) => theme.input.fontSize};
  color: ${({ theme }) => theme.white};
  border-radius: ${({ theme }) => theme.input.borderRadius};
  text-align: center;
  padding: 5px 0;
  cursor: pointer;
`;

export const TipInput = styled(Tip)`
  outline: none;
  border: none;
  background-color: ${({ theme }) => theme.grayish.veryLightCyan};

  &,
  ::placeholder {
    color: ${({ theme }) => theme.grayish.darkCyan};
    font-weight: bold;
  }
`;
