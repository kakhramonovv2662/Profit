import { descriptionData } from "src/constants/description.constant";
import {
  DescriptionContainer,
  DescriptionItemImg,
  DescriptionItemText,
  DescriptionList,
  DescriptionListItem,
  DescriptionSection,
} from "../styles";
import { DescriptionDataTypes } from "src/modules/About/types";
import { ServicesTitle } from "src/modules/Servcies/styles";
import { useState } from "react";
import DescriptionModal from "./Modal";

const DescriptionComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <DescriptionSection>
      <DescriptionModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <DescriptionContainer>
        <ServicesTitle>Как мы работаем</ServicesTitle>
        <DescriptionList onClick={() => setIsOpen(!isOpen)}>
          {descriptionData?.map(
            ({ icon, text }: DescriptionDataTypes, index: number) => {
              return (
                <DescriptionListItem key={index}>
                  <DescriptionItemImg
                    src={icon}
                    alt="item-icon"
                    width={83}
                    height={83}
                  />

                  <DescriptionItemText>{text}</DescriptionItemText>
                </DescriptionListItem>
              );
            }
          )}
        </DescriptionList>
      </DescriptionContainer>
    </DescriptionSection>
  );
};

export default DescriptionComponent;
