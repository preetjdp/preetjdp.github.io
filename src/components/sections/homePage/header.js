import React from "react"
import styled from "styled-components"

import { Container } from "../../global"

import HeaderContent from "./headerContent"

const Header = () => (
  <HeaderWrapper>
    <Container>
      <Flex>
        <HeaderTextGroup>
          <HeaderTitle>
            Preet <br /> Parekh
          </HeaderTitle>
          {/* <HeaderContent>
                        Oh yeah I want it all soo much wow! It will give me strength next year!
                    </HeaderContent> */}
        </HeaderTextGroup>
        <HeaderContent />
      </Flex>
    </Container>
  </HeaderWrapper>
)

export default Header

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.color.background.purple};
  /* padding: 160px 0 80px 0; */
  padding: 80px 0;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));
`

const Flex = styled.div`
  display: grid;
  justify-content: space-between;
  align-content: center;
  grid-template-columns: 1fr 1fr;
  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 64px;
  }
`

const HeaderTextGroup = styled.div`
  //   background-color: black;
  display: flex;
  flex-direction: column;
`

const HeaderImagesGroup = styled.div`
  background-color: black;
`

const HeaderTitle = styled.h1`
  color: ${props => props.theme.color.pink};
  ${props => props.theme.font_size.xxlarge};
  margin: 0px;
`

// const HeaderContent = styled.h5`
//   color: ${props => props.theme.color.pink};
//   ${props => props.theme.font_size.large};
//   font-family: ${props => props.theme.font.light};
//   max-width: 320px;
// `
