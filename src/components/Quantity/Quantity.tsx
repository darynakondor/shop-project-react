import React, { useState } from 'react'
import { Button, TextField } from '@mui/material'

type Props = {
    count: number
    onDecrementClick: () => void
    onIncrementClick: () => void
}

const Quantity = ({ count, onDecrementClick, onIncrementClick }: Props) => {
    return (
        <div>
            <div className="product-quantity">
                <Button
                    variant="contained"
                    onClick={() => onDecrementClick()}
                    disabled={count <= 1}
                >
                    -
                </Button>
                <TextField size="small" value={count} variant="outlined" />
                <Button
                    variant="contained"
                    onClick={() => onIncrementClick()}
                    disabled={count >= 10}
                >
                    +
                </Button>
            </div>
        </div>
    )
}

export default Quantity
