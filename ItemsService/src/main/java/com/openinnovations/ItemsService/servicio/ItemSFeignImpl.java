package com.openinnovations.ItemsService.servicio;

import java.util.List;
import java.util.stream.Collectors;

import com.openinnovations.ItemsService.clientes.ProductoCR;
import com.openinnovations.ItemsService.modelo.Item;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

@Service("sFeignImpl")
@Primary
public class ItemSFeignImpl implements IItemS {

    @Autowired
    private ProductoCR clienteFeign;

    @Override
    public List<Item> findAll() {
        return clienteFeign.listarAll().stream().map(p -> new Item(p, 1)).collect(Collectors.toList());
    }

    @Override
    public Item findById(Long id, Integer cantidad) {
        // TODO Auto-generated method stub
        return new Item(clienteFeign.detalle(id), cantidad);
    }

}