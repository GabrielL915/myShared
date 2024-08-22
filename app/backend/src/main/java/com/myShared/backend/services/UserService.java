package com.myShared.backend.services;

import com.myShared.backend.domain.entities.User;
import com.myShared.backend.domain.repository.CRUDRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {

    private final CRUDRepository<User, String> userRepository;

    public List<User> findAll() {
        return userRepository.findAll();
    }
}
