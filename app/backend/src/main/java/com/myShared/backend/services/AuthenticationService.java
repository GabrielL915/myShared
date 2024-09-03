package com.myShared.backend.services;

import com.myShared.backend.domain.dto.LoginResponseDTO;
import com.myShared.backend.domain.dto.LoginUserDTO;
import com.myShared.backend.domain.dto.RegisterUserDTO;
import com.myShared.backend.domain.entities.User;
import com.myShared.backend.domain.repository.custom.UserRepository;
import com.myShared.backend.services.exception.EntityNotFoundException;
import com.myShared.backend.services.mapper.custom.RegisterUserMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository userRepository;

    private final JwtService jwtService;

    private final RegisterUserMapper registerUserMapper;

    private final AuthenticationManager authenticationManager;

    public RegisterUserDTO signUp(RegisterUserDTO userDTO) {
        User newUser = registerUserMapper.toEntity(userDTO);
        return registerUserMapper.toDTO(userRepository.save(newUser));
    }

    public LoginResponseDTO authenticate(LoginUserDTO userDTO) {
        authenticateUser(userDTO.getEmail(), userDTO.getPassword());

        User existingUser = userRepository.findByEmail(userDTO.getEmail()).orElseThrow(() -> new EntityNotFoundException(userDTO.getEmail()));

        String jwtToken = jwtService.generateToken(existingUser);
        return buildLoginResponse(jwtToken);
    }

    private void authenticateUser(String email, String password) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(email, password)
        );
    }

    private LoginResponseDTO buildLoginResponse(String token) {
        return LoginResponseDTO.builder()
                .token(token)
                .expiresIn(jwtService.getExpirationTime())
                .build();
    }
}
