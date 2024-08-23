package com.myShared.backend.controller;


import com.myShared.backend.domain.dto.SharedFileDTO;
import com.myShared.backend.services.SharedFilesService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequestMapping("/shared")
@RestController
@RequiredArgsConstructor
public class SharedFilesController {

    private final SharedFilesService sharedFilesService;

    @PostMapping
    public ResponseEntity<SharedFileDTO> create(@RequestBody SharedFileDTO sharedFileDTO) {
        var newSharedFile = sharedFilesService.create(sharedFileDTO);

        return ResponseEntity.status(HttpStatus.CREATED).body(newSharedFile);
    }

    @GetMapping
    public ResponseEntity<List<SharedFileDTO>> findAll() {
        var list = sharedFilesService.findAll();
        return ResponseEntity.ok(list);
    }
}
