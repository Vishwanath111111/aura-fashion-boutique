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
public class ContactRequestDto {

    @NotBlank(message = "Full name is required")
    private String fullName;

    @NotBlank(message = "Email address is required")
    @Email(message = "Valid email address is required")
    private String email;

    @NotBlank(message = "Phone number is required")
    private String phone;

    private String preferredDate;

    @NotBlank(message = "Service type is required")
    private String serviceType;

    @NotBlank(message = "Message details are required")
    private String message;
}
