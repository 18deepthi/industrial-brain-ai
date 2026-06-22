package com.deepthi.industrial_brain_ai.controller;

import com.deepthi.industrial_brain_ai.service.PdfService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/pdf")
public class PdfController {

    @Autowired
    private PdfService pdfService;

    @GetMapping("/extract")
    public ResponseEntity<String> extractText(
            @RequestParam String fileName) {

        try {

            String filePath =
                    System.getProperty("user.dir")
                            + "/uploads/"
                            + fileName;

            String text = pdfService.extractText(filePath);

            return ResponseEntity.ok(text);

        } catch (Exception e) {

            return ResponseEntity.internalServerError()
                    .body("Error: " + e.getMessage());

        }
    }
}