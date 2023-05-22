package com.dsa.Template.controller;

import com.dsa.Template.Entity.Question;
import com.dsa.Template.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/topics/{topicId}/{subtopicId}")
public class QuestionController {
    @Autowired
    private QuestionService questionService;

    @GetMapping
    public List<Question> getAllQuestionsForSubtopic(
            @PathVariable Long topicId,
            @PathVariable Long subtopicId) {
        return questionService.getAllQuestionsForSubtopic(topicId, subtopicId);
    }
}
