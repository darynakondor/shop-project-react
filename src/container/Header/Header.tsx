import {
    Container,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Menu from 'components/Manu/Menu'
import CartHeader from 'components/Manu/CartHeader/CartHeader'


type Props = {
    productsInCart: {
        [id: number]: number,
    }
}

const Header = ({
    productsInCart
}: Props) => {
    
    return (
        <AppBar position="static">
            <Container>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                     Fake Shop
                    </Typography>
                    <Menu />
                    <CartHeader productsInCart={productsInCart}/>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header

