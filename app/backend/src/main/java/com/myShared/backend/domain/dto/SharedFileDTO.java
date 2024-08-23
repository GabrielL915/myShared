package com.myShared.backend.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.UUID;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class SharedFileDTO {

    private String id;

    private String sharedId;

    private String name;

    private String type;

    private LocalDateTime createAt;

    private String userId;
}
