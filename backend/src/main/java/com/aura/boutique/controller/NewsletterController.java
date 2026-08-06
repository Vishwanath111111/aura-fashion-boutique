package com.aura.boutique.controller;

import com.aura.boutique.dto.ApiResponse;
import com.aura.boutique.dto.NewsletterRequestDto;
import com.aura.boutique.service.NewsletterService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/v1/newsletter")
@RequiredArgsConstructor
public class NewsletterController {

    private final NewsletterService newsletterService;

    @PostMapping
    public ResponseEntity<ApiResponse<Map<String, String>>> subscribeToNewsletter(@Valid @RequestBody NewsletterRequestDto request) {
        String subscriptionId = newsletterService.subscribe(request);
        return ResponseEntity.ok(ApiResponse.success(
                "Thank you for subscribing to AURA VIP Privé. Welcome to our inner circle.",
                Map.of("subscriptionId", subscriptionId)
        ));
    }
}
