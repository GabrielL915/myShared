package com.myShared.backend.domain.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.UUID;

@Getter
@Setter
@Builder
public class SharedFileDTO {

    private UUID id;

    private String name;

    private String type;

    private LocalDateTime createAt;
}
