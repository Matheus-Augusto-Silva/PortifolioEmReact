import styled from "styled-components";

export const ContainerIntro = styled.div`
  padding-top: 15rem;
  width: 100%;

  button {
    display: none;
    position: absolute;
    top: 0;
  }

  .container-intro {
    display: flex;
    justify-content: space-between;
  }

  .menu {
    right: 5rem;
    top: 2rem;
    padding-left: 2rem;
    display: flex;
    list-style: none;
    position: fixed;
    z-index: 2;
    -webkit-box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.65);
    box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.65);
    border-radius: 5px;
    background-color: #3c3e4e;
    justify-content: space-between;
    border: 2px solid #ffffff;
    a {
      margin-right: 2rem;
      font-size: 1.4rem;

      :hover {
        color: #ff6464;
        cursor: pointer;
        font-size: 1.5rem;
      }
    }
  }

  /* alta resolucao */
  @media (min-width: 1440px) {
    .background {
      max-width: 45%;
      border-top-left-radius: 10rem;
    }

    .data-content {
      margin-left: 10%;
      max-width: 100%;
      h2 {
        color: #808080;
        font-size: 2.2rem;
        font-weight: 300;
      }
      h1 {
        width: max-content;
        font-size: 4rem;
        color: white;
        margin-bottom: -15px;
      }
      p {
        width: max-content;
        padding: 0.5rem;
        margin-left: 10rem;
        color: #808080;
        font-size: 1.4rem;
        text-align: center;
      }
    }
  }

  /* laptop tela grande*/
  @media (min-width: 1264px) and (max-width: 1440px) {
    .background {
      border-top-left-radius: 10rem;
      max-width: 45%;
    }

    .data-content {
      margin-left: 5%;
      max-width: 100%;
      h2 {
        color: #808080;
        font-size: 1.8rem;
        font-weight: 300;
      }
      h1 {
        width: max-content;
        font-size: 3rem;
        color: white;
        margin-bottom: -15px;
      }
      p {
        width: max-content;
        padding: 0.5rem;
        margin-left: 10rem;
        color: #808080;
        font-size: 1.2rem;
        text-align: center;
      }
    }
  }

  /* laptop menor*/
  @media (min-width: 1000px) and (max-width: 1264px) {
    .background {
      border-top-left-radius: 10rem;
      max-width: 45%;
    }

    .data-content {
      margin-left: 5%;
      max-width: 100%;
      h2 {
        color: #808080;
        font-size: 1.4rem;
        font-weight: 300;
      }
      h1 {
        width: max-content;
        font-size: 2.6rem;
        color: white;
        margin-bottom: -15px;
      }
      p {
        width: max-content;
        padding: 0.5rem;
        margin-left: 10rem;
        color: #808080;
        font-size: 1rem;
        text-align: center;
      }
    }
  }

  /* mobile*/
  @media (max-width: 1000px) {
    width: 100%;
    button {
      display: block;
      position: fixed;
      top: 3rem;
      right: 1.5rem;
    }
    .menu {
      flex-direction: column;
    }

    .container-intro {
      display: flex;
      flex-direction: column;
      .data-content {
        margin: 0 auto 2rem 1rem;
        max-width: 100%;
        h2 {
          color: #808080;
          font-size: 1.4rem;
          font-weight: 300;
        }
        h1 {
          width: max-content;
          font-size: 2.6rem;
          color: white;
          margin-bottom: -15px;
        }
        p {
          width: max-content;
          padding: 0.5rem;
          margin-left: 4rem;
          color: #808080;
          font-size: 1rem;
          text-align: center;
        }
      }
    }

    .background {
      width: 100%;
      margin: auto;
      border-radius: 0;
    }
  }
`;
