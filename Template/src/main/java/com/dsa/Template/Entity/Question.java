package com.dsa.Template.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Question{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionId;

    @Column(nullable = false)
    private String title;

    @Column
    private String gfgLink;

    @Column
    private String leetCodeLink;

    @Column
    private String solutionLink;

    @Column(nullable = false)
    private String topic;

    @Column(nullable = false)
    private String subTopic;

    @Column(nullable = false)
    private String difficulty;

}
