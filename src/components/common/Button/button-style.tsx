import styled from "styled-components";

export const ButtonComponent = styled.button`
  font-weight: 800;
  font-size: 16px;
  line-height: 24px;
  text-transform: uppercase;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #2e2e2e;
  padding: 24px 40px;
  background-color: #fff;
  border-radius: 80px;
  transition: all 0.2s ease;

  &:hover {
    transition: all 0.2s ease;
    background-color: #0b9eee;
    color: #fff;
  }
`;
