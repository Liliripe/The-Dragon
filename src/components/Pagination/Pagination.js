import React from 'react'
import { navigate } from 'gatsby'
import SelectIcon from '../../icons/SelectIcon'

import { Wrapper, Button, Numbers, Select } from './style'

const Pagination = props => {
  function changePage(e) {
    navigate(
      e.target.value
        ? `${props.context.paginationPath}/${e.target.value}`
        : `${props.context.paginationPath}/`
    )
  }

  return (
    <>
      {props.context.numberOfPages > 1 && (
        <Wrapper>
          <Numbers>
            {props.context.humanPageNumber}{' '}
            <Select
              value={
                props.context.humanPageNumber === 1
                  ? ``
                  : props.context.humanPageNumber
              }
              onChange={changePage}
            >
              {Array.from({ length: props.context.numberOfPages }, (_, i) => (
                <option value={`${i === 0 ? `` : i + 1}`} key={`page${i + 1}`}>
                  {i + 1}
                </option>
              ))}
            </Select>
            / {props.context.numberOfPages} <SelectIcon />
          </Numbers>
          <div>
            {props.context.previousPagePath && (
              <Button to={`${props.context.previousPagePath}`}>
                <span>&larr;</span> Prev
              </Button>
            )}
            {props.context.nextPagePath && (
              <Button style={{ order: 3 }} to={`${props.context.nextPagePath}`}>
                Next <span>&rarr;</span>
              </Button>
            )}
          </div>
        </Wrapper>
      )}
    </>
  )
}

export default Pagination
