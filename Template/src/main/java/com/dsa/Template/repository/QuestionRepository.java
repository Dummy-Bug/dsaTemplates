package com.dsa.Template.repository;

import com.dsa.Template.Entity.Question;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class QuestionRepository {

    public List<Question> getAllQuestionsForSubtopic(long topicId, Long subtopicId){
        List<Question> questionList = new ArrayList<>();

        if((topicId ==0)&& (subtopicId ==0)){
            Question question = new Question("Maximum Sum Subarray","Medium");
            questionList.add(question);
        }
        if((topicId ==1)&& (subtopicId ==0)){
            Question question = new Question("is graphBipartite","Hard");
            questionList.add(question);
        }
    return questionList;
    }

}
