package com.aura.boutique.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Entity
@Table(name = "products")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Product {

    @Id
    private String id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String category;

    @Column(nullable = false)
    private BigDecimal price;

    @Column(nullable = false, length = 1000)
    private String image;

    @Column(length = 2000)
    private String description;

    private String materials;

    private String care;

    private Boolean isNewArrival;

    private Boolean isFeatured;

    private Boolean isTrending;

    private Boolean isLimitedEdition;

    private String sku;

    private Double rating;

    private Integer reviewsCount;
}
