package com.dsa.Template.controller;

import com.dsa.Template.service.SubtopicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/topics/{topicId}")
public class SubtopicController {
    @Autowired
    private SubtopicService subtopicService;

    @GetMapping
    public List<String> getAllSubtopicsForTopic(@PathVariable Long topicId) {
        return subtopicService.getAllSubtopicsForTopic(topicId);
    }
}