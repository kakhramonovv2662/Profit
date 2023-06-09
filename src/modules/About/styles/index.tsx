import styled from "styled-components";
import { HeroBgImg, HeroImg, HeroSmallImg } from "src/assets/images";

export const AboutSection = styled.section`
  position: relative;

  @media only screen and (max-width: 961px) {
  }

  @media only screen and (max-width: 540px) {
    .about-button {
      max-width: 100%;
      width: 100%;
    }
  }
`;

export const AboutContainer = styled.div`
  display: flex;
`;

export const WrppaerElements = styled.div`
  max-width: 80%;
  width: 100%;
  padding-top: 70px;
  padding-bottom: 215px;

  @media only screen and (max-width: 721px) {
    max-width: 650px;
  }

  @media only screen and (max-width: 540px) {
    max-width: 100%;
    text-align: center;
    padding-bottom: 450px;

    h2 {
      font-size: 30px;
      line-height: 30px;
      margin-bottom: 32px;
    }

    p {
      font-size: 20px;
      margin-bottom: 45px;
      margin-left: auto;
      margin-right: auto;
    }
  }

  @media only screen and (max-width: 420px) {
    max-width: 100%;

    h2 {
      font-size: 25px;
      line-height: 30px;
    }

    p {
      max-width: 350px;
      font-size: 18px;
    }
  }
`;

export const WrapperTitle = styled.h2`
  font-weight: 800;
  font-size: 58px;
  line-height: 68px;
  color: #ffffff;
  margin-bottom: 9px;

  @media only screen and (max-width: 961px) {
    font-size: 39px;
    line-height: 45px;
    margin-bottom: 18px;
  }
`;

export const WrapperText = styled.p`
  max-width: 610px;
  width: 100%;
  font-size: 24px;
  line-height: 27px;
  color: #ffffff;
  margin-top: 9px;
  margin-bottom: 84px;

  @media only screen and (max-width: 961px) {
    max-width: 440px;
  }
`;

export const AboutImage = styled.div`
  background-image: url(${HeroImg});
  width: 543px;
  min-height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  right: 0;

  @media only screen and (max-width: 961px) {
    max-width: 55%;
    min-width: 55%;
    width: 100%;
    background-image: url(${HeroBgImg});
  }

  @media only screen and (max-width: 720px) {
    max-width: 45%;
    min-width: 45%;
    background-image: url(${HeroSmallImg});
    right: -40px;
  }

  @media only screen and (max-width: 540px) {
    max-width: 100%;
    position: relative;
    top: 0;
    right: 0;
    background-image: url(${HeroBgImg});
    margin-bottom: 50px;
    background-position: 50% 50%;
  }
`;
