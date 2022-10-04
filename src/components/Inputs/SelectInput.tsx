import * as React from "react";
import styled from "styled-components";
import gsap from "gsap";
import { Input } from "../Stylings";
import ArrowDown from "../../images/svgs/arrow-down.inline.svg";
import { dark, darkGray, gray } from "../../colors";

const SelectInput = ({ label, data, error, ...dom }: InputProps) => {
  const [isOpen, setOpenState] = React.useState(false);
  const [value, setValue] = React.useState<string | number | readonly string[]>(
    ""
  );

  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const selectBoxRef = React.useRef<HTMLDivElement>(null);
  const selectRef = React.useRef<HTMLSelectElement>(null);

  React.useEffect(() => {
    value !== "" && selectRef.current?.dispatchEvent(
      new Event("change", {
        bubbles: true,
        cancelable: true,
      })
    );
  }, [value]);

  React.useEffect(() => {
    setValue(dom?.value || "");
  }, [dom?.value]);

  React.useEffect(() => {
    const click = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target !== wrapperRef.current &&
        !wrapperRef.current?.contains(target)
      )
        close();
    };

    document.addEventListener("click", click);
    return () => document.removeEventListener("click", click);
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dom?.onChange && dom?.onChange(e);
    setValue(e.target.value);
  };

  const open = () => {
    gsap.to(selectBoxRef.current, { height: "auto" });
    setOpenState(true);
  };

  const close = () => {
    gsap.to(selectBoxRef.current, { height: 0 });
    setOpenState(false);
  };

  const switchOpen = () => (isOpen ? close() : open());

  return (
    <Wrapper ref={wrapperRef} as="div" onClick={switchOpen} className="select">
      <ErrMsg>{error}</ErrMsg>
      <SelectWrapper as="div" className="select-wrapper">
        <Select
          ref={selectRef}
          id={dom?.name}
          name={dom?.name}
          onChange={onChange}
          value={value}
        >
          <option value="">{label}</option>
          {data?.map(({ display, value }) => (
            <option value={value} key={display}>
              {display}
            </option>
          ))}
        </Select>
        <SelectBox ref={selectBoxRef}>
          {data?.map(({ display, value }) => (
            <SelectDisplay
              key={value}
              onClick={() => setValue(value)}
              className="select-choice"
            >
              {display}
            </SelectDisplay>
          ))}
        </SelectBox>
      </SelectWrapper>
      <IconContainer>
        <Arrow>
          <ArrowDown />
        </Arrow>
      </IconContainer>
    </Wrapper>
  );
};

type InputProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  data?: { display: string; value: any }[];
  error?: string;
};

const Wrapper = styled(Input)`
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  cursor: pointer;
  font-family: "Open Sauce Sans";

  @media screen and (min-width: 1150px) {
    margin: 0;
  }
`;

const Icon = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
`;

const IconContainer = styled.div`
  background: ${gray};
  display: grid;
  place-items: center;
  height: 100%;
  width: 56px;
`;

const Arrow = styled(Icon)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 8px;
`;

const SelectWrapper = styled.div`
  font-family: "Open Sauce Sans";
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background: ${gray};
`;

const Select = styled.select<{ value?: any }>`
  font-family: "Open Sauce Sans";
  border: none;
  width: 100%;
  color: ${({ value }) => (value ? dark : darkGray)};
  font-size: 16px;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;
  pointer-events: none;
  background: transparent;
`;

const ErrMsg = styled.span`
  padding: 2px;
  top: -12px;
  font-size: 12px;
  color: red;
  left: 12px;
  position: absolute;
`;

const SelectBox = styled.div`
  width: 100%;
  height: 0;
  background: ${gray};
  position: absolute;
  top: 100%;
  left: 0;
  overflow: hidden;
  z-index: 5;
`;

const SelectDisplay = styled.p`
  cursor: pointer;
  padding: 0;
  margin: 0;
  height: 40px;
  font-weight: 500;
  padding: 24px;
  display: flex;
  align-items: center;
  transition: 0.2s color, 0.2s background;
  background: #F2F2FA;
`;

export default SelectInput;
