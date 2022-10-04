import * as React from "react";
import styled from "styled-components";
import { main } from "../colors";
import { PaddingX } from '../components/Stylings';
import Layout from "../layouts";
import { graphql } from 'gatsby';

const Contact = ({ data }: ContactPageProps) => {
  const { mail, phone, nip } = data.datoCmsContact;
  if(!mail || !phone || !nip) return null;

  return(
    <Layout
      displayTitle={false}
      color="white"
      background={main}
    >  
      <Wrapper>
        <ContactInfo
          label="mail"
          content={mail}
        />
        <ContactInfo
          label="tel."
          content={phone}
        />
        <ContactInfo
          label="nip"
          content={nip}
        />
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  {
    datoCmsContact{
      nip,
      phone,
      mail
    }
  }
`;

interface ContactPageProps{
  data: {
    datoCmsContact: Queries.DatoCmsContact
  }
}

const Wrapper = styled(PaddingX)`
  background: ${main};
  display: flex;
  flex-direction: column;
  padding-top: 48px;
  margin-top: -1px;
  gap: 24px;

  @media screen and (min-width: 1150px){
    flex-direction: row;
    width: 100%;
    flex-wrap: wrap;
    gap: 32px;
  }
`;

const ContactInfo = ({ label, content }: ContactInfoProps) => (
  <ContactInfoWrapper>
    <ContactInfoLabel>{label}</ContactInfoLabel>
    <ContactInfoContent>{content}</ContactInfoContent>
  </ContactInfoWrapper>
);

interface ContactInfoProps{
  label: string,
  content: string
}

const ContactInfoWrapper = styled(PaddingX)`
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: relative;
  color: white;

  &::before{
    content: "";
    position: absolute;
    height: 100%;
    width: 2px;
    left: 0;
    background: white;
  }

  @media screen and (min-width: 1150px){
    padding-left: 24px;
  }
`;

const ContactInfoLabel = styled.p`
  margin: 0;
  padding: 0;
  font-size: 16px;

  @media screen and (min-width: 1150px){
    font-size: 20px;
  }
`;

const ContactInfoContent = styled(ContactInfoLabel)`
  font-size: 24px;

  @media screen and (min-width: 1150px){
    font-size: 36px;
  }
`;

export default Contact;