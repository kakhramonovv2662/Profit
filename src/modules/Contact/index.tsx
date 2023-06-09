import ContactComponent from "./components/ContactForm";
import {
  ContactContainer,
  ContactSection,
  ContactWrapper,
  ContactWrapperContent,
  ContactWrapperText,
  ContactWrapperTitle,
} from "./styles";

const Contact = () => {
  return (
    <ContactSection>
      <ContactContainer>
        <ContactWrapper>
          <ContactWrapperContent>
            <ContactWrapperTitle>Сколько стоят услуги</ContactWrapperTitle>
            <ContactWrapperText>
              Цена рассчитывается индивидуально в зависимости отсложности,
              объема и сроков работы.
              <br />
              <br />
              Разработчик оценивает временные затраты по проекту, а аналитики
              устанавливают стоимость продукта.
            </ContactWrapperText>
          </ContactWrapperContent>

          <ContactComponent />
        </ContactWrapper>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
