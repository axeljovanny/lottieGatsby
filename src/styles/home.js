import styled from "styled-components"
import { above } from "./main"


export const Nav = styled.div`
  width: 90%;
  height: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;  ${above.large` 
  
  `}
`
export const Logo = styled.div`
  width: 15%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${above.large` 
  
  `}
`
export const Menu = styled.div`
  width: 15%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  ${above.large` 
  
  `}
`
export const Content = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;w;
`
export const Social = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Hero = styled.div`
  width: 85%;
  height: 100%;  position: relative;
`
export const Foto = styled.div`
  width: 70%;
  height: 80%;;
  position: absolute;
  right: 5%;
`
export const Tittle = styled.div`
  width: 70%;
  height: 40%;
  position: absolute;
  left: 1%;
  top: 30%;
`
export const TrebolOjo = styled.div`
  width: 15%;
  height: auto;
  position: absolute;
  left: 20%;
  top: 0%;
`
export const Pato = styled.div`
  width: 20%;
  height: 30%;
  position: absolute;
  right: 0%;
  bottom: 0%;
`
export const Trebol = styled.div`
  width: 15%;
  height: auto;
  position: absolute;
  right: 0%;
  bottom: 20%;
`
export const Dedos = styled.div`
  width: 20%;
  height: 25%;
  position: absolute;
  left: 5%;
  bottom: 0%;
`
export const Sticker = styled.div`
  width: 40%;
  height: auto;
  position: absolute;
  right: 20%;
  bottom: 10%;
`


export const LottieContainer = styled.div`
  margin: auto;
  width: 100%;
  height: 100%;
`;

export const StyledImg = styled.img`
  margin-top: 1.2rem;
  width: 200px;
`;