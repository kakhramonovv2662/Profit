import {
  AboutContainer,
  AboutImage,
  AboutSection,
  WrapperText,
  WrapperTitle,
  WrppaerElements,
} from "../styles";
import { Button } from "src/components";

const Hero = () => {
  return (
    <AboutSection>
      <AboutContainer>
        <WrppaerElements>
          <WrapperTitle>
            Разаработка сайтов <br /> и мобильных приложений
          </WrapperTitle>
          <WrapperText>
            Помогаем бизнесу увеличить прибыль с помощью digital-инструментов
          </WrapperText>
          <AboutImage />

          <Button className="about-button">Обсудить проект</Button>
        </WrppaerElements>
      </AboutContainer>
    </AboutSection>
  );
};

export default Hero;
