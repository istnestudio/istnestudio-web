import * as React from "react";
import { graphql, PageProps } from "gatsby";
import styled from "styled-components";
import Layout from "../layouts";
import ContactForm from "../components/ContactForm";
import { PaddingX } from "../components/Stylings";
import SEO from "../components/Seo";
import { main } from "../colors";

const Contact = ({
  data: { datoCmsContact },
}: PageProps<Pick<Queries.Query, "datoCmsContact">>) => {
  if (!datoCmsContact) return null;

  const { mail, phone, nip } = datoCmsContact;

  return (
    <Layout displayContactForm={false} color="white" background={main}>
      <Wrapper>
        <ContactFormInfos>
          <ContactInfo label="mail" content={mail || ""} />
          <ContactInfo label="tel." content={phone || ""} />
          <ContactInfo label="nip" content={nip || ""} />
        </ContactFormInfos>
        <ContactForm/>
      </Wrapper>
    </Layout>
  );
};

export const Head = () => 
  <SEO
    title="Kontakt"
  />;

export const query = graphql`
  {
    datoCmsContact {
      nip
      phone
      mail
    }
  }
`;

const Wrapper = styled(PaddingX)`
  background: ${main};
  display: flex;
  flex-direction: column;
  padding-top: 48px;
  margin-top: -1px;
  gap: 32px;
  min-height: 89.2vh;

  @media screen and (min-width: 1150px) {
    padding-top: 0;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const ContactFormInfos = styled.div`
  height: fit-content;
  flex-direction: column;
  display: flex;
  gap: 24px;

  @media screen and (min-width: 1150px) {
    flex-direction: row;
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

interface ContactInfoProps {
  label: string;
  content: string;
}

const ContactInfoWrapper = styled(PaddingX)`
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: relative;
  height: fit-content;
  color: white;

  &::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 2px;
    left: 0;
    background: white;
  }

  @media screen and (min-width: 1150px) {
    padding-left: 24px;
  }
`;

const ContactInfoLabel = styled.p`
  margin: 0;
  padding: 0;
  font-size: 16px;

  @media screen and (min-width: 1150px) {
    font-size: 20px;
  }
`;

const ContactInfoContent = styled(ContactInfoLabel)`
  font-size: 24px;

  @media screen and (min-width: 1150px) {
    font-size: 36px;
  }
`;

export default Contact;
