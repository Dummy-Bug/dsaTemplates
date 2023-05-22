package com.dsa.Template.service;

import com.dsa.Template.repository.SubjectRepository;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@Getter
@Setter
public class TemplateService {

    @Autowired
    private SubjectRepository subjectRepository;

    public List<String> getAllSubjects() {
        return subjectRepository.getAllSubjects();
    }

    public List<String> getArrayQuestions(){
        return subjectRepository.getArrayQuestions();
    }

}
