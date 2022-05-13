import styled from "styled-components";

export const Container = styled.div`
  max-width: 920px;
  background-color: ${({ theme }) => theme.white};
  width: 100%;
  min-height: 481px;
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 42px 48px;
  display: flex;
  column-gap: 48px;
`;
