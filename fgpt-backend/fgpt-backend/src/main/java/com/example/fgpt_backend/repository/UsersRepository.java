package com.example.fgpt_backend.repository;

import com.example.fgpt_backend.dto.UsersDTo;
import com.example.fgpt_backend.entity.DatesEntity;
import com.example.fgpt_backend.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsersRepository extends JpaRepository<UserEntity, Long> {
//    UsersDTo findByUserId(Long id);
}
