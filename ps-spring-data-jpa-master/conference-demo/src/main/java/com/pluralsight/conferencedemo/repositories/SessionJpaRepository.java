package com.pluralsight.conferencedemo.repositories;

import com.pluralsight.conferencedemo.models.Session;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SessionJpaRepository extends JpaRepository<Session, Long> {
    List<Session> findBySessionNameContains(String name);
    List<Session> findBySessionNameStartingWith(String name);
    List<Session> findBySessionLengthNot(Integer length);
    List<Session> findBySessionLengthIs(Integer length);
    List<Session> findBySessionLengthGreaterThanEqual(Integer length);
    List<Session> findBySessionLengthLessThanEqual(Integer length);
    List<Session> findBySessionLengthBetween(Integer lengthStart, Integer lengthEnd);

}
