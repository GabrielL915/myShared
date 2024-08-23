package com.myShared.backend.services;

import com.myShared.backend.domain.dto.SharedFileDTO;
import com.myShared.backend.domain.entities.SharedFile;
import com.myShared.backend.domain.repository.CRUDRepository;
import com.myShared.backend.services.mapper.custom.SharedFilesMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class SharedFilesService {

    private final CRUDRepository<SharedFile, String> crudRepository;

    private final SharedFilesMapper sharedFilesMapper;

    public SharedFileDTO create(SharedFileDTO sharedFileDTO) {
        SharedFile newSharedFile = sharedFilesMapper.toEntity(sharedFileDTO);

        return sharedFilesMapper.toDTO(crudRepository.save(newSharedFile));
    }

    public List<SharedFileDTO> findAll() {
        return crudRepository.findAll()
                .stream()
                .map(sharedFilesMapper::toDTO)
                .toList();
    }

    @Scheduled(fixedRate = 3000)
    private void updateSharedIdPeriodically() {
        List<SharedFile> sharedFiles = crudRepository.findAll();
        for (SharedFile sharedFile : sharedFiles) {
            sharedFile.setSharedId(UUID.randomUUID().toString());
            crudRepository.save(sharedFile);
        }
    }

    //send file

    //check files sended

    //search by file name
}
