package com.example.fgpt_backend.service;

import com.example.fgpt_backend.dto.DatesDTo;
import com.example.fgpt_backend.dto.ReportDTo;
import com.example.fgpt_backend.dto.UsersDTo;

import java.util.List;

public interface DatesService {
    DatesDTo createPatient(DatesDTo datesDTo, Long id);

    DatesDTo getPatientById(Long patientId);

    List<DatesDTo> getAllPatients();

    DatesDTo updatePatient(Long patientId, DatesDTo updatedPatient);

    void deletePatient(Long patientId);
}
