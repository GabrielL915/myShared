package com.myShared.backend.domain.repository.custom;

import com.myShared.backend.domain.entities.SharedFile;
import com.myShared.backend.domain.repository.CRUDRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SharedFileRepository extends CRUDRepository<SharedFile, String> {
}
