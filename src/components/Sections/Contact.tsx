import * as React from "react";
import styled from "styled-components";
import { main } from "../../colors";
import ContactForm from "../ContactForm";
import { Title } from "../Stylings";

const Contact = () => (
  <Wrapper>
    <Title>Skontaktuj się z nami a my wycenimy Twoją stronę!</Title>
    <ContactForm/>
  </Wrapper>
)

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 48px;
  background: ${main};
  padding: 48px 24px;

  @media screen and (min-width: 1150px){
    padding: 96px 64px;

    h2{
      font-size: 36px;
    }
  }
`;

export default Contact;