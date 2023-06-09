import styled from "styled-components";

// Submit Form
export const ContactForm = styled.form`
  .submit-button {
    max-width: 100%;
    width: 100%;
    margin-top: 100px;
  }

  @media only screen and (max-width: 560px) {
    .submit-button {
      margin-top: 57px;
    }
  }
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 24px 0 24px 45px;
  margin-bottom: 15px;
  background: #f9fafe;
  border-radius: 80px;
  font-size: 16px;
  line-height: 24px;
  text-transform: uppercase;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #241d1d;

  &::placeholder {
    border-radius: 80px;
    font-size: 16px;
    line-height: 24px;
    text-transform: uppercase;
    font-feature-settings: "pnum" on, "lnum" on;
    color: #808080;
  }
`;

// Success Form
export const SuccessWrapper = styled.div`
  .success-btn {
    max-width: 100%;
    width: 100%;
    color: #219653;
  }
`;

export const SuccessIcon = styled.img`
  margin: 0 auto;
`;
