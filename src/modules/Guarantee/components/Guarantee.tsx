import { ServicesTitle } from "src/modules/Servcies/styles";
import {
  GuaranteeContainer,
  GuaranteeItemImg,
  GuaranteeItemText,
  GuaranteeList,
  GuaranteeListItems,
  GuaranteeSection,
} from "../styles";
import { guaranteeData } from "src/constants/guarantee.contant";
import { Checked } from "src/assets/images";

const GuaranteeComponent = () => {
  return (
    <GuaranteeSection>
      <GuaranteeContainer>
        <ServicesTitle className="guarantee-title">
          <span
            style={{
              backgroundColor: "#222",
              color: "#fff",
              borderRadius: "20px",
              padding: "15px 10px",
              marginBottom: "40px",
            }}
          >
            Что даст вашему бизнесу
          </span>
          <br />
          внедрение Digital-инструментов
        </ServicesTitle>

        <GuaranteeList>
          {guaranteeData?.map(({ text }, index: number) => {
            return (
              <GuaranteeListItems key={index}>
                <GuaranteeItemImg src={Checked} width={50} height={50} />
                <GuaranteeItemText>{text}</GuaranteeItemText>
              </GuaranteeListItems>
            );
          })}
        </GuaranteeList>
      </GuaranteeContainer>
    </GuaranteeSection>
  );
};

export default GuaranteeComponent;
