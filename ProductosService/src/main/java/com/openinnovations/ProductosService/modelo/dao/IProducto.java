package com.openinnovations.ProductosService.modelo.dao;

import com.openinnovations.ProductosService.modelo.entity.Producto;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IProducto extends JpaRepository<Producto,Long>{

}