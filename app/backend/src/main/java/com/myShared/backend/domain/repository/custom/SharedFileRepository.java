package com.myShared.backend.domain.repository.custom;

import com.myShared.backend.domain.entities.SharedFile;
import com.myShared.backend.domain.repository.CRUDRepository;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SharedFileRepository extends CRUDRepository<SharedFile, String> {
    List<SharedFile> findAllByIdFrom(String idFrom, Sort sort);}
