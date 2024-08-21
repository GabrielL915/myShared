package com.myShared.backend.services.mapper.custom;

import com.myShared.backend.domain.dto.RegisterUserDTO;
import com.myShared.backend.domain.entities.User;
import com.myShared.backend.services.mapper.CRUDMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
@RequiredArgsConstructor
public class RegisterUserMapper implements CRUDMapper<User, RegisterUserDTO> {


    private final PasswordEncoder passwordEncoder;

    @Override
    public RegisterUserDTO toDTO(User entity) {
        return RegisterUserDTO.builder()
                .email(entity.getEmail())
                .password(null)
                .createdAt(entity.getCreatedAt())
                .build();
    }

    @Override
    public User toEntity(RegisterUserDTO dto) {
        return User.builder()
                .email(dto.getEmail())
                .password(passwordEncoder.encode(dto.getPassword()))
                .createdAt(dto.getCreatedAt() != null ? dto.getCreatedAt() : LocalDateTime.now())
                .build();
    }
}
