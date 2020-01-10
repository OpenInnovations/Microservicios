package com.example.categoria.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "CATEGORIA")
@Data
public class Categoria implements Serializable {
    /**
     *
     */
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long IDCAT;

    @Column(length = 50, nullable = false)
    private String NOMCAT;

    @Column(length = 1, nullable = false)
    private String ESTCAT;

}
