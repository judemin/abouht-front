import React from "react"
import { styled } from "styled-components"
import ImgButton from "../components/ImgButton"
import Arrow from "../components/Arrow"

const Container = styled.div`
  height: calc(100vh - 7.75rem);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Title = styled.h1`
  font-size: 5rem;
  text-align: center;
  font-weight: bold;
  letter-spacing: 0.1rem;
  color: white;
`

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #707070;
  margin: 29px 0;
`

const ButtonContainer = styled.div`
  display: flex;
  gap: 3.5625rem;
  justify-content: center;
  margin: 2rem 0;
`

type Props = {}

const Landing = (props: Props) => {
  return (
    <Container>
      <div>
        {[...Array(6)].map((_, i) => (
          <Line key={i} />
        ))}
      </div>
      <Title>
        Abouht에서
        <br />
        꿈을 써내다
      </Title>
      <ButtonContainer>
        <ImgButton
          src="https://img.freepik.com/free-icon/google-play_318-566073.jpg"
          href="https://google.com"
        >
          Google Play
        </ImgButton>
        <ImgButton
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/391px-Apple_logo_black.svg.png"
          href="https://apple.com"
        >
          App Store
        </ImgButton>
      </ButtonContainer>
      <div style={{ paddingBottom: "1.5625rem" }}>
        {[...Array(3)].map((_, i) => (
          <Line key={i} />
        ))}
        <Arrow />
      </div>
    </Container>
  )
}

export default Landing
