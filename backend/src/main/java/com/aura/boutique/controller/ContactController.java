package com.aura.boutique.controller;

import com.aura.boutique.dto.ApiResponse;
import com.aura.boutique.dto.ContactRequestDto;
import com.aura.boutique.service.ContactService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/v1/contact")
@RequiredArgsConstructor
public class ContactController {

    private final ContactService contactService;

    @PostMapping
    public ResponseEntity<ApiResponse<Map<String, String>>> handleContactSubmission(@Valid @RequestBody ContactRequestDto request) {
        String referenceId = contactService.processContactSubmission(request);
        return ResponseEntity.ok(ApiResponse.success(
                "Your private consultation request has been received. Our atelier concierge will contact you within 24 hours.",
                Map.of("referenceId", referenceId)
        ));
    }
}
