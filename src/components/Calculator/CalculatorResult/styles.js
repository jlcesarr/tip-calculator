import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.darkCyan};
  width: 100%;
  height: 100%;
  border-radius: 15px;
  padding: 60px 30px;
  position: relative;
  display: grid;
  flex-direction: column;
`;

export const Result = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ResultLabel = styled.span`
  color: ${({ theme }) => theme.white};
  font-size: 16px;
  font-weight: bold;

  & > span {
    display: block;
    font-size: 13px;

    color: ${({ theme }) => theme.grayish.cyan};
  }
`;

export const Value = styled.div`
  display: flex;
  letter-spacing: -1px;
  flex-direction: space-between;
  font-size: 48px;
  color: ${({ theme }) => theme.strongCyan};
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.strongCyan};
  color: ${({ theme }) => theme.darkCyan};
  font-weight: bold;
  cursor: pointer;
  max-width: 390px;
  text-transform: uppercase;
  border-radius: 5px;
  font-size: 20px;
  height: 48px;
  align-self: end;
  border: none;
`;
