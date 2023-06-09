import styled from "styled-components";

export const ServicesComponent = styled.section`
  .services-btn {
    border-radius: 80px;
    padding: 17px 70px;
    text-transform: capitalize;

    &:hover {
      color: #fff;
    }
  }

  @media only screen and (max-width: 960px) {
    .services-btn {
      padding: 13px 42px;
      font-weight: 800;
      font-size: 12.2772px;
      line-height: 18px;
      font-feature-settings: "pnum" on, "lnum" on;
      color: #2e2e2e;
    }

    @media only screen and (max-width: 760px) {
      .services-btn {
        padding: 10px 30px;
        font-size: 9.40299px;
        line-height: 14px;
      }
    }
  }
`;

export const ServicesContainer = styled.div``;

export const ServicesTitle = styled.h2`
  font-weight: 800;
  font-size: 50px;
  line-height: 68px;
  color: #ffffff;
  margin-bottom: 43px;
  margin-top: 50px;
  text-align: center;

  @media only screen and (max-width: 960px) {
    margin-bottom: 30px;
    font-size: 40px;
  }

  @media only screen and (max-width: 420px) {
    font-size: 33px;
    line-height: 30px;
  }
`;

export const ServicesCarousel = styled.div`
  position: relative;
  overflow: hidden;
`;

export const CarouselPrevBtn = styled.button`
  width: 60px;
  height: auto;
  position: absolute;
  z-index: 500;
  top: 0;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: #fff;
  top: 40%;
  display: none;

  @media only screen and (max-width: 540px) {
    display: block;
  }
`;

export const CarouselNextBtn = styled.button`
  width: 60px;
  height: auto;
  position: absolute;
  z-index: 500;
  top: 0;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: #fff;
  top: 40%;
  display: none;

  @media only screen and (max-width: 540px) {
    display: block;
  }
`;

export const ServicesList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media only screen and (max-width: 540px) {
    width: 200px;
    flex-wrap: nowrap;
    justify-content: start;
    overflow-x: hidden;
    scroll-behavior: smooth;
    margin: 0 auto;
  }
`;

export const ServicesListItems = styled.li`
  max-width: 315px;
  width: 100%;
  background: linear-gradient(90deg, #622cb279 -1.52%, #832cb2b7 104.35%);
  backdrop-filter: blur(60px);
  padding: 38px 85px 40px 25px;
  margin: 25px 30px;
  border-radius: 0 0 30% 0;

  @media only screen and (max-width: 960px) {
    max-width: 257px;
    margin: 25px 21px;
    padding: 29px 66px 24px 31px;
  }

  @media only screen and (max-width: 760px) {
    max-width: 197px;
    margin: 15px 15px;
    padding: 29px 66px 24px 31px;
  }

  @media only screen and (max-width: 540px) {
    max-width: 100%;
    padding: 29px;
  }
`;

export const ServicesListTitle = styled.h3`
  font-weight: 600;
  font-size: 35px;
  line-height: 40px;
  display: flex;
  align-items: center;
  color: #ffffff;
  margin-bottom: 45px;

  @media only screen and (max-width: 960px) {
    font-size: 24px;
    margin-bottom: 30px;
  }

  @media only screen and (max-width: 760px) {
    font-size: 18px;
    line-height: 24px;
  }
`;
