package com.dsa.Template.Entity;

import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Question {
    private String title;
    private String difficulty;

    public Question(String title, String difficulty){
        this.title = title;
        this.difficulty = difficulty;
    }
}
