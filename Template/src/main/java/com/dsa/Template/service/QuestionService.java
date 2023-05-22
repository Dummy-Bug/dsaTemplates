package com.dsa.Template.service;

import com.dsa.Template.Entity.Question;
import com.dsa.Template.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionService {

    @Autowired
    private QuestionRepository questionRepository;

    public List<Question> getAllQuestionsForSubtopic(Long topicId,Long subtopicId){
        return questionRepository.getAllQuestionsForSubtopic(topicId,subtopicId);
    }
}
