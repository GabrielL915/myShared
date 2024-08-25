package com.myShared.backend.services.mapper.custom;

import com.myShared.backend.domain.dto.SharedFileDTO;
import com.myShared.backend.domain.entities.SharedFile;
import com.myShared.backend.domain.entities.User;
import com.myShared.backend.domain.repository.custom.UserRepository;
import com.myShared.backend.services.mapper.CRUDMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class SharedFilesMapper implements CRUDMapper<SharedFile, SharedFileDTO> {

    private final UserRepository userRepository;

    @Override
    public SharedFileDTO toDTO(SharedFile entity) {
        return SharedFileDTO.builder()
                .id(entity.getId())
                .name(entity.getName())
                .type(entity.getType())
                .idFrom(entity.getIdFrom())
                .idTo(entity.getIdTo())
                .createAt(entity.getCreatedAt())
                .build();
    }

    @Override
    public SharedFile toEntity(SharedFileDTO dto) {
        return SharedFile.builder()
                .name(dto.getName())
                .type(dto.getType())
                .idFrom(dto.getIdFrom())
                .idTo(dto.getIdTo())
                .createdAt(dto.getCreateAt())
                .build();
    }
}
