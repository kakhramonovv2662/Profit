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

const DescriptionModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  return (
    <DescriptionSection onClick={() => setIsOpen(false)}>
      <DescriptionContainer
        className={isOpen ? "description-modal active" : "description-modal"}
      >
        <div>
          <DescriptionList className="description-modal-list">
            {descriptionData?.map(
              ({ icon, text }: DescriptionDataTypes, index: number) => {
                return (
                  <DescriptionListItem
                    key={index}
                    className="description-modal-item"
                  >
                    <DescriptionItemImg
                      src={icon}
                      alt="item-icon"
                      width={83}
                      height={83}
                    />

                    <DescriptionItemText className="description-modal-text">
                      {text}
                    </DescriptionItemText>
                  </DescriptionListItem>
                );
              }
            )}
          </DescriptionList>
        </div>
      </DescriptionContainer>
    </DescriptionSection>
  );
};

export default DescriptionModal;
