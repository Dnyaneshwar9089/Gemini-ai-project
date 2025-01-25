package com.ai.Gemini_ai_chat.controller;

import com.ai.Gemini_ai_chat.serivce.GeminiService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/ai/ask")
public class AskController {


    private final GeminiService geminiService;

    public AskController(GeminiService geminiService) {
        this.geminiService = geminiService;
    }

    @PostMapping("")
    public ResponseEntity<String> askQuestion(@RequestBody Map<String,String> payload){
        String question=payload.get("question");
        String response= geminiService.getQuestion(question);
        return ResponseEntity.ok(response);
    }
}

//postman
//{
// "question":"what is error"
//}