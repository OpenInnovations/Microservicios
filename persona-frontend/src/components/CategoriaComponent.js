import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';


class CategoriaComponent extends Component {


    state = {
        listaCategorias: []
    }

    componentDidMount() {
        this.listarCategorias();
    }

    listarCategorias = () => {
        fetch('http://localhost:8081/api/categoria')
            .then(res => res.json())
            .then((data) => {
                this.setState({ listaCategorias: data })
            })
            .catch(console.log);
    }

    render() {
        return (
            <TextField
                id="standard-select-currency"
                select
                label="Categoria"
                helperText="Seleccione una categoria">
                {
                    this.state.listaCategorias.map((categoria) => (
                        <MenuItem key={categoria.idcat} value={categoria.nomcat}>
                            {categoria.nomcat}
                        </MenuItem>
                    ))
                }
            </TextField>
        );
    }


}

export default CategoriaComponent;