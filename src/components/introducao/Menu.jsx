import React from 'react'
import { Link } from 'react-scroll/modules'
import { useState } from 'react';

export const Menu = () => {

const [menu,setMenu] = useState(true);

function changeMenu(){
    setMenu(!menu);
}

  return (
      <>
        <button onClick={changeMenu}>Menu</button>  
        
        {menu?<ul className="menu">
           <li>
                <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    Home
                </Link>
            </li>
            <li>
                <Link
                    activeClass="active"
                    to="sobre"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    Sobre
                </Link>
            </li>
            <li>
                <Link
                    activeClass="active"
                    to="portifolio"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    Portifólio
                </Link>
            </li>
            <li>
                <Link
                    activeClass="active"
                    to="certificados"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    Certificados
                </Link>
            </li>
    
    </ul>:""}
        
    </>
  )
}
