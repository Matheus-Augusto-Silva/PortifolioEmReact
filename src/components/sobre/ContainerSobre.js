import styled from "styled-components";

export const Container = styled.div`
  -webkit-box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.8);
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.8);
  border: 1px solid #ff6464;
  border-radius: 5px;
  .sobre-mim {
    img {
      float: left;
    }
  }

  @media (min-width: 1000px) {
    max-width: 80%;
    display: flex;
    margin: 12rem auto;
    padding: 2rem 3rem 0rem 3rem;

    .sobre-mim {
      flex: 1;
      text-align: justify;
      h1 {
        margin-left: 10rem;
        font-size: 3rem;
      }
      .sobre {
        margin-bottom: 3rem;
        margin-left: 1rem;
      }

      img {
        height: 35%;
        margin-right: 5px;
        border-radius: 50%;
        border: 3px solid black;
      }
    }
    .skills {
      flex: 1;
      margin-right: -6rem;
      h1 {
        font-size: 3rem;
        text-align: center;
      }
      img {
        width: 90%;
      }
    }
  }

  //talvez eu coloque no futuro
  /* .curriculo {
    position: relative;
    top: -6rem;
    left: 1rem;
    text-decoration: none;
    border: 1px solid white;
    padding: 5px;
    border-radius: 5px;
    background-color: #d4d9f7;
    color: black;
  } */
  @media (max-width: 1000px) {
    text-align: justify;
    margin: 10px;
    padding-left: 1rem;
    h1 {
      font-size: 3rem;
      text-align: center;
    }
    .sobre {
      margin-bottom: 3rem;
      padding: 15px;
    }
    .sobre-mim {
      img {
        width: 150px;
        height: 150px;
        margin: 0.5rem;
        border-radius: 50%;
      }
    }
    .skills {
      h1 {
        font-size: 3rem;
        text-align: center;
        margin-left: -2rem;
      }
      img {
        width: 60%;
      }
    }
  }
`;

export const ContainerImg = styled.div`
  width: 70%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 15px;
  grid-template-rows: repeat(3, 1fr);
  margin: auto;

  @media (min-width: 1000px) {
    .node {
      margin-top: 30px;
    }
  }
`;
