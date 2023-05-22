package com.dsa.Template.service;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TopicService {
    List<String> topics = new ArrayList<>();
    TopicService(){
        topics.add("Array");
        topics.add("Graphs");
        topics.add("LinkedList");
    }

    public List<String> getAllTopics(){
        return topics;
    }

}
