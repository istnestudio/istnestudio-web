import * as React from "react";
import styled from "styled-components";
import Link from "../Link";
import { PaddingX } from "../Stylings";
import { main } from "../../colors";

const links = [
  { display: "przeczytaj więcej o naszych stronach", href: "#" },
  { display: "nasze realizacje", href: "#" },
  { display: "oferta dla dewelopera", href: "#" },
];

const Footer = () => (
  <Wrapper as="footer">
    <InfoLinks>
      {links.map(({ display, href }) => (
        <InfoLink key={display}>
          <Link to={href}>
            {display}
          </Link>
        </InfoLink>
      ))}
    </InfoLinks>
    <CompanyBar>
        <CompanyBarItem>istnestudio | wszelkie prawa zastrzeżone</CompanyBarItem>
        <CompanyBarItem>
          <Link to="#">
            polityka prywatności
          </Link>
        </CompanyBarItem>
    </CompanyBar>
  </Wrapper>
);

const Wrapper = styled(PaddingX)`
  background: ${main};
  padding-bottom: 48px;

  @media screen and (min-width: 800px){
    padding-bottom: 96px;
  }
`;

const InfoLinks = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
  margin-bottom: 48px;
  gap: 24px;
  flex-direction: column;

  @media screen and (min-width: 800px){
    flex-direction: row;
    gap: 32px;
  }
`;

const InfoLink = styled.li`
  font-size: 20px;
  text-decoration: underline;
  color: white;
`;

const CompanyBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 800px){
    justify-content: space-between;
    flex-direction: row;
  }
`;

const CompanyBarItem = styled.p`
  font-size: 12px;
  color: white;
  font-weight: 500;

  a{
    text-decoration: underline;
  }
`;

export default Footer;