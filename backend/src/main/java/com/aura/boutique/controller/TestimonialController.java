package com.aura.boutique.controller;

import com.aura.boutique.dto.ApiResponse;
import com.aura.boutique.dto.TestimonialDto;
import com.aura.boutique.service.TestimonialService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/testimonials")
@RequiredArgsConstructor
public class TestimonialController {

    private final TestimonialService testimonialService;

    @GetMapping
    public ResponseEntity<ApiResponse<List<TestimonialDto>>> getAllTestimonials() {
        return ResponseEntity.ok(ApiResponse.success("Testimonials retrieved successfully", testimonialService.getAllTestimonials()));
    }
}
