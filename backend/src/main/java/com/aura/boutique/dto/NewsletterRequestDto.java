package com.aura.boutique.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class NewsletterRequestDto {

    @NotBlank(message = "Email address is required")
    @Email(message = "Valid email address is required")
    private String email;

    private String preferredCategory;
}
