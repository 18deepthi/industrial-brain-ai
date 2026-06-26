package com.deepthi.industrial_brain_ai.service;

import com.google.genai.Client;
import com.google.genai.types.GenerateContentResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class GeminiService {

    @Value("${gemini.api.key}")
    private String apiKey;

    public String askGemini(String prompt) {

        Client client = Client.builder()
                .apiKey(apiKey)
                .build();

        GenerateContentResponse response =
                client.models.generateContent(
                        "gemini-2.5-flash",
                        prompt,
                        null
                );

        return response.text();
    }


public String askQuestion(String document, String question) {

    String prompt =
            """
            You are an AI document assistant.

            Document:

            %s

            User Question:

            %s

            Answer only using information present in the document.
            If the answer is not available, reply:
            "The document does not contain this information."
            """
            .formatted(document, question);
    System.out.println("API Key = " + apiKey);    
    Client client = Client.builder()
            .apiKey(apiKey)
            .build();

    GenerateContentResponse response =
            client.models.generateContent(
                    "gemini-2.5-flash",
                    prompt,
                    null
            );

    return response.text();
}
}