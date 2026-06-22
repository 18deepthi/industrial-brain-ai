package com.deepthi.industrial_brain_ai.controller;

import com.deepthi.industrial_brain_ai.service.PdfService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/ai")
public class AiController {

    @Autowired
    private PdfService pdfService;

    @GetMapping("/summary")
    public ResponseEntity<String> summarize(
            @RequestParam String fileName) {

        try {

            String filePath =
                    System.getProperty("user.dir")
                            + "/uploads/"
                            + fileName;

            String text = pdfService.extractText(filePath);

            if (text.length() > 1000) {
                text = text.substring(0, 1000);
            }

            String summary =
                    "Document Summary:\n\n" +
                    text;

            return ResponseEntity.ok(summary);

        } catch (Exception e) {

            return ResponseEntity.internalServerError()
                    .body("Error: " + e.getMessage());

        }
    }
}