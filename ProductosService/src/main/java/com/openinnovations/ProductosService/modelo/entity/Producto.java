package com.openinnovations.ProductosService.modelo.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import lombok.Data;

@Entity
@Table(name="PRODUCTO")
@Data
public class Producto implements Serializable{

    /**
     *
     */
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long IDPROD;

    private String NOMPROD;

    private Double PREPROD;

    @Temporal(TemporalType.TIMESTAMP)
    private Date CREPROD;

}