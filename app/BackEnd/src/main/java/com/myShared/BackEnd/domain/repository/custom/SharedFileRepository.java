package com.myShared.BackEnd.domain.repository.custom;

import com.myShared.BackEnd.domain.entities.SharedFile;
import com.myShared.BackEnd.domain.repository.CRUDRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SharedFileRepository extends CRUDRepository<SharedFile, String> {
}
