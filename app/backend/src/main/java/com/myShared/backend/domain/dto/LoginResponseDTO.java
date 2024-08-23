package com.myShared.backend.domain.dto;

import lombok.Builder;


@Builder
public record LoginResponseDTO(String token, Long expiresIn) {
}

