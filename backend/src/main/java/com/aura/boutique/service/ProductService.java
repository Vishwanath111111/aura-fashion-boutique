package com.aura.boutique.service;

import com.aura.boutique.dto.ProductDto;
import com.aura.boutique.entity.Product;
import com.aura.boutique.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;

    public List<ProductDto> getAllProducts() {
        return productRepository.findAll().stream()
                .map(this::mapToDto)
                .collect(Collectors.toList());
    }

    public ProductDto getProductById(String id) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found with ID: " + id));
        return mapToDto(product);
    }

    public List<ProductDto> getProductsByCategory(String category) {
        return productRepository.findByCategoryIgnoreCase(category).stream()
                .map(this::mapToDto)
                .collect(Collectors.toList());
    }

    public List<ProductDto> getFeaturedProducts() {
        return productRepository.findByIsFeaturedTrue().stream()
                .map(this::mapToDto)
                .collect(Collectors.toList());
    }

    private ProductDto mapToDto(Product entity) {
        return ProductDto.builder()
                .id(entity.getId())
                .name(entity.getName())
                .category(entity.getCategory())
                .price(entity.getPrice())
                .image(entity.getImage())
                .description(entity.getDescription())
                .materials(entity.getMaterials())
                .care(entity.getCare())
                .isNewArrival(entity.getIsNewArrival())
                .isFeatured(entity.getIsFeatured())
                .isTrending(entity.getIsTrending())
                .isLimitedEdition(entity.getIsLimitedEdition())
                .sku(entity.getSku())
                .rating(entity.getRating())
                .reviewsCount(entity.getReviewsCount())
                .build();
    }
}
