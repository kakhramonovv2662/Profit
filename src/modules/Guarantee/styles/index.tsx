import styled from "styled-components";

export const GuaranteeSection = styled.section`
  @media only screen and (max-width: 760px) {
    .guarantee-title {
      font-size: 30px;
      line-height: 55px;
    }
  }

  @media only screen and (max-width: 560px) {
    .guarantee-title {
      font-size: 25px;
      line-height: 45px;
    }
  }

  @media only screen and (max-width: 374px) {
    .guarantee-title {
      font-size: 17px;
      line-height: 35px;
    }
  }
`;
export const GuaranteeContainer = styled.div``;
export const GuaranteeList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media only screen and (max-width: 560px) {
    display: block;
    margin: 0 auto;
  }
`;
export const GuaranteeListItems = styled.li`
  max-width: 300px;
  height: 163px;
  padding: 55px 40px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.1) -1.79%,
    rgba(255, 255, 255, 0.024) 123.08%
  );
  backdrop-filter: blur(60px);
  border-radius: 30px;
  position: relative;
  margin: 25px 10px;

  @media only screen and (max-width: 963px) {
    max-width: 237px;
    height: 130px;
    padding: 45px 30px;
  }

  @media only screen and (max-width: 760px) {
    max-width: 27%;
    height: 113px;
    padding: 30px 20px;
  }

  @media only screen and (max-width: 560px) {
    max-width: 100%;
    margin: 60px auto;
    padding: 45px 40px;
    text-align: center;
  }
`;
export const GuaranteeItemImg = styled.img`
  position: absolute;
  top: -20px;
  left: 0;

  @media only screen and (max-width: 760px) {
    width: 40px;
    height: 40px;
  }
`;
export const GuaranteeItemText = styled.p`
  font-size: 24px;
  line-height: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;

  @media only screen and (max-width: 963px) {
    font-size: 19px;
  }

  @media only screen and (max-width: 760px) {
    font-size: 16px;
    line-height: 20px;
  }

  @media only screen and (max-width: 560px) {
    font-size: 19px;
    line-height: 20px;
  }
`;
