package com.openinnovations.ItemsService.modelo;

import lombok.Data;

@Data
public class Item{

    private Producto producto;
    private Integer cantidad;

    
    public Item() {
    }

    public Item(Producto producto, Integer cantidad) {
        this.producto = producto;
        this.cantidad = cantidad;
    }

    public Double getTotal(){
        return producto.getPREPROD() * cantidad.doubleValue();
    }
    
}