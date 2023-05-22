package com.dsa.Template.repository;

import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class SubTopicRepository {

    public List<String> getAllSubtopicsForTopic(Long topicId)
    {
        List<String> subTopics = new ArrayList<>();

        if(topicId == 0){
            subTopics.add("Two pointers");
            subTopics.add("Three Pointers");
            subTopics.add("cyclic sort");

        }
        else if(topicId == 1){
            subTopics.add("dfs");
            subTopics.add("bfs");
            subTopics.add("dijkstra");

        }
        return subTopics;
    }
}
