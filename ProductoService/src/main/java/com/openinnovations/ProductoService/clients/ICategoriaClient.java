package com.openinnovations.ProductoService.clients;

import java.util.List;

import com.openinnovations.ProductoService.model.Categoria;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "categoriaService", url = "localhost:8081")
public interface ICategoriaClient {

    @GetMapping("/api/categoria")
    public List<Categoria> findAll();

    @GetMapping("/api/categoria/{id}")
    public Categoria obtenerCategoria(@PathVariable(name = "id") Long id);
}