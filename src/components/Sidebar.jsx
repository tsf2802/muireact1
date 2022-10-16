import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import FolderIcon from '@mui/icons-material/Folder';
import ArticleIcon from '@mui/icons-material/Article';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
const Sidebar = () =>{
    return (
        <Box flex = {1} sx = {{display:{xs: "none", sm:"block"}}}> 
            
        <List>
        <ListItem disablePadding>
          <ListItemButton component = "a" href = "#home">
            <ListItemIcon>
                <HomeIcon/>
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component = "a" href = "#project">
            <ListItemIcon>
                <FolderIcon/>
            </ListItemIcon>
            <ListItemText primary="Projects" />
          </ListItemButton>
        </ListItem>
        
        <ListItem disablePadding>
          <ListItemButton component = "a" href = "#resume">
            <ListItemIcon>
                <ArticleIcon/>
            </ListItemIcon>
            <ListItemText primary="Resume" />
          </ListItemButton>
        </ListItem>
        </List>
        

        </Box>
    )
}
export default Sidebar