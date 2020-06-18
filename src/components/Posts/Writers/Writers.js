import React from 'react'
import Col from 'react-bootstrap/Col'

import { StyledRow, StyledImage, StyledInfo, Name, Description } from './style'

const Writers = ({ portrait, contributorName, contributorDescription, ...props }) => {
  return (
    <StyledRow>
      <Col>
        <StyledImage
          Tag="section"
          fluid={portrait.fluid}
          backgroundColor={`#eeeeee`}
        />
      </Col>

      <StyledInfo xs={9}>
        <Name>{contributorName}</Name>
        <Description>{contributorDescription}</Description>
      </StyledInfo>
    </StyledRow>
  )
}

export default Writers
