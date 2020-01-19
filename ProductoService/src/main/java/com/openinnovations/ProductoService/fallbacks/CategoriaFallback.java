package com.openinnovations.ProductoService.fallbacks;

import com.openinnovations.ProductoService.clients.ICategoriaClient;
import com.openinnovations.ProductoService.model.Categoria;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class CategoriaFallback implements ICategoriaClient {
    @Override
    public List<Categoria> findAll() {
        System.out.println("[ERROR] El otro microservicio cayó, hacer algo aquí para solucionarlo");
        return null;
    }

    @Override
    public Categoria obtenerCategoria(Long id) {
        System.out.println("[ERROR] El otro microservicio cayó, hacer algo aquí para solucionarlo");
        return new Categoria();
    }
}
