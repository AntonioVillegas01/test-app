import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const CustmCard = () => {
    return (
        <Card sx={{ maxWidth: 345, height:"80vh" }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://media.istockphoto.com/id/1460537153/es/foto/un-golden-retriever-corriendo-con-su-pelota-en-el-patio-junto-a-un-%C3%A1rbol-5-a%C3%B1os.jpg?s=1024x1024&w=is&k=20&c=qOKxEScmSJHsI56UxgMBGsqbJqiNeUXViQM9d9BDZIg="
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
            </CardActions>
        </Card>
    );
};

export default CustmCard;
