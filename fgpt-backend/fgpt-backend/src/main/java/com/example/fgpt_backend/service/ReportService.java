package com.example.fgpt_backend.service;

import com.example.fgpt_backend.dto.ReportDTo;

import java.util.List;

public interface ReportService {
    ReportDTo createPatient(ReportDTo patientDto, Long id);

    ReportDTo getPatientById(Long patientId);

    List<ReportDTo> getAllPatients();

    ReportDTo updatePatient(Long patientId, ReportDTo updatedPatient);

    void deletePatient(Long patientId);
}
