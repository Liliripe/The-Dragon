import React from 'react'
import { Link } from 'gatsby'

import { List, Tag } from './style'

const Tags = props => {
  const cute = "Cute"
  const fancy = "Fancy"

  return (
    <List>
      {props.tags.map(tag => (
        <Tag key={tag.id}>
          <Link 
            to={`${props.basePath}/tag/${tag.slug}/`} 
            className={tag.title == cute ? 'cute' : tag.title == fancy ? 'fancy' : 'none'}
          >
            {tag.title}
          </Link>
        </Tag>
      ))}
    </List>
  )
}

export default Tags
