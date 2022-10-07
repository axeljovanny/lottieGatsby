import React from "react";
import { getImage, StaticImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from 'gatsby'


import { BgImage } from "gbimage-bridge"

import { Content, Dedos, Foto, Hero, Logo, Menu, Nav, Pato, Social, Sticker, Tittle, Trebol, TrebolOjo } from "../../styles/home";
import './home.css'
import { Animation } from "../Animation";
import Hola from "../Hola";


const mastheadHome = {
  width: "100%",
  height: "100%",
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
}


export const Home = () => {
  const { placeholderImage } = useStaticQuery(
    graphql`
    query {
      placeholderImage: file(relativePath: { eq: "home/jpg/Fondo.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
              quality: 100
              breakpoints:[750, 1080, 1366, 1920]
              formats: [AUTO, WEBP]
              layout: FULL_WIDTH
              webpOptions: {quality: 90}
          )
        }
      }
    }
    `
  )
  const image = getImage(placeholderImage)
  
    return (
    <>
      <BgImage image={image} style={mastheadHome}>
        <Nav>
          <Logo>
          <StaticImage
              src="../../images/home/png/logo.png"
              className="logo"
              alt="logo"
              /> {/* Logo LDS */}
          </Logo>
          <Menu>
          </Menu>
        </Nav>
        <Content>
          <Social></Social>
          <Hero>
            <Foto>
              <StaticImage
              src="../../images/home/png/fotoTeam.png"
              className="fotoTeam"
              alt="Foto del equipo"
              />
            </Foto>
            <Tittle>
            <StaticImage
              src="../../images/home/png/frase.png"
              className="frase"
              alt="Frase"
              />
              <Sticker>
              <StaticImage
              src="../../images/home/png/dedicacion.png"
              className="dedicacion"
              alt="Deicacion"
              />
              </Sticker>
              <Sticker>
              <StaticImage
              src="../../images/home/png/habilidad.png"
              className="habiidad"
              alt="Habilidad"
              />
              </Sticker>
              <Sticker>
              <StaticImage
              src="../../images/home/png/pasion.png"
              className="pasion"
              alt="Pasion"
              />
              </Sticker>
            </Tittle>
            <TrebolOjo>
            <StaticImage
              src="../../images/home/png/trebolOjo.png"
              className="trebolOjo"
              alt="Trebol con ojo"
              />
            </TrebolOjo>
            <Pato>
            <StaticImage
              src="../../images/home/png/pato.png"
              className="pato"
              alt="Pato"
              />
            </Pato>
            <Trebol>
            <StaticImage
              src="../../images/home/png/trebol.png"
              className="trebol"
              alt="Trebol"
              />
            </Trebol>
            <Dedos>
            <StaticImage
              src="../../images/home/png/guante.png"
              className="dedos"
              alt="Guante"
              />
            </Dedos>
          </Hero>
        </Content>
      </BgImage>
      <div style={{ position:"absolute", width: "100vw" }}><Hola/></div>
      

    </>
    )
  }