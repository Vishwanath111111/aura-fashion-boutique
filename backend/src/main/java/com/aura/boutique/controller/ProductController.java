package com.aura.boutique.controller;

import com.aura.boutique.dto.ApiResponse;
import com.aura.boutique.dto.ProductDto;
import com.aura.boutique.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/products")
@RequiredArgsConstructor
public class ProductController {

    private final ProductService productService;

    @GetMapping
    public ResponseEntity<ApiResponse<List<ProductDto>>> getAllProducts() {
        return ResponseEntity.ok(ApiResponse.success("Products retrieved successfully", productService.getAllProducts()));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<ProductDto>> getProductById(@PathVariable String id) {
        return ResponseEntity.ok(ApiResponse.success("Product retrieved successfully", productService.getProductById(id)));
    }

    @GetMapping("/category/{category}")
    public ResponseEntity<ApiResponse<List<ProductDto>>> getProductsByCategory(@PathVariable String category) {
        return ResponseEntity.ok(ApiResponse.success("Products by category retrieved successfully", productService.getProductsByCategory(category)));
    }

    @GetMapping("/featured")
    public ResponseEntity<ApiResponse<List<ProductDto>>> getFeaturedProducts() {
        return ResponseEntity.ok(ApiResponse.success("Featured products retrieved successfully", productService.getFeaturedProducts()));
    }
}
