package com.aura.boutique.service;

import com.aura.boutique.dto.ContactRequestDto;
import com.aura.boutique.entity.ContactMessage;
import com.aura.boutique.repository.ContactRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Random;

@Service
@RequiredArgsConstructor
public class ContactService {

    private final ContactRepository contactRepository;

    public String processContactSubmission(ContactRequestDto request) {
        String referenceId = "AUR-" + (100000 + new Random().nextInt(900000));

        ContactMessage entity = ContactMessage.builder()
                .referenceId(referenceId)
                .fullName(request.getFullName())
                .email(request.getEmail())
                .phone(request.getPhone())
                .preferredDate(request.getPreferredDate())
                .serviceType(request.getServiceType())
                .message(request.getMessage())
                .createdAt(LocalDateTime.now())
                .build();

        contactRepository.save(entity);
        return referenceId;
    }
}
