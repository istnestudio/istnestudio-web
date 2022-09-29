import * as React from "react";
import { motion, Variants } from "framer-motion";
import styled from "styled-components";
import HamburgerButton from "./HamburgerButton";
import selects from "../../selects";
import { main } from '../../colors';
import Link from "../Link";

const HamburgerMenu = ({ onToggle }: HamburgerMenuProps) => {
  const [open, setOpenState] = React.useState(false);

  React.useEffect(() => {
    onToggle && onToggle(open);
  }, [ open ])

  const switchMenu = () =>
    setOpenState(prev => !prev);

  return (
    <>
      <HamburgerButton dom={{ onClick: switchMenu }} />
      <Menu
        animate={open ? "open" : "closed"}
        variants={menuVariants}
        initial="closed"
      >
        {selects.map(({ href, display }) => (
          <motion.div key={display} variants={itemVariants}>
            <Link to={href}>
              <Select>
                {display}
              </Select>
            </Link>
          </motion.div>
        ))}
      </Menu>
    </>
  )
}

const menuVariants: Variants = {
  open: {
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  },
  closed: {
    x: "100%",
    transition: {
      duration: 0.3,
      ease: "easeIn",
      staggerChildren: 0.1,
      delay: 0.4,
    }
  }
}

const itemVariants = {
  closed: {
    opacity: 0,
    x: -10
  },
  open: {
    opacity: 1,
    x: 0
  }
};

interface HamburgerMenuProps{
  onToggle?: ( open: boolean ) => any
}

const Menu = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 32px;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  background: ${main};
  padding: 24px;
  padding-top: 116px;
  z-index: 100;
  
  @media screen and (min-width: 1150px){
    display: none;
  }
`;

const Select = styled.p`
  color: white;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  margin: 0;
`;

export default HamburgerMenu;