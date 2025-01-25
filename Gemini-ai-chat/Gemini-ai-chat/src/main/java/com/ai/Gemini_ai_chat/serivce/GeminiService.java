package com.ai.Gemini_ai_chat.serivce;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.Map;

@Service
public class GeminiService {


    private final WebClient webClient;

    @Value("${Gemini_API}")
    private String Gemini_API;

    @Value("${Gemini_Key}")
    private String Gemini_Key;

    public GeminiService(WebClient.Builder webClient) {
        this.webClient = webClient.build();
    }


    public String getQuestion(String question) {

//        Ask a question
       Map<String, Object> requestBody=Map.of(
               "contents",new Object[]{
                       Map.of("parts",new Object[]{
                               Map.of("text",question)
                       })
               }
       );

//       Make API Call
        String response=webClient.post()
                .uri(Gemini_API+Gemini_Key)
                .header("content-type","application/json")
                .bodyValue(requestBody)
                .retrieve()
                .bodyToMono(String.class)
                .block();

//Return Response

        return response;

    }
}
