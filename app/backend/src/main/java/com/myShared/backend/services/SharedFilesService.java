package com.myShared.backend.services;

import com.myShared.backend.domain.dto.SharedFileDTO;
import com.myShared.backend.domain.entities.SharedFile;
import com.myShared.backend.domain.repository.custom.SharedFileRepository;
import com.myShared.backend.services.mapper.custom.SharedFilesMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SharedFilesService {

    private final SharedFileRepository sharedFileRepository;

    private final SharedFilesMapper sharedFilesMapper;

    public SharedFileDTO create(SharedFileDTO sharedFileDTO) {
        SharedFile newSharedFile = sharedFilesMapper.toEntity(sharedFileDTO);

        return sharedFilesMapper.toDTO(sharedFileRepository.save(newSharedFile));
    }

    public List<SharedFileDTO> findAll() {
        return sharedFileRepository.findAll()
                .stream()
                .map(sharedFilesMapper::toDTO)
                .toList();
    }

    public List<SharedFileDTO> findAllByUserFromId(String userFromId, int pageNumber, int pageSize) {

        Sort sort = Sort.by(Sort.Direction.DESC, "createdAt");
        List<SharedFile> sharedFiles = sharedFileRepository.findAllByIdFrom(userFromId, sort);

        return sharedFiles.stream().skip((long) (pageNumber - 1) * pageSize)
                .limit(pageSize)
                .map(sharedFilesMapper::toDTO)
                .toList();
    }


    public SharedFileDTO findByName(String name) {
        SharedFile sharedFile = sharedFileRepository.findByName(name).orElseThrow();

        return sharedFilesMapper.toDTO(sharedFile);
    }
}
