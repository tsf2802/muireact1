import React from 'react'
import { Box, Typography } from '@mui/material'
const Rightbar = () =>{
    return (
        <Box  flex = {1} sx = {{display:{xs: "none", sm:"block"}}}> 
            <Typography variant = "h6"> Right Info:</Typography>
            <Typography> The Purpose of this right side is to just display some text! 
                Its actually not that important and this website's purpose is just for testing out react mui
            </Typography>
        </Box>
    )
}
export default Rightbar