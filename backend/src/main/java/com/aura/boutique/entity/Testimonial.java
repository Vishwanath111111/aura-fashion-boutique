package com.aura.boutique.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "testimonials")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Testimonial {

    @Id
    private String id;

    @Column(nullable = false)
    private String clientName;

    private String role;

    private String location;

    @Column(nullable = false, length = 1500)
    private String quote;

    private Integer rating;

    @Column(length = 1000)
    private String avatar;

    private Boolean verifiedPurchase;

    private String date;
}
