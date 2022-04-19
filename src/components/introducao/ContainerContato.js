import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  left: 10rem;
  top: 0;

  ul {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    li {
      list-style: none;
      margin: 1rem;
      max-width: 45px;

      img {
        vertical-align: middle;
        width: 40px;
        margin-right: 10px;

        :hover {
          width: 43px;
        }
      }
    }
  }

  /* laptop menor e tablet*/
  @media (max-width: 1264px) {
    left: 4rem;
    ul {
      margin: 0 auto;
      display: flex;
    }
  }

  /* mobile */
  @media (max-width: 1000px) {
    left: 0rem;
    ul {
      margin: 0 auto;
      display: flex;

      li {
        margin: 0.5rem;
        img {
          width: 30px;
        }
      }
    }
  }
`;
