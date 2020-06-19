import React from 'react'
import { Link } from 'gatsby'

import { List, Tag } from './style'

const Tags = props => {
  const Lore = 'Lore' // Teal
  const Video = 'Video' // Red
  const playerTips = 'Player Tips' // Green
  const dmTips = 'DM Tips' // Purple
  const Mechanics = 'Mechanics' // Yellow

  return (
    <List>
      {props.tags.map(tag => (
        <Tag key={tag.id}>
          <Link
            to={`${props.basePath}/tag/${tag.slug}/`}
            className={
              tag.title == Lore
                ? 'teal'
                : tag.title == Video
                ? 'red'
                : tag.title == playerTips
                ? 'green'
                : tag.title == dmTips
                ? 'purple'
                : tag.title == Mechanics
                ? 'yellow'
                : 'none'
            }
          >
            {tag.title}
          </Link>
        </Tag>
      ))}
    </List>
  )
}

export default Tags
