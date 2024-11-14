package com.example.learning;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

public class UserService {
    @Autowired
    private UserRepository userRepository;
    public List<User> allusers(){
        return userRepository.findAll();
    }
    public Optional<User> getUser(ObjectId id){
        return userRepository.findById(id);
    }

    public User addUser(User user){
        return userRepository.save(user);
    }

    public void deleteUser(ObjectId id) {
        userRepository.deleteById(id);
    }

    public User updateUser(ObjectId id,User updatedUser){
        Optional<User> oldUser=userRepository.findById(id);
        if (oldUser.isPresent()) {
            User existingUser = oldUser.get();
            existingUser.setName(updatedUser.getName());
            existingUser.setSurname(updatedUser.getSurname());
            existingUser.setAge(updatedUser.getAge());
            return userRepository.save(existingUser);
        } else {
            throw new RuntimeException("User not found with id " + id);
        }
    }


}
