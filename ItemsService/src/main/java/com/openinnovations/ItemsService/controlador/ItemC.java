package com.openinnovations.ItemsService.controlador;

import java.util.List;

import com.openinnovations.ItemsService.modelo.Item;
import com.openinnovations.ItemsService.servicio.IItemS;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ItemC{

    @Autowired
    @Qualifier("sFeignImpl")
    private IItemS itemService;

    @GetMapping("/listar")
    public List<Item> listar(){
        return itemService.findAll();
    }

    @GetMapping("/ver/{id}/cantidad/{cantidad}")
    public Item detalle(@PathVariable(name = "id") Long id, @PathVariable(name = "cantidad") Integer cantidad){
        return itemService.findById(id, cantidad);
    }

}