import React from 'react'

import { StyledButton } from './style'

const Button = ({ url, style, children }) => {
    return (
        <StyledButton href={url} style={style}>
            {children}
        </StyledButton> 
    )
}

export default Button
