package com.myShared.backend.domain.repository.custom;

import com.myShared.backend.domain.entities.User;
import com.myShared.backend.domain.repository.CRUDRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends CRUDRepository<User, String> {
    Optional<User> findByEmail(String email);
}
