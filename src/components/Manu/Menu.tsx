import React from 'react'
import { Button } from '@mui/material'
import { NavLink } from 'react-router-dom'
import styles from './Menu.module.scss'

type Props = {}

const Menu = (props: Props) => {
    return (
        <>
            <Button color="inherit">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? styles.activeMenuItem : styles.menuItem
                    }
                >
                    Home
                </NavLink>
            </Button>
            <Button color="inherit">
                <NavLink
                    to="/products"
                    className={({ isActive }) =>
                        isActive ? styles.activeMenuItem : styles.menuItem
                    }
                >
                    Products
                </NavLink>
            </Button>
            <Button color="inherit">
                <NavLink
                    to="/payment"
                    className={({ isActive }) =>
                        isActive ? styles.activeMenuItem : styles.menuItem
                    }
                >
                    Payment
                </NavLink>
            </Button>
            <Button color="inherit">
                <NavLink
                    to="/shipping"
                    className={({ isActive }) =>
                        isActive ? styles.activeMenuItem : styles.menuItem
                    }
                >
                    Shipping
                </NavLink>
            </Button>
            <Button color="inherit">
                <NavLink
                    to="/cart"
                    className={({ isActive }) =>
                        isActive ? styles.activeMenuItem : styles.menuItem
                    }
                >
                    Cart
                </NavLink>
            </Button>
        </>
    )
}

export default Menu
