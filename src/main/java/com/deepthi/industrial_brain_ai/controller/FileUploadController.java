package com.deepthi.industrial_brain_ai.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;

@CrossOrigin(origins = {
        "http://localhost:5173",
        "http://localhost:5174"
})
@RestController
@RequestMapping("/api")
public class FileUploadController {

    private static final String UPLOAD_DIR =
            System.getProperty("user.dir") + "/uploads/";

    @PostMapping("/upload")
    public ResponseEntity<String> uploadFile(
            @RequestParam("file") MultipartFile file) {

        try {

            File uploadDir = new File(UPLOAD_DIR);

            if (!uploadDir.exists()) {
                uploadDir.mkdirs();
            }

            File destination = new File(
                    UPLOAD_DIR + file.getOriginalFilename());

            file.transferTo(destination);

            return ResponseEntity.ok(
                    "File saved successfully: " + file.getOriginalFilename());

        } catch (Exception e) {

            e.printStackTrace();

            return ResponseEntity
                    .internalServerError()
                    .body("Error uploading file: " + e.getMessage());
        }
    }
}