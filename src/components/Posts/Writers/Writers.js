import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'

import { StyledRow, StyledImage, StyledInfo, Name, Description } from './style'

const Writers = ({ portrait, contributorName, contributorDescription, ...props }) => {
  return (
    <Container fluid>
      <StyledRow>
        <Col>
          <StyledImage fluid={portrait.fluid} />
        </Col>

        <StyledInfo xs={9}>
          <Name>{contributorName}</Name>
          <Description>{contributorDescription}</Description>
        </StyledInfo>
      </StyledRow>
    </Container>
  )
}

export default Writers
