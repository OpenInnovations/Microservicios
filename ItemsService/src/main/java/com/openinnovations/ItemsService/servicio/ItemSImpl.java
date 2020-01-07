package com.openinnovations.ItemsService.servicio;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import com.openinnovations.ItemsService.modelo.Item;
import com.openinnovations.ItemsService.modelo.Producto;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class ItemSImpl implements IItemS {

    @Autowired
    private RestTemplate clienteRest;

    @Override
    public List<Item> findAll() {
        List<Producto> productos = Arrays.asList(clienteRest.getForObject("http://localhost:8081/listar", Producto[].class));
        return productos.stream().map(p -> new Item(p, 1)).collect(Collectors.toList());
    }

    @Override
    public Item findById(Long id, Integer cantidad) {
        Map<String,String> pathVariables = new HashMap<>();
        pathVariables.put("id", id.toString());
        Producto producto  = clienteRest.getForObject("http://localhost:8081/ver/{id}", Producto.class, pathVariables);
        return new Item(producto, cantidad);
    }

}