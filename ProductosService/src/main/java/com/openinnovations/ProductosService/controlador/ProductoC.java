package com.openinnovations.ProductosService.controlador;

import java.util.List;

import com.openinnovations.ProductosService.modelo.dao.IProducto;
import com.openinnovations.ProductosService.modelo.entity.Producto;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProductoC {

    @Autowired
    private IProducto dao;

    @GetMapping("/listar")
    public List<Producto> listarAll() throws Exception {
        return dao.findAll();
    }

    @GetMapping("/ver/{id}")
    public Producto detalle(@PathVariable(name = "id") Long id) throws Exception {
            return dao.findById(id).orElse(null);
    }
}