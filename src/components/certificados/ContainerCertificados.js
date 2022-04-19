import styled from "styled-components";

export const ContainerCertificados = styled.div`
  width: 60%;
  margin: 10rem auto;
  text-align: center;
  border: 2px solid #d6d9f7;
  border-radius: 5px;
  padding: 1rem 0;
  -webkit-box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.8);
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.8);

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  a {
    margin: auto;
    display: flex;
    justify-content: center;
    text-decoration: none;
    max-width: 100%;
    height: 3rem;

    img {
      width: 40px;
      margin: auto 0.5rem;
    }
  }
  p {
    margin: auto 0.5rem;
    font-size: 1.3rem;
  }

  .hcode {
    &:hover {
      color: #f24f00;
    }
  }

  .freecodecamp {
    &:hover {
      color: black;
      font-weight: bold;
    }
  }
  .alura {
    p {
      &:hover {
        color: blue;
      }
    }
    .alura-img {
      width: 30px;
      border-radius: 5px;
      margin-right: 0.5rem;
    }
    .oracle-img {
      width: 70px;
    }
  }

  .origamid {
    p {
      &:hover {
        color: purple;
      }
    }
    img {
      border-radius: 5px;
      width: 35px;
    }
  }
  .eduzz {
    p {
      &:hover {
        color: yellow;
      }
    }
    img {
      border-radius: 5px;
      width: 45px;
    }
  }
  .dio {
    p {
      &:hover {
        color: salmon;
      }
    }
    img {
      border-radius: 5px;
      width: 45px;
    }
  }

  @media screen and (min-width: 1000px) and (max-width: 1140px) {
    p {
      margin: auto 0.5rem;
      font-size: 1rem;
    }
  }
  @media screen and (max-width: 1000px) {
    width: 90%;
    p {
      margin: 0.1rem;
      font-size: 0.8rem;
    }
    .imagens {
      a {
        img {
          border-radius: 5px;
          width: 30px;
          margin-top: -2px;
        }
      }
    }
  }
`;
