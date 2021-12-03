import { ReactNode } from "react";

import '../styles/header.scss'

interface HeaderProps{
  children: ReactNode;
}

export function Header({ children }: HeaderProps){
  return(
    <header>
      <span className="category">Categoria:<span> {children}</span></span>
    </header>
  )
}
