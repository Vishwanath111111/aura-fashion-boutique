package com.aura.boutique.service;

import com.aura.boutique.dto.TestimonialDto;
import com.aura.boutique.entity.Testimonial;
import com.aura.boutique.repository.TestimonialRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class TestimonialService {

    private final TestimonialRepository testimonialRepository;

    public List<TestimonialDto> getAllTestimonials() {
        return testimonialRepository.findAll().stream()
                .map(this::mapToDto)
                .collect(Collectors.toList());
    }

    private TestimonialDto mapToDto(Testimonial entity) {
        return TestimonialDto.builder()
                .id(entity.getId())
                .clientName(entity.getClientName())
                .role(entity.getRole())
                .location(entity.getLocation())
                .quote(entity.getQuote())
                .rating(entity.getRating())
                .avatar(entity.getAvatar())
                .verifiedPurchase(entity.getVerifiedPurchase())
                .date(entity.getDate())
                .build();
    }
}
