package com.auction.app.service.concretes;

import com.auction.app.dao.UserDao;
import com.auction.app.model.entities.User;
import com.auction.app.service.abstracts.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class UserManager implements UserService {
    private UserDao userDao;

    @Autowired
    public UserManager(UserDao userDao) {
        this.userDao = userDao;
    }

    @Override
    public List<User> users() {
        return userDao.findAll();
    }
}
