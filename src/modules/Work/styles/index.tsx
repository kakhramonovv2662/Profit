import styled from "styled-components";

export const DescriptionSection = styled.section`
  .description-modal {
    max-width: 70%;
    width: 100%;
    display: none;
  }

  @media only screen and (max-width: 961px) {
    .description-modal.active {
      display: block;
    }
  }

  .description-modal-list {
    display: block;
    margin: 0;
    position: absolute;
    z-index: 100;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media only screen and (max-width: 560px) {
      display: none;
    }
  }

  .description-modal-item {
    max-width: 100%;
    margin-bottom: 60px;
  }

  .description-modal-text {
    @media only screen and (max-width: 960px) {
      font-size: 23px;
    }

    @media only screen and (max-width: 760px) {
      font-size: 16px;
    }
  }
`;

export const DescriptionContainer = styled.div``;
export const DescriptionList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background: linear-gradient(90deg, #622cb279 -1.52%, #832cb2b7 104.35%);
  backdrop-filter: blur(60px);
  border-radius: 30px;
  padding: 73px 50px;
  /* margin-bottom: 250px; */

  @media only screen and (max-width: 760px) {
    padding: 30px 20px;
    justify-content: space-around;
  }
`;
export const DescriptionListItem = styled.li`
  max-width: 50%;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 30px 0;

  @media only screen and (max-width: 760px) {
    max-width: 45%;
  }

  @media only screen and (max-width: 560px) {
    max-width: 100%;
  }
`;
export const DescriptionItemImg = styled.img`
  @media only screen and (max-width: 960px) {
    width: 60px;
    height: 60px;
  }

  @media only screen and (max-width: 760px) {
    width: 50px;
    height: 50px;
  }
`;
export const DescriptionItemText = styled.p`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 35px;
  display: flex;
  align-items: center;
  color: #ffffff;
  margin-left: 30px;

  @media only screen and (max-width: 960px) {
    font-size: 20px;
    line-height: 30px;
    margin-left: 20px;
  }

  @media only screen and (max-width: 760px) {
    font-size: 16px;
    line-height: 27px;
    margin-left: 17px;
  }
`;
