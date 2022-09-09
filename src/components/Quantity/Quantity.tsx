import React from 'react'
import { Button, TextField } from '@mui/material'

type Props = {
    count: number
    onDecrementClick: () => void
    onIncrementClick: () => void
    minCount?: number
}

const Quantity = ({
    count,
    onDecrementClick,
    onIncrementClick,
    minCount = 1,
}: Props) => {
    return (
        <div>
            <div className="product-quantity">
                <Button
                    variant="contained"
                    onClick={() => onDecrementClick()}
                    disabled={count <= minCount}
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
