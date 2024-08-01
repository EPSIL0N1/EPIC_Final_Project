package com.example.fgpt_backend.mapper;

import com.example.fgpt_backend.dto.DatesDTo;
import com.example.fgpt_backend.dto.UsersDTo;
import com.example.fgpt_backend.entity.DatesEntity;
import com.example.fgpt_backend.entity.UserEntity;

public class UsersMapper {

    public static UsersDTo mapToPatientDto(UserEntity userEntity)
    {
        return new UsersDTo(
                userEntity.getId(),
                userEntity.getUserName(),
                userEntity.getPassword(),
                userEntity.getReport(),
                userEntity.getDates()
        );
    }

    public static UserEntity mapToPatient(UsersDTo usersDTo)
    {
        return new UserEntity(
                usersDTo.getId(),
                usersDTo.getUserName(),
                usersDTo.getPassword(),
                usersDTo.getReport(),
                usersDTo.getDates()
        );
    }

}
