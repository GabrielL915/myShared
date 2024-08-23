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
                .sharedId(entity.getSharedId())
                .name(entity.getName())
                .type(entity.getType())
                .createAt(entity.getCreatedAt())
                .userId(entity.getUser().getId())
                .build();
    }

    @Override
    public SharedFile toEntity(SharedFileDTO dto) {
        return SharedFile.builder()
                .sharedId(dto.getSharedId())
                .name(dto.getName())
                .type(dto.getType())
                .createdAt(dto.getCreateAt())
                .user(getUser(dto))
                .build();
    }

    private User getUser(SharedFileDTO dto) {
        return userRepository.findById(dto.getUserId()).orElseThrow();
    }
}
