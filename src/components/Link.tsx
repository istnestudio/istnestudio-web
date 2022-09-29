import * as React from "react"
//@ts-ignore-error
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { main } from '../colors';

const Link = ({ children, to }: React.PropsWithChildren<LinkProps>) =>
  <AniLink cover to={to} bg={main}>{children}</AniLink>

interface LinkProps {
  to: string
}

export default Link;