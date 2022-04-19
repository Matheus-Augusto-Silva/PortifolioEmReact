import styled from "styled-components";
export const ContainerFooter = styled.div`
  margin: 18rem auto 0 auto;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #3c3e4e;

  img {
    position: relative;
    top: 0.4rem;
    margin-right: 5px;
    max-width: 30px;
  }

  @media (max-width: 650px) {
    h3 {
      font-size: 0.8rem;
    }
  }
  @media (max-width: 400px) {
    h3 {
      font-size: 0.5rem;
    }
  }
`;
