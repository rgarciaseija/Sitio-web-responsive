package com.pluralsight.conferencedemo.repositories;

import com.pluralsight.conferencedemo.models.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
public class SessionRepository {

    @Autowired
    SessionJpaRepository repository;

    @PersistenceContext
    private EntityManager entityManager;

    public Session create(Session session) {
        repository.saveAndFlush(session);
        return session;
    }

    public Session update(Session session) {
        session = repository.saveAndFlush(session);
        return session;
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

    public Session find(Long id) {
        return repository.getOne(id);
    }

    public List<Session> list() {
        return repository.findAll();
    }

    public List<Session> getSessionsThatHaveName(String name) {
        return repository.findBySessionNameContains(name);
    }

    public List<Session> getBySessionLengthNot(Integer length) {
        return repository.findBySessionLengthNot(length);
    }

    public List<Session> getBySessionLengthIs(Integer length) {
        return repository.findBySessionLengthIs(length);
    }

    public List<Session> getBySessionNameStartingWith(String name) {
        return repository.findBySessionNameStartingWith(name);
    }

    public List<Session> getBySessionLengthGreaterThan(Integer length) {
        return repository.findBySessionLengthGreaterThanEqual(length);
    }

    public List<Session> getBySessionLengthLessThanEqual(Integer length) {
        return repository.findBySessionLengthLessThanEqual(length);
    }

    public List<Session> getBySessionLengthBetween(Integer lengthStart, Integer lengthEnd) {
        return repository.findBySessionLengthBetween(lengthStart, lengthEnd);
    }
}
