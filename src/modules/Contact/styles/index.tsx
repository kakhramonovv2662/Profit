import styled from "styled-components";

// Contact Component

export const ContactSection = styled.section``;
export const ContactContainer = styled.div``;
export const ContactWrapper = styled.div`
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.1) -1.79%,
    rgba(255, 255, 255, 0.024) 123.08%
  );
  backdrop-filter: blur(60px);
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0 0 105px;
  margin-bottom: 85px;
  margin-top: 30px;

  @media only screen and (max-width: 760px) {
    padding: 0 0 0 59px;
  }

  @media only screen and (max-width: 566px) {
    display: block;
    padding: 20px 10px 39px 10px;
  }
`;
export const ContactWrapperContent = styled.div`
  max-width: 61%;
  padding-right: 15px;

  @media only screen and (max-width: 760px) {
    max-width: 51%;
  }

  @media only screen and (max-width: 566px) {
    text-align: center;
    margin: 0 auto;
    max-width: 100%;
    padding-top: 20px;
  }
`;
export const ContactWrapperTitle = styled.h2`
  font-weight: 800;
  font-size: 45px;
  line-height: 55px;
  text-align: center;
  color: #ffffff;
  text-align: left;
  margin-bottom: 25px;

  @media only screen and (max-width: 960px) {
    font-size: 35px;
    line-height: 42px;
  }

  @media only screen and (max-width: 760px) {
    font-size: 23px;
    line-height: 31px;
  }

  @media only screen and (max-width: 566px) {
    font-size: 30px;
    line-height: 42px;
    text-align: center;
  }
`;
export const ContactWrapperText = styled.p`
  font-size: 28px;
  line-height: 35px;
  display: flex;
  align-items: center;
  color: #ffffff;
  text-align: left;

  @media only screen and (max-width: 960px) {
    font-size: 22.6645px;
    line-height: 26px;
  }
  @media only screen and (max-width: 760px) {
    font-size: 15px;
    line-height: 20px;
  }
  @media only screen and (max-width: 566px) {
    font-size: 18px;
    line-height: 23px;
    text-align: center;
    margin-bottom: 50px;
  }
`;

// Contact Form
export const ContacFormtWrapper = styled.div`
  max-width: 445px;
  width: 100%;
  /* height: 445px; */
  padding: 50px 25px 20px 25px;
  background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.1) -1.79%,
      rgba(255, 255, 255, 0.024) 123.08%
    ),
    #000000;
  backdrop-filter: blur(60px);
  border-radius: 30px;
  position: relative;

  .form-btn {
    max-width: 100% !important;
    width: 100%;
  }

  @media only screen and (max-width: 560px) {
    margin: 0 auto;
  }
`;

export const ContacFormtTitle = styled.h2`
  font-weight: 800;
  font-size: 40px;
  line-height: 50px;
  color: #ffffff;

  @media only screen and (max-width: 960px) {
    font-size: 30.2193px;
    line-height: 38px;
  }

  @media only screen and (max-width: 760px) {
    font-size: 22.3256px;
    line-height: 28px;
  }

  @media only screen and (max-width: 560px) {
    font-size: 30px;
    line-height: 50px;
  }
`;

export const ContacFormtText = styled.p`
  font-size: 20px;
  line-height: 27px;
  display: flex;
  align-items: center;
  color: #ffffff;
  margin-bottom: 50px;

  @media only screen and (max-width: 960px) {
    font-size: 15.1097px;
    line-height: 20px;
  }
  @media only screen and (max-width: 760px) {
    font-size: 11.1628px;
    line-height: 15px;
  }
  @media only screen and (max-width: 560px) {
    font-size: 18px;
    line-height: 27px;
  }
`;
