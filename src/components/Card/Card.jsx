import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function ImgMediaCard(prop) {
  const { img, title, descr, id } = prop;
  return (
    <Card key={id} sx={{ maxWidth: 345 }}>
      <CardMedia component="img" alt={title} height="140" image={img} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {descr}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Поделиться</Button>
        <Button size="small">Подробнее</Button>
      </CardActions>
    </Card>
  );
}

export default ImgMediaCard;
