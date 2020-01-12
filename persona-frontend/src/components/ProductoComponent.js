import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ProductoService from '../services/ProductoService';



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
                    <Button size="small" color="secondary" onClick={this.props.borrar}>
                        Eliminar
                    </Button>
                </CardActions>
            </Card>
        );
    }
}

class ProductosComponent extends Component {

    constructor() {
        super();
        this.state = {
            listaProducto: [],

        }
        this.servicioProducto = new ProductoService();
    }

    async componentDidMount() {
        const data = await this.servicioProducto.findAll();
        this.setState({ listaProducto: data });
    }


    eliminarProducto = producto => e => {
        console.log('[DELETE] ' + producto.IDPROD);
        this.servicioProducto.delete(producto.IDPROD);
        this.setState({
            listaProducto: this.state.listaProducto.filter(p => p !== producto),
        });
    };


    render() {
        return (
            this.state.listaProducto.map((p) => (
                <ProductoComponent nombreProducto={p.NOMPROD} precioProducto={p.PREPROD} borrar={this.eliminarProducto(p)} />
            ))

        );
    }
}

export default ProductosComponent;
