package com.aura.boutique.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProductDto {
    private String id;
    private String name;
    private String category;
    private BigDecimal price;
    private String image;
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
