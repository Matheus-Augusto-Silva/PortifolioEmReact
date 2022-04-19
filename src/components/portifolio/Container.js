import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: 5rem auto;

  h1 {
    text-align: center;
    font-size: 3rem;
  }
`;
export const ContainerItem = styled.div`
  width: 400px;
  height: 200px;
  margin: 5rem 0.5rem;
  z-index: 1;

  .caroussel {
    color: white;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.8;
    transition: 0.2s;
  }
  img {
    border-radius: 5px;
    width: 100%;
    height: 200px;
    border: 2px solid white;
  }
  h3 {
    text-align: center;
  }
`;
