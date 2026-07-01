package com.deepthi.industrial_brain_ai.controller;

import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = {
        "http://localhost:5173",
        "http://localhost:5174"
})
@RestController
@RequestMapping("/api")
public class DocumentController {

    private static final String UPLOAD_DIR =
            System.getProperty("user.dir") + "/uploads/";

    @GetMapping("/documents")
    public List<String> getDocuments() {

        List<String> documents = new ArrayList<>();

        File folder = new File(UPLOAD_DIR);

        if(folder.exists()){

            File[] files = folder.listFiles();

            if(files != null){

                for(File file : files){

                    if(file.isFile()){

                        documents.add(file.getName());

                    }

                }

            }

        }

        return documents;

    }

}