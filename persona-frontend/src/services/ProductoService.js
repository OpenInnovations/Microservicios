import axios from 'axios';
import ProductoModel from '../model/ProductoModel';

class ProductoService {

    constructor() {
        this.urlServicio = 'http://localhost:8082/api/producto';
        this.listaProductos = [];
    }


    findAll = async () => {
        await axios.get(this.urlServicio)
            .then((res) => {
                res.data.forEach(p => {
                    if (p.estprod === 'A') {
                        this.listaProductos.push(new ProductoModel(p));
                    }
                });
                console.log(this.listaProductos);

            })
            .catch(console.log);

        return this.listaProductos;
    }


    findOne = (id) => {
        axios.get(this.urlServicio + '/' + id)
            .then(res => res.json())
            .then((data) => {
                this.producto = new ProductoModel(data);
            })
            .catch(console.log);
        return this.producto;
    }

    save = (producto) => {
        axios.post(this.urlServicio, JSON.stringify(producto))
            .then(console.log)
            .catch(console.log);
    }

    update = (producto) => {
        axios.put(this.urlServicio, JSON.stringify(producto))
            .then(console.log)
            .catch(console.log);
    }

    delete = (id) => {
        axios.delete(this.urlServicio + '/' + id)
            .then(console.log)
            .catch(console.log);
    }

}

export default ProductoService;