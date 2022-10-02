import * as React from "react";
import styled from "styled-components";
import { SelectInput, FileInput, Checkbox } from "./Inputs";
import { Input, Button } from "./Stylings";

const ContactForm = () => {
  return(  
    <Wrapper>
      <InputGroup>
        <Input placeholder="Imię" name="name"/>
        <Input placeholder="Email" type="email" name="email"/>
        <SelectInput
          label="Posiadany budżet"
          data={[
            { display: "Test", "value": "t1" },
            { display: "Test2", "value": "t12" },
          ]}
        />
      </InputGroup>
      <InputGroup>
        <Input as="textarea" placeholder="Opis zapotrzebowania"/>
        <FileInput>Wgraj plik</FileInput>
      </InputGroup>
      <InputGroup>
        <Checkbox>
          *Wypełnienie formularza oznacza, że podane w nim dane osobowe będą przetwarzane w celu przesłania oferty oraz kontaktu w jej sprawie.<br/>
           Dowiedz się kto i jak przetwarza Twoje dane. 
        </Checkbox>
        <Button type="submit">
          Wyślij brief
        </Button>
      </InputGroup>
    </Wrapper>
  )
}

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  background: white;
  padding: 24px;

  @media screen and (min-width: 1150px){
    padding: 96px;
    gap: 24px;
  }
`;

const InputGroup = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;

  &:last-child{
    justify-content: space-between;
  }

  @media screen and (min-width: 800px){
    flex-direction: row;
  }
`;

export default ContactForm;