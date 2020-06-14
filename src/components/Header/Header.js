import React, { useState } from 'react'

import Button from './Button'
import Drawer from './Drawer'
import {} from './style'

const Header = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <Button open={open} setOpen={setOpen} />
            <Drawer open={open} setOpen={setOpen} />
        </>
    )
}

export default Header
