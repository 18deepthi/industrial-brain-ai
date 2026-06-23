package com.deepthi.industrial_brain_ai.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class InfoController {

    @GetMapping("/api/info")
    public Map<String, String> info() {

        Map<String, String> response = new HashMap<>();

        response.put("project", "Industrial Brain AI");
        response.put("version", "1.0");
        response.put("status", "Running");

        return response;
    }
}