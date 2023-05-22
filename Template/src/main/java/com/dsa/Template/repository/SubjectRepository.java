package com.dsa.Template.repository;

import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class SubjectRepository {

    public List<String> getAllSubjects() {
        // Assuming you have a list of subjects
        List<String> subjects = new ArrayList<>();
        subjects.add("Arrays");
        subjects.add("LinkedList");
        subjects.add("Backtracking");
        subjects.add("Graphs");
        subjects.add("Two Pointers");
        subjects.add("Strings");
        subjects.add("Bit Manipulation");
        subjects.add("Dynamic Programming");

        return subjects;
    }

    public List<String> getArrayQuestions(){
        List<String> arrayQuestions = new ArrayList<>();
        arrayQuestions.add("Maximum Sum");
        arrayQuestions.add("kadane's algo");
        arrayQuestions.add("Two Sum problem");
        arrayQuestions.add("Majority element");
        arrayQuestions.add("Rain water problem");
        return arrayQuestions;

    }
}
