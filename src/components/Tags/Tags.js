import React from 'react'
import { Link } from 'gatsby'

import { List, Tag } from './style'

import styled from '@emotion/styled'

const Tags = props => {
  return (
    <List>
      {props.tags.map(tag => (
        <Tag key={tag.id}>
          <Link to={`${props.basePath}/tag/${tag.slug}/`}>{tag.title}</Link>
        </Tag>
      ))}
    </List>
  )
}

export default Tags
