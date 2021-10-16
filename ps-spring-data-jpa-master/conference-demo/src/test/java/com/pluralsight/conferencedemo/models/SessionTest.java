package com.pluralsight.conferencedemo.models;

import com.pluralsight.conferencedemo.repositories.SessionRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
public class SessionTest {
    @Autowired
    private SessionRepository repository;

    @Test
    public void test() throws Exception {
        List<Session> sessions = repository.getSessionsThatHaveName("Java");
        assertTrue(sessions.size() > 0);
    }

    @Test
    public void shouldReturnSessionByName() {
        List<Session> sessions = repository.getSessionsThatHaveName("Spring Cloud Primer");
        assertTrue(sessions.size() > 0);
    }

    @Test
    public void getSessionsThatAreNotThirtyInLength() {
        List<Session> sessions =  repository.getBySessionLengthNot(30);
        assertTrue(sessions.size()==3);
    }

    @Test
    public void shouldReturnTwentyEightSessions() {
        List<Session> sessions =  repository.getBySessionLengthIs(30);
        assertTrue(sessions.size()==28);
    }

    @Test
    public void shouldReturnThreeSessionsStartingWithSpring() {
        List<Session> sessions =  repository.getBySessionNameStartingWith("Spring");
        assertTrue(sessions.size()==3);
    }

    @Test
    public void shouldReturnTwentyEigthSessionsLessThanEqualToThirtyFive() {
        List<Session> sessions =  repository.getBySessionLengthLessThanEqual(35);
        assertTrue(sessions.size()==28);
    }

    @Test
    public void shouldReturnSeventyOneSessionsGreaterThanEqualToThirty() {
        List<Session> sessions =  repository.getBySessionLengthGreaterThan(30);
        assertTrue(sessions.size()==71);
    }

    @Test
    public void shouldReturnTwentyNineSessionsBetweenThirtyAndFortyFive() {
        List<Session> sessions =  repository.getBySessionLengthBetween(30, 45);
        assertTrue(sessions.size()==29);
    }
}
