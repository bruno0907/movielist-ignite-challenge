import { ReactNode } from "react";

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