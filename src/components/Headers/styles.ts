import styled from 'styled-components'

export const HeaderContainer = styled.div`
  width: 100%;
  height: 10.4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3.2rem 16rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
  }

  button {
    padding: 1rem;
    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    border-radius: 8px;
    border: 0;

    cursor: pointer;
  }
`

export const Localization = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  font-size: 1.4rem;
  padding: 1rem;
  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
  border-radius: 8px;
`
