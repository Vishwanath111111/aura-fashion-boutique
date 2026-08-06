package com.aura.boutique.service;

import com.aura.boutique.dto.NewsletterRequestDto;
import com.aura.boutique.entity.NewsletterSubscriber;
import com.aura.boutique.repository.NewsletterRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Random;

@Service
@RequiredArgsConstructor
public class NewsletterService {

    private final NewsletterRepository newsletterRepository;

    public String subscribe(NewsletterRequestDto request) {
        return newsletterRepository.findByEmailIgnoreCase(request.getEmail())
                .map(NewsletterSubscriber::getId)
                .orElseGet(() -> {
                    NewsletterSubscriber newSub = NewsletterSubscriber.builder()
                            .email(request.getEmail())
                            .preferredCategory(request.getPreferredCategory())
                            .subscribedAt(LocalDateTime.now())
                            .build();
                    return newsletterRepository.save(newSub).getId();
                });
    }
}
