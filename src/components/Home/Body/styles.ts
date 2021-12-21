import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    text-align: center;
    font-size: 2.5rem;
    color: ${props => props.theme.colors.primary};
    margin-top: 40px;
  }

  p {
    text-align: center;
    margin-top: 24px;
    font-size: 1.4rem;
    line-height: 32px;
  }
`
