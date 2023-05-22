import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemCard = ({ item, deleteProduct, updateProduct }) => {
  return (
    <Card sx={{ width: 345, height: 350 }}>
      <CardMedia sx={{ height: 140 }} image={item.img} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/ItemDetail/${item.id}`}>
          <Button variant="contained" size="small">
            Ver Detalle
          </Button>
        </Link>

        <Button
          variant="contained"
          size="small"
          onClick={() => {
            deleteProduct(item.id);
          }}
        >
          borrar
        </Button>
        <Button
          variant="contained"
          size="small"
          onClick={() => {
            updateProduct(item.id, { description: "me modifique" });
          }}
        >
          Editar
        </Button>
      </CardActions>
    </Card>
  );
};

export default ItemCard;
