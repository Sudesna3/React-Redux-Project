import React, { useState } from "react";
import "../../Assets/css/homepage.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { IconButton } from "@mui/material";



const Home = () => {
const [appbarshow, setAppbarshow] = useState(false);
const onClickToggle = () => {
    setAppbarshow(!appbarshow);
    IconButton.className.add("iconbutton");
}

    return(
        <>
        <button className="barbutton" onClick={onClickToggle}><i className="fa-solid fa-bars"></i></button>
        {appbarshow && 
                <Card  className="appbarcard" >
                <CardContent className="appbarCardContent">
                <IconButton aria-label="delete" size="small">    
                <i class="fa-solid fa-house"></i>
                </IconButton>
                <IconButton aria-label="delete" size="small">
                <i class="fa-solid fa-user"></i>
                </IconButton>
                <IconButton aria-label="delete" size="small">
                <i class="fa-solid fa-briefcase"></i>
                </IconButton>
                <IconButton aria-label="delete" size="small">
                <i class="fa-solid fa-phone"></i>
                </IconButton>
                </CardContent>
                </Card>
        }

        </>
    )
}

export default Home;