import * as React from "react";
import styled from "styled-components";
import { SelectInput, FileInput, Checkbox } from "../Inputs";
import { Input, Button, InputError } from "../Stylings";
import bytesToMb from "../../utils/bytesToMB";
import ContactFormFile from "./ContactFormFile";
import Link from "../Link";
import { main } from "../../colors";

const MAX_FILES_SIZE = 80;
const MAX_FILES = 3;
const REQUIRED_ERROR = "Pole wymagane*";

const initialFormState: FormDict = {};
interface FormState {
  value?: any;
  error?: string;
  checked?: boolean;
}

type FormDict = {
  [key in FormStateNames]?: FormState;
};

type FormStateNames =
  | "name"
  | "email"
  | "files"
  | "budget"
  | "description"
  | "checkbox";

const ContactForm = () => {
  const [inputData, setInputData] = React.useReducer<
    React.Reducer<FormDict, FormDict>
  >((state, oldState) => ({ ...state, ...oldState }), initialFormState);
  
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.FormEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files;

    if (!files || !files.length) return;

    const fullSize = bytesToMb(
      [...files].map(({ size }) => size).reduce((prev, curr) => prev + curr)
    );

    if (fullSize > MAX_FILES_SIZE) {
      setInputData({
        files: {
          error: "Zbyt duży rozmiar pliku/plików",
          value: [...files],
        },
      });

      return;
    }

    if (files.length > MAX_FILES) {
      setInputData({
        files: {
          error: `Wybrałes zbyt dużo plików. (Max ${MAX_FILES})`,
          value: [...files],
        },
      });

      return;
    }

    setInputData({
      files: {
        value: [...files],
        error: "",
      },
    });
  };

  const handleInutChange = (
    e: React.FormEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.currentTarget;
    setInputData({ [name]: { value } });
  };

  const handleCheckboxToggle = (e: React.FormEvent<HTMLInputElement>) => {
    const { checked, name } = e.currentTarget;
    setInputData({ [name]: { checked } });
  };

  const handleBlur = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.currentTarget;
    if (value) return;

    setInputData({
      [name]: {
        error: REQUIRED_ERROR,
      },
    });
  };

  const { name, email, description, budget, checkbox, files } = inputData;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!checkbox?.checked) {
      setInputData({
        checkbox: {
          error: REQUIRED_ERROR,
        },
      });
      return;
    }

    const formData = new FormData();

    const errors = Object.entries(inputData)
      .map(([name, data]) => {
        formData.append(name, data.value || data.checked);
        return data.error;
      })
      .filter((err) => err);

    if (errors.length) return;

    //TODO: Czekamy na backend
  };

  const removeFile = (index: number) => {
    const filesArr: File[] = files?.value;
    filesArr.splice(index, 1);

    setInputData({
      files: {
        value: filesArr
      },
    });

    if(fileInputRef.current && !filesArr.length)
      fileInputRef.current.value = "";
  }

  return (
    <Wrapper id="contact-form" onSubmit={handleSubmit}>
      <InputGroup>
        <InputWrapper>
          <InputError>{name?.error}</InputError>
          <Input
            placeholder="Imię*"
            name="name"
            value={name?.value || ""}
            onChange={handleInutChange}
            onBlur={handleBlur}
          />
        </InputWrapper>
        <InputWrapper>
          <InputError>{email?.error}</InputError>
          <Input
            placeholder="Email*"
            type="email"
            name="email"
            value={email?.value || ""}
            onChange={handleInutChange}
            onBlur={handleBlur}
          />
        </InputWrapper>
        <SelectInput
          label="Posiadany budżet"
          name="budget"
          value={budget?.value || ""}
          onChange={handleInutChange}
          data={[
            { display: "Test", value: "t1" },
            { display: "Test2", value: "t12" },
          ]}
        />
      </InputGroup>
      <InputGroup>
        <DescriptionInputWrapper>
          <InputError>{description?.error}</InputError>
          <TextArea
            as="textarea"
            placeholder="Opis zapotrzebowania*"
            name="description"
            value={description?.value || ""}
            onChange={handleInutChange}
            onBlur={handleBlur}
          />
        </DescriptionInputWrapper>
        <InputWrapper>
          <InputError>{files?.error}</InputError>
          <FileInput 
            name="files" 
            onChange={handleFileChange} 
            ref={fileInputRef}
            multiple
          >
            Wgraj plik
          </FileInput>
        </InputWrapper>
      </InputGroup>
      {files?.value?.length > 0 && (
        <Files>
          {files?.value.map(({ size, name }: File, index: number) => (
            <ContactFormFile 
              key={name} 
              name={name} 
              size={size}
              onRemove={() => removeFile(index)}
            />
          ))}
        </Files>
      )}
      <BottomInputGroup>
        <Checkbox
          name="checkbox"
          error={checkbox?.error}
          onChange={handleCheckboxToggle}
        >
          *Wypełnienie formularza oznacza, że podane w nim dane osobowe będą
          przetwarzane w celu przesłania oferty oraz kontaktu w jej sprawie.
          <br />
          <Link to="#">Dowiedz się kto i jak przetwarza Twoje dane.</Link>
        </Checkbox>
        <Button type="submit">Wyślij brief</Button>
      </BottomInputGroup>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  background: white;
  padding: 24px;

  @media screen and (min-width: 1150px) {
    padding: 96px;
    gap: 24px;
  }
`;

const InputGroup = styled.div`
  display: grid;
  gap: 24px;
  flex-direction: column;

  &:last-child {
    justify-content: space-between;
  }

  @media screen and (min-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const DescriptionInputWrapper = styled(InputWrapper)`
  grid-column: 1 / 3;
`;

const TextArea = styled(Input)`
  height: 128px;
`;

const Files = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px 0;
  display: flex;
  gap: 16px;
`;

const BottomInputGroup = styled(InputGroup)`
  display: flex;

  a{
    color: ${main};
    text-decoration: underline;
  }
  
  @media screen and (min-width: 800px){
    justify-content: space-between;
    flex-direction: row;
  }
`;

export default ContactForm;
