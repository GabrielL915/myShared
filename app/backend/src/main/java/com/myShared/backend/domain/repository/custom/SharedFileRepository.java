package com.myShared.backend.domain.repository.custom;

import com.myShared.backend.domain.entities.SharedFile;
import com.myShared.backend.domain.repository.CRUDRepository;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface SharedFileRepository extends CRUDRepository<SharedFile, String> {
    Optional<SharedFile> findByName(String name);

    List<SharedFile> findAllByIdFrom(String idFrom, Sort sort);
}
