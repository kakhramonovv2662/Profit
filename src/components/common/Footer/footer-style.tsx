import styled from "styled-components";

export const FooterSecton = styled.footer`
  background: linear-gradient(180deg, #131a15 0%, #090b3a 100%);
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #f5f5f5;
  padding: 20px;
  text-align: center;

  .footer-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 55px 0;
  }

  @media only screen and (max-width: 5920px) {
    position: relative;
  }

  @media only screen and (max-width: 560px) {
    .footer-list {
      display: flex;
      flex-direction: column;
    }

    .footer-list-item {
      display: block;
      font-size: 20px;
      margin: 20px 0;
    }
  }
`;

export const FooterContainer = styled.div`
  background: linear-gradient(180deg, #131a15 0%, #090b3a 100%);
`;
