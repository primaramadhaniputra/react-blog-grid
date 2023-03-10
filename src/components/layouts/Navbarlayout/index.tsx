import React from "react"
import Navbar from "../../organism/Navbar"
import { Wrapper } from "./styled"

interface IProps {
  children: React.ReactNode
}

export default function NavbarLayout({ children }: IProps) {
  return (
    <Wrapper>
      <Navbar />
      {/* {children} */}
    </Wrapper>
  )
}
