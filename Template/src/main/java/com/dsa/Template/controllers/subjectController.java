package com.dsa.Template.controllers;

import com.dsa.Template.service.TemplateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/getAllSubjects")
@CrossOrigin(origins = "http://localhost:3000")
public class subjectController {

    @Autowired
    private TemplateService templateService;

    @GetMapping("")
    public ResponseEntity<List<String>> getAllSubjects(){
        return ResponseEntity.ok( templateService.getAllSubjects() );
    }
    @GetMapping("/Arrays")
    public ResponseEntity<List<String>> getArrayQuestions(){
        return ResponseEntity.ok(templateService.getArrayQuestions());
    }
}
