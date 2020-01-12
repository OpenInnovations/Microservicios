import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



class ProductoComponent extends Component {

    render() {
        return (
            <Card>
                <CardActionArea>

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {this.props.nombreProducto}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            S/. {this.props.precioProducto}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="secondary">
                        Eliminar
                    </Button>
                </CardActions>
            </Card>
        );
    }
}

class ProductosComponent extends Component {
    componentDidMount() {
        this.listarProductos();
    }

    listarProductos = () => {
        fetch('http://localhost:8082/api/producto')
            .then(res => res.json())
            .then((data) => {
                this.setState({ listaProducto: data })
            })
            .catch(console.log);
    }

    state = {
        listaProducto: []
    }

    render() {
        return (

            this.state.listaProducto.map((p) => (
                <ProductoComponent nombreProducto={p.nomprod} precioProducto={p.preprod} />
            ))

        );
    }
}

export default ProductosComponent;
