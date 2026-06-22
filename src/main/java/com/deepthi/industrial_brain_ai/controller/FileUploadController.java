package com.deepthi.industrial_brain_ai.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

@RestController
@RequestMapping("/api")
public class FileUploadController {

    private static final String UPLOAD_DIR = System.getProperty("user.dir") + "/uploads/";

    @PostMapping("/upload")
public ResponseEntity<String> uploadFile(
        @RequestParam("file") MultipartFile file) {

    try {

        File uploadDir = new File(UPLOAD_DIR);

        if (!uploadDir.exists()) {
            uploadDir.mkdirs();
        }

        String filePath = UPLOAD_DIR + file.getOriginalFilename();

        File destination = new File(filePath);

        file.getInputStream().transferTo(
                new java.io.FileOutputStream(destination));

        return ResponseEntity.ok(
                "File saved successfully: " + file.getOriginalFilename());

    } catch (Exception e) {

        e.printStackTrace();

        return ResponseEntity.internalServerError()
                .body("Error uploading file: " + e);

    }
}
}