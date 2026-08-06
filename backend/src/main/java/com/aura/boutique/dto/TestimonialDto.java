package com.aura.boutique.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TestimonialDto {
    private String id;
    private String clientName;
    private String role;
    private String location;
    private String quote;
    private Integer rating;
    private String avatar;
    private Boolean verifiedPurchase;
    private String date;
}
