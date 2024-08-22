package com.myShared.backend.controller;

import com.myShared.backend.domain.dto.LoginResponseDTO;
import com.myShared.backend.domain.dto.LoginUserDTO;
import com.myShared.backend.domain.dto.RegisterUserDTO;
import com.myShared.backend.services.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/auth")
@RestController
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @PostMapping("/signup")
    public ResponseEntity<RegisterUserDTO> register(@RequestBody RegisterUserDTO userDTO) {
        RegisterUserDTO registerUserDTO = authenticationService.signUp(userDTO);

        return ResponseEntity.ok(registerUserDTO);
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponseDTO> login(@RequestBody LoginUserDTO userDTO) {
        LoginResponseDTO loginResponseDTO = authenticationService.authenticate(userDTO);

        return ResponseEntity.ok(loginResponseDTO);
    }
}
