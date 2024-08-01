package com.example.fgpt_backend.service.impl;

import com.example.fgpt_backend.dto.DatesDTo;
import com.example.fgpt_backend.dto.UsersDTo;
import com.example.fgpt_backend.entity.DatesEntity;
import com.example.fgpt_backend.entity.UserEntity;
import com.example.fgpt_backend.exception.ResourceNotFoundException;
import com.example.fgpt_backend.mapper.DatesMapper;
import com.example.fgpt_backend.mapper.UsersMapper;
import com.example.fgpt_backend.repository.DatesRepository;
import com.example.fgpt_backend.repository.UsersRepository;
import com.example.fgpt_backend.service.DatesService;
import com.example.fgpt_backend.service.UsersService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class UsersServiceImpl implements UsersService {

    private UsersRepository usersRepository;

    @Override
    public UsersDTo createPatient(UsersDTo usersDTo) {

        UserEntity patient = UsersMapper.mapToPatient(usersDTo);
        UserEntity savedPatient = usersRepository.save(patient);

        return UsersMapper.mapToPatientDto(savedPatient);
    }

    @Override
    public UsersDTo getPatientById(Long patientId) {
        UserEntity patient = usersRepository.findById(patientId)
                .orElseThrow(() -> new ResourceNotFoundException("Patient does not exists with given Id: " + patientId));
        return UsersMapper.mapToPatientDto(patient);
    }

    @Override
    public List<UsersDTo> getAllPatients() {

        List<UserEntity> patients = usersRepository.findAll();
        return patients.stream().map((patient) -> UsersMapper.mapToPatientDto(patient))
                .collect(Collectors.toList());
    }

    @Override
    public UsersDTo updatePatient(Long patientId, UsersDTo updatedPatient) {
        UserEntity patient = usersRepository.findById(patientId).orElseThrow(
                () -> new ResourceNotFoundException("Patient does not exists with given Id: " + patientId));

//        patient.setId(updatedPatient.getId());
        patient.setUserName(updatedPatient.getUserName());
        patient.setPassword(updatedPatient.getPassword());

        UserEntity updatedPatientObj = usersRepository.save(patient);
        return UsersMapper.mapToPatientDto(updatedPatientObj);
    }

    @Override
    public void deletePatient(Long patientId) {
//        Patient patient = patientRepository.findById(patientId).orElseThrow(
//                () -> new ResourceNotFoundException("Patient does not exists with given Id: " + patientId));
        usersRepository.deleteById(patientId);
    }

//    @Override
//    public UsersDTo findByUserId(Long id)
//    {
//        return usersRepository.findByUserId(id);
//    }
}
