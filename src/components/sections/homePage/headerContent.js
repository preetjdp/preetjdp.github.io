import React from "react"
import styled from "styled-components"

import { Container } from "../../global"

const HeaderContent = () => (
  <HeaderContentWrapper>
    <PreviewElement />
    <PreviewElement />
    <PreviewElement />
    <PreviewElement />
  </HeaderContentWrapper>
)

export default HeaderContent

const HeaderContentWrapper = styled.div`
  background-color: black;
  display: grid;
  padding: 15px;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 15px;
  grid-row-gap: 15px;
`

const PreviewElement = styled.div`
  height: 200px;
  /* width: 100px; */
  background-color: white;
`
