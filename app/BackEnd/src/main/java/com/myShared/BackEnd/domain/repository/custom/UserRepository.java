package com.myShared.BackEnd.domain.repository.custom;

import com.myShared.BackEnd.domain.entities.User;
import com.myShared.BackEnd.domain.repository.CRUDRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CRUDRepository<User, String> {
}
