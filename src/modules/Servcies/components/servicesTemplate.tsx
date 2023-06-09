import React, { useEffect, useRef } from "react";
import { servicesData } from "src/constants/services.constant";
import {
  CarouselNextBtn,
  CarouselPrevBtn,
  ServicesCarousel,
  ServicesComponent,
  ServicesContainer,
  ServicesList,
  ServicesListItems,
  ServicesListTitle,
  ServicesTitle,
} from "../styles";
import { ServicesDataTypes } from "../types";
import { Button } from "src/components";

const ServicesTemplate = () => {
  const boxRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const box = boxRef.current;

    const btnPrePrev = () => {
      if (box) {
        const width = box?.clientWidth || 0;
        box.scrollLeft = box.scrollLeft - width;
      }
    };

    const btnNextPrev = () => {
      if (box) {
        const width = box?.clientWidth || 0;
        box.scrollLeft = box.scrollLeft + width;
      }
    };

    const prevButton = document.getElementById(
      "prevButton"
    ) as HTMLElement | null;
    prevButton?.addEventListener("click", btnPrePrev);

    const nextButton = document.getElementById(
      "nextButton"
    ) as HTMLElement | null;
    nextButton?.addEventListener("click", btnNextPrev);

    return () => {
      prevButton?.removeEventListener("click", btnPrePrev);
      nextButton?.removeEventListener("click", btnNextPrev);
    };
  }, []);

  return (
    <ServicesComponent>
      <ServicesContainer>
        <ServicesTitle>Услуги</ServicesTitle>

        <ServicesCarousel>
          <CarouselPrevBtn id="prevButton">
            <p>&lt;</p>
          </CarouselPrevBtn>
          <CarouselNextBtn id="nextButton">
            <p>&gt;</p>
          </CarouselNextBtn>

          <ServicesList ref={boxRef} id="box">
            {servicesData?.map(
              ({ title, buttonText }: ServicesDataTypes, index: number) => {
                return (
                  <ServicesListItems key={index}>
                    <ServicesListTitle>{title}</ServicesListTitle>

                    <Button className="services-btn">{buttonText}</Button>
                  </ServicesListItems>
                );
              }
            )}
          </ServicesList>
        </ServicesCarousel>
      </ServicesContainer>
    </ServicesComponent>
  );
};

export default ServicesTemplate;
