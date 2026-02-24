import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IMG_CDN } from "../constants/config";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  transform: expand ? "rotate(180deg)" : "rotate(0deg)",
}));

export default function RestaurantsCard({ restaurant }) {
    
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: red[500] }}><LocationOnIcon/></Avatar>}
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        title={restaurant.info.name}
        
        
        subheader={restaurant.info.areaName}
      />

      <CardMedia
        component="img"
        height="194"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbgrzB9RIqnl5XZzF-eOurcnqCPTlak_3CjdlUvJuMlI3Riis7121AH2g9RuPiNeZ0Gzbf2fATmbAPJh5rAx2MgH0gAZv4JonFmIleqdsVRA&s=10"
        alt="Food"
      />
      

      <CardContent>
        <Typography variant="body2" >
          {restaurant.info.cuisines.join(", ")}
        </Typography>
      </CardContent>
       <IconButton sx={{ gap: "10px" }}>
          <FavoriteIcon sx={{ color: red[500] }} />   <Typography variant="body2" >
          {restaurant.info.avgRating}
        </Typography>
        </IconButton>

      <CardActions >
       

        {/* <IconButton>
          <ShareIcon />
        </IconButton> */}

        {/* <ExpandMore expand={expanded} onClick={handleExpandClick}>
          <ExpandMoreIcon />
        </ExpandMore> */}
      </CardActions>

      {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography>More details here...</Typography>
        </CardContent>
      </Collapse> */}
    </Card>
  );
}