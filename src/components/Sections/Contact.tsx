import * as React from "react";
import styled from "styled-components";
import { main } from "../../colors";
import ContactForm from "../ContactForm";
import { Title } from "../Stylings";

const Contact = ({ displayTitle }: ContactProps) => (
  <Wrapper>
    {displayTitle &&
      <Title>Skontaktuj się z nami a my wycenimy Twoją stronę!</Title>
    }
    <ContactForm />
  </Wrapper>
);

interface ContactProps{
  displayTitle?: boolean
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 48px;
  background: ${main};
  padding: 0 24px;
  padding-top: 48px;
  margin-top: -1px;

  @media screen and (min-width: 1150px){
    padding: 0 64px;
    padding-top: 96px;

    h2{
      font-size: 36px;
    }
  }
`;

export default Contact;