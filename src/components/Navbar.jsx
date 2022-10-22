import React, { useState } from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccessibleIcon from '@mui/icons-material/Accessible';
import { AppBar, Toolbar, styled, Typography, Box, InputBase, Badge, Avatar, Menu, MenuItem } from '@mui/material'

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
})

const Search = styled("div")(({ theme }) => ({
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "white",
    width: " 40%"
}));

const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "10px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        display: "none"
    }
}));

const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    gap: "20px",
    alignItems: "center",
    //the important thing here is that anything larger than 'sm' is shown (Flexed) and display is none if smaller than sm
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }

}));

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
                    Tak's Website
                </Typography>
                <AccessibleIcon sx={{ display: { xs: "black", sm: "none" } }} />
                <Search> <InputBase placeholder="Search for..." /> </Search>
                <Icons>
                    <Badge badgeContent={'2'} color="error">
                        <NotificationsIcon />
                    </Badge>
                    <Badge badgeContent={'0'} color="error">
                        <Avatar 
                            src='https://i.imgur.com/RUGbQdR.jpeg' 
                            sx={{ width: 40, height: 40 }} 
                            onClick= {e=>setOpen(true)}
                        />
                    </Badge>
                </Icons>
                <UserBox onClick= {e=>setOpen(true)}>
                    <Avatar 
                        src='https://i.imgur.com/RUGbQdR.jpeg' 
                        sx={{ width: 40, height: 40 }} 
                    />
                    <Typography variant="span"> Hu Tao </Typography>
                </UserBox>
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose = {(e) => setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem >Profile</MenuItem>
                <MenuItem >My account</MenuItem>
                <MenuItem >Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}
export default Navbar