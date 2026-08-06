package com.aura.boutique.repository;

import com.aura.boutique.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, String> {
    List<Product> findByCategoryIgnoreCase(String category);
    List<Product> findByIsFeaturedTrue();
    List<Product> findByIsNewArrivalTrue();
}
