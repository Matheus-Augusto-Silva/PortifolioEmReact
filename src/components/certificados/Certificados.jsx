import React from 'react'
import { ContainerCertificados } from './ContainerCertificados'
import hcode from '../../images/hcode.png'
import freecodecamp from '../../images/freecodecamp.png'
import alura from '../../images/alura.png'
import oracle from '../../images/oracle.jpg'
import origamid from '../../images/origamid.png'
import webdesigncompleto from '../../images/origamidwebdesign.PNG'
import flexbox from '../../images/origamidflex.PNG'
import gridlayout from '../../images/origamidgrid.png'
import reactcompleto from '../../images/origamidreact.PNG'
import js from '../../images/origamidJS.PNG'
import eduzz from '../../images/eduzz.png'
import eduzzbootcamp from '../../images/dioeduzzfullstack.pdf'
import dio from '../../images/dio.png'
import microservicos from '../../images/microseervicos.pdf'
import sql from '../../images/nodejssql.pdf'




export const Certificados = () => {
  return (
    <ContainerCertificados id="certificados">
      <h1>Certificados</h1>
      <div className="imagens">
      <a className="origamid" target="_blank" href={flexbox}>
        <p>Css Flexbox</p>
        <img src={origamid} alt="origamid" />
      </a>
      <a className="origamid" target="_blank" href={gridlayout}>
        <p>Css Grid Layout</p>
        <img src={origamid} alt="origamid" />
      </a>
      <a className="origamid" target="_blank" href={reactcompleto}>
        <p>React Completo</p>
        <img src={origamid} alt="origamid" />
      </a>
      <a className="origamid" target="_blank" href={js}>
        <p>Javascript e Jquery</p>
        <img src={origamid} alt="origamid" />
      </a>
      <a className="origamid" target="_blank" href={webdesigncompleto}>
        <p>Web Design Completo</p>
        <img src={origamid} alt="origamid" />
      </a>
      <a className="eduzz" target="_blank" href={eduzzbootcamp}>
        <p>Eduzz Fullstack developer</p>
        <img src={eduzz} alt="eduzz" />
      </a>
      <a className="dio" target="_blank" href={microservicos}>
        <p>Microserviços e integrações com Node.js</p>
        <img src={dio} alt="dio" />
      </a>
      <a className="dio" target="_blank" href={sql}>
        <p>Node.js com banco de dados relacionais</p>
        <img src={dio} alt="dio" />
      </a>
      <a target="_blank" href="https://www.freecodecamp.org/certification/matheuzin_bh/responsive-web-design">
        <p  className="freecodecamp">Web design Bootcamp (Freecodecamp)</p>
        <img src={freecodecamp} alt="freecodebootcamp" />
      </a>
      <a target="_blank" href="https://hcode.com.br/certificates/202011WEBFULL05FB6A6C42F5FB">
        <p className="hcode">Curso Completo do Desenvolvedor Web (Hcode)</p>
        <img src={hcode} alt="hcode" />
      </a>
      <a target="_blank"  className="alura" href="https://cursos.alura.com.br/degree/certificate/de8f8731-9640-4090-95dc-6b91fc06dc93">
        <p >Oracle one: Lógica de programação (Alura/Oracle)</p>
        <img className="alura-img"src={alura} alt="alura" />
        <img src={oracle}  className="oracle-img" alt="oracle" />
      </a>
      <a target="_blank" className="alura" href="https://cursos.alura.com.br/degree/certificate/89a83178-3dd6-42e8-b79b-bd729544add7">
        <p>Oracle one: Oracle One: Formação Front-end (Alura/Oracle)</p>
        <img className="alura-img"src={alura} alt="alura" />
        <img src={oracle}  className="oracle-img" alt="oracle" />
      </a>
 

      </div>
      
    </ContainerCertificados>
  )
}
