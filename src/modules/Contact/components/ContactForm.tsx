import { useState } from "react";
import { Button } from "src/components";
import {
  ContacFormtText,
  ContacFormtTitle,
  ContacFormtWrapper,
  ContactContainer,
  ContactSection,
} from "../styles";
import {
  ContactForm,
  FormInput,
  SuccessIcon,
  SuccessWrapper,
} from "../styles/form";
import { Success } from "src/assets/images";

const ReceiveComponent = () => {
  return (
    <SuccessWrapper>
      <SuccessIcon src={Success} alt="success-icon" width={68} height={68} />
      <ContacFormtTitle>Cпасибо за вашу заявку!</ContacFormtTitle>
      <ContacFormtText>Наш менеджер cкоро свяжется с вами</ContacFormtText>
      <Button className="success-btn">отправлено</Button>
    </SuccessWrapper>
  );
};

const SubmitComponent = ({
  setSubmit,
}: {
  submit: boolean | string;
  setSubmit: (submit: boolean | string) => void;
}) => {
  return (
    <ContactForm
      onSubmit={() => {
        setSubmit("submit");
      }}
    >
      <FormInput type="text" placeholder="Ваше имя" required />
      <FormInput type="number" placeholder="номер телефона" required />

      <Button type="submit" className="submit-button">
        Отправить
      </Button>
    </ContactForm>
  );
};

const CreateComponent = ({
  setSubmit,
}: {
  submit: boolean | string;
  setSubmit: (submit: boolean | string) => void;
}) => {
  return (
    <>
      <ContacFormtTitle>Получить бесплатную консультацию</ContacFormtTitle>
      <ContacFormtText>
        В рамках консультации уточним необходимую информацию для анализа вашего
        проекта
      </ContacFormtText>
      <Button
        className="form-btn"
        onClick={() => {
          setSubmit("create");
        }}
      >
        Получить
      </Button>
    </>
  );
};

const ContactComponent = () => {
  const [submit, setSubmit] = useState<boolean | string>(false);
  return (
    <ContactSection>
      <ContactContainer>
        <ContacFormtWrapper>
          {submit === "create" ? (
            <SubmitComponent submit={submit} setSubmit={setSubmit} />
          ) : submit === "submit" ? (
            <ReceiveComponent />
          ) : (
            <CreateComponent submit={submit} setSubmit={setSubmit} />
          )}
        </ContacFormtWrapper>
      </ContactContainer>
    </ContactSection>
  );
};

export default ContactComponent;
