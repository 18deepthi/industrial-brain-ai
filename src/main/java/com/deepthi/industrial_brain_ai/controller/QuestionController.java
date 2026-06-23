package com.deepthi.industrial_brain_ai.controller;

import com.deepthi.industrial_brain_ai.service.PdfService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/question")
public class QuestionController {

    @Autowired
    private PdfService pdfService;

    @GetMapping
    public ResponseEntity<String> askQuestion(
            @RequestParam String fileName,
            @RequestParam String question) {

        try {

            String filePath =
                    System.getProperty("user.dir")
                            + "/uploads/"
                            + fileName;

            String text = pdfService.extractText(filePath);

            if(question.toLowerCase().contains("skills")) {

                return ResponseEntity.ok(
                        "Skills found in document:\n\n" + text
                );

            }

            return ResponseEntity.ok(
                    "Question received: " + question
            );

        } catch (Exception e) {

            return ResponseEntity.internalServerError()
                    .body("Error: " + e.getMessage());

        }
    }
}