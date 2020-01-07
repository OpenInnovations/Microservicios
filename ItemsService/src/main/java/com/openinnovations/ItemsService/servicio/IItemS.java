package com.openinnovations.ItemsService.servicio;

import java.util.List;

import com.openinnovations.ItemsService.modelo.Item;

public interface IItemS{
    public List<Item> findAll();
    public Item findById(Long id, Integer cantidad);
}