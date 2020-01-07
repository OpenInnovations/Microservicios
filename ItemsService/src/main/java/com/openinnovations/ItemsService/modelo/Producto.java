package com.openinnovations.ItemsService.modelo;

import java.util.Date;

import lombok.Data;

@Data
public class Producto {
    private Long IDPROD;

    private String NOMPROD;

    private Double PREPROD;

    private Date CREPROD;
}