package com.myShared.backend.domain.repository.custom;

import com.myShared.backend.domain.entities.User;
import com.myShared.backend.domain.repository.CRUDRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CRUDRepository<User, String> {
}
