import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';




function ProductoComponent(props) {

    return (
        <Card>
            <CardActionArea>

                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.nombreProducto}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        S/. {props.precioProducto}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Categoria
                </Button>
                <Button size="small" color="secondary">
                    Eliminar
                </Button>
            </CardActions>
        </Card>
    );
}


export default ProductoComponent;
