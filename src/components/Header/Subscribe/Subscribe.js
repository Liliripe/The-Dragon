import React from 'react'
import Button from '../../Button'

import { StyledSubscribe } from './style'

const Subscribe = () => {
    return (
        <StyledSubscribe className="subscribe-button">
            <Button url="test.com">Subscribe</Button>
        </StyledSubscribe>
    )
}

export default Subscribe
