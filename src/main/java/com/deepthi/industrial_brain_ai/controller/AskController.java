package com.deepthi.industrial_brain_ai.controller;

import com.deepthi.industrial_brain_ai.dto.QuestionRequest;
import com.deepthi.industrial_brain_ai.service.GeminiService;
import com.deepthi.industrial_brain_ai.service.PdfService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/ai")
public class AskController {

    @Autowired
    private PdfService pdfService;

    @Autowired
    private GeminiService geminiService;

    @PostMapping("/ask")
    public ResponseEntity<String> askQuestion(
            @RequestBody QuestionRequest request) {

        try {

            String filePath =
                    System.getProperty("user.dir")
                            + "/uploads/"
                            + request.getFileName();

            String document =
                    pdfService.extractText(filePath);

            String answer =
                    geminiService.askQuestion(
                            document,
                            request.getQuestion());

            return ResponseEntity.ok(answer);

        } catch (Exception e) {

            return ResponseEntity.internalServerError()
                    .body(e.getMessage());

        }
    }
}