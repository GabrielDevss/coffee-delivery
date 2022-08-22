import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;

  padding: 0 16rem;
  margin-top: 9.4rem;

  > header {
    display: flex;
    align-items: center;

    > div {
      width: 58.8rem;

      display: flex;
      flex-direction: column;
      align-items: left;

      h1 {
        font-family: 'Baloo 2', sans-serif;
        font-size: 4.8rem;
        font-weight: 800;
        line-height: 1;
        color: ${(props) => props.theme['base-title']};

        margin-bottom: 1.6rem;
      }

      p {
        font-size: 2rem;
        color: ${(props) => props.theme['base-text']};
        margin-bottom: 7rem;
      }
    }

    > img {
      margin-left: 3rem;
    }
  }
`

export const Specifications = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;

  > div {
    display: flex;
    align-items: center;
  }
`
