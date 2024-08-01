package com.example.fgpt_backend.service.impl;

import com.example.fgpt_backend.dto.DatesDTo;
import com.example.fgpt_backend.dto.ReportDTo;
import com.example.fgpt_backend.dto.UsersDTo;
import com.example.fgpt_backend.entity.DatesEntity;
import com.example.fgpt_backend.entity.ReportEntity;
import com.example.fgpt_backend.exception.ResourceNotFoundException;
import com.example.fgpt_backend.mapper.DatesMapper;
import com.example.fgpt_backend.mapper.ReportMapper;
import com.example.fgpt_backend.repository.DatesRepository;
import com.example.fgpt_backend.repository.ReportRepository;
import com.example.fgpt_backend.service.DatesService;
import com.example.fgpt_backend.service.ReportService;
import com.example.fgpt_backend.service.UsersService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class DatesServiceImpl implements DatesService {

//    private ReportRepository reportRepository;
    private DatesRepository datesRepository;

    private UsersService usersService;

    @Override
    public DatesDTo createPatient(DatesDTo datesDTo, Long id) {

        UsersDTo user = usersService.getPatientById(id);
        DatesEntity patient = DatesMapper.mapToPatient(datesDTo);
        DatesEntity savedPatient = datesRepository.save(patient);

        user.getDates().add(savedPatient);
        usersService.updatePatient(user.getId(), user);

        return DatesMapper.mapToPatientDto(savedPatient);
    }

    @Override
    public DatesDTo getPatientById(Long patientId) {
        DatesEntity patient = datesRepository.findById(patientId)
                .orElseThrow(() -> new ResourceNotFoundException("Patient does not exists with given Id: " + patientId));
        return DatesMapper.mapToPatientDto(patient);
    }

    @Override
    public List<DatesDTo> getAllPatients() {

        List<DatesEntity> patients = datesRepository.findAll();
        return patients.stream().map((patient) -> DatesMapper.mapToPatientDto(patient))
                .collect(Collectors.toList());
    }

    @Override
    public DatesDTo updatePatient(Long patientId, DatesDTo updatedPatient) {
        DatesEntity patient = datesRepository.findById(patientId).orElseThrow(
                () -> new ResourceNotFoundException("Patient does not exists with given Id: " + patientId));

//        patient.setUserId(updatedPatient.getUserId());
        patient.setPeriodStart(updatedPatient.getPeriodStart());
        patient.setPeriodEnd(updatedPatient.getPeriodEnd());

        DatesEntity updatedPatientObj = datesRepository.save(patient);
        return DatesMapper.mapToPatientDto(updatedPatientObj);
    }

    @Override
    public void deletePatient(Long patientId) {
//        Patient patient = patientRepository.findById(patientId).orElseThrow(
//                () -> new ResourceNotFoundException("Patient does not exists with given Id: " + patientId));
        datesRepository.deleteById(patientId);
    }
}
