package com.myShared.backend.services.mapper.custom;

import com.myShared.backend.domain.dto.SharedFileDTO;
import com.myShared.backend.domain.entities.SharedFile;
import com.myShared.backend.services.mapper.CRUDMapper;
import org.springframework.stereotype.Component;

@Component
public class SharedFilesMapper implements CRUDMapper<SharedFile, SharedFileDTO> {
    @Override
    public SharedFileDTO toDTO(SharedFile entity) {
        return SharedFileDTO.builder()
                .id(entity.getId())
                .name(entity.getName())
                .type(entity.getType())
                .createAt(entity.getCreatedAt())
                .build();
    }

    @Override
    public SharedFile toEntity(SharedFileDTO dto) {
        return SharedFile.builder()
                .name(dto.getName())
                .type(dto.getType())
                .createdAt(dto.getCreateAt())
                .build();
    }
}
