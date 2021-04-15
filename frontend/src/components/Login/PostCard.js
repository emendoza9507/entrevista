import { Avatar, Grid, Typography } from "@material-ui/core";
import PanoramaFishEyeIcon from '@material-ui/icons/PanoramaFishEye';

import "./PostCard.css"

export default function PostCard() {
    return (
        <Grid container item direction="column" justify="space-between" xs={false} sm={4} md={5} className="PostCard">
            <div className="gradiant"></div>
            <Grid container item direction="column" className="title">
                <Avatar variant="square"  className="avatar">
                    P
                </Avatar>
                <Typography component="h1" variant="h5" align="center">
                    Welcome
                </Typography>
                <Typography component="span" align="center">
                    Empower your team!
                </Typography>
            </Grid>
            <Grid item className="footer" direction="column" >
                {
                    [
                        'Lorem ipsum dolor sit amet',            
                        'Consectetur adipisicing elit, cum a quas blanditiis architecto dolorem',                                                    
                        'Necessitatibus eos esse ducimus iusto',
                    ].map(e =>( <div className="item-description">
                            <PanoramaFishEyeIcon/> &nbsp;
                            {e}                                    
                        </div>)
                    )
                }
            </Grid>
        </Grid>
    )
}