//package com.dsa.Template.security;
//
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.Customizer;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.web.SecurityFilterChain;
//
//@Configuration
//@EnableWebSecurity
//public class WebSecurity{
//
//    @Bean
//    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
//        return http
//                .authorizeHttpRequests(auth->{
//                    auth.requestMatchers("/topics").permitAll();
//                    auth.anyRequest().authenticated();
//                })
//
//                .formLogin(Customizer.withDefaults())
//                .build();
//        //                .oauth2Login(Customizer.withDefaults())
//    }
//}
