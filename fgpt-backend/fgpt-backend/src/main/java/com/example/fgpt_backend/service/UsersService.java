package com.example.fgpt_backend.service;

import com.example.fgpt_backend.dto.DatesDTo;
import com.example.fgpt_backend.dto.UsersDTo;

import java.util.List;

public interface UsersService {
    UsersDTo createPatient(UsersDTo usersDTo);

    UsersDTo getPatientById(Long patientId);

    List<UsersDTo> getAllPatients();

    UsersDTo updatePatient(Long patientId, UsersDTo updatedPatient);

    void deletePatient(Long patientId);

//    UsersDTo findByUserId(Long id);
}
