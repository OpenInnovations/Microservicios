package com.openinnovations.ItemsService.clientes;

import java.util.List;

import com.openinnovations.ItemsService.modelo.Producto;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "productosService")
public interface ProductoCR{

    @GetMapping("/listar")
    public List<Producto> listarAll();

    @GetMapping("/ver/{id}")
    public Producto detalle(@PathVariable(name = "id") Long id);
}