package com.example.fgpt_backend.service.impl;

import com.example.fgpt_backend.dto.ReportDTo;
import com.example.fgpt_backend.dto.UsersDTo;
import com.example.fgpt_backend.entity.ReportEntity;
import com.example.fgpt_backend.exception.ResourceNotFoundException;
import com.example.fgpt_backend.mapper.ReportMapper;
import com.example.fgpt_backend.repository.ReportRepository;
import com.example.fgpt_backend.service.ReportService;
import com.example.fgpt_backend.service.UsersService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class ReportServiceImpl implements ReportService {

    private ReportRepository reportRepository;
    private UsersService usersService;

    @Override
    public ReportDTo createPatient(ReportDTo reportDTo, Long id) {

        UsersDTo user = usersService.getPatientById(id);
        ReportEntity patient = ReportMapper.mapToPatient(reportDTo);
        ReportEntity savedPatient = reportRepository.save(patient);

        user.getReport().add(savedPatient);
        usersService.updatePatient(user.getId(), user);
        return ReportMapper.mapToPatientDto(savedPatient);
    }

    @Override
    public ReportDTo getPatientById(Long patientId) {
        ReportEntity patient = reportRepository.findById(patientId)
                .orElseThrow(() -> new ResourceNotFoundException("Patient does not exists with given Id: " + patientId));
        return ReportMapper.mapToPatientDto(patient);
    }

    @Override
    public List<ReportDTo> getAllPatients() {

        List<ReportEntity> patients = reportRepository.findAll();
        return patients.stream().map((patient) -> ReportMapper.mapToPatientDto(patient))
                .collect(Collectors.toList());
    }

    @Override
    public ReportDTo updatePatient(Long patientId, ReportDTo updatedPatient) {
        ReportEntity patient = reportRepository.findById(patientId).orElseThrow(
                () -> new ResourceNotFoundException("Patient does not exists with given Id: " + patientId));

//        patient.setUserId(updatedPatient.getUserId());
        patient.setCycleWithPeakorNot(updatedPatient.getCycleWithPeakorNot());
        patient.setReproductiveCategory(updatedPatient.getReproductiveCategory());
        patient.setAge(updatedPatient.getAge());
        patient.setHeight(updatedPatient.getHeight());
        patient.setGynosurgeries(updatedPatient.getGynosurgeries());
        patient.setEstimatedDayofOvulation(updatedPatient.getEstimatedDayofOvulation());
        patient.setFirstDayofHigh(updatedPatient.getFirstDayofHigh());
        patient.setLengthofMenses(updatedPatient.getLengthofMenses());
        patient.setMeanBleedingIntensity(updatedPatient.getMeanBleedingIntensity());
        patient.setLengthofLutealPhase(updatedPatient.getLengthofLutealPhase());
        patient.setMiscarriages(updatedPatient.getMiscarriages());
        patient.setTotalNumberofPeakDays(updatedPatient.getTotalNumberofPeakDays());
        patient.setNumberpreg(updatedPatient.getNumberpreg());
        patient.setWeight(updatedPatient.getWeight());
        patient.setIntercourseInFertility(updatedPatient.getIntercourseInFertility());

        patient.setTotalHighPostPeak(updatedPatient.getTotalHighPostPeak());
        patient.setUnusualBleeding(updatedPatient.getUnusualBleeding());
        patient.setTotalMensesScore(updatedPatient.getTotalMensesScore());
        patient.setLengthofCycle(updatedPatient.getLengthofCycle());
        patient.setMedvits(updatedPatient.getMedvits());
        patient.setUrosurgeries(updatedPatient.getUrosurgeries());

        ReportEntity updatedPatientObj = reportRepository.save(patient);
        return ReportMapper.mapToPatientDto(updatedPatientObj);
    }

    @Override
    public void deletePatient(Long patientId) {
//        Patient patient = patientRepository.findById(patientId).orElseThrow(
//                () -> new ResourceNotFoundException("Patient does not exists with given Id: " + patientId));
        reportRepository.deleteById(patientId);
    }
}
