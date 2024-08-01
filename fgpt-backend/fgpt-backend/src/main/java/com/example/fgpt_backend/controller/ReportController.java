package com.example.fgpt_backend.controller;

import com.example.fgpt_backend.dto.ReportDTo;
import com.example.fgpt_backend.dto.UsersDTo;
import com.example.fgpt_backend.entity.ReportEntity;
import com.example.fgpt_backend.entity.UserEntity;
import com.example.fgpt_backend.service.ReportService;
import com.example.fgpt_backend.service.UsersService;
import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/reports")
public class ReportController {

    private ReportService reportService;
    private UsersService usersService;

    // Create Patient Report by Id
    @PostMapping("/user/{id}")
    public ResponseEntity<ReportDTo> createPatient(@RequestBody ReportDTo patientDto, @PathVariable("id") Long userId)
    {
        ReportDTo savedPatient = reportService.createPatient(patientDto, userId);
        return new ResponseEntity<>(savedPatient, HttpStatus.CREATED);
    }

    // Get Patient By Id
    @GetMapping("/user/{userId}")
    public ResponseEntity<?> getPatientById(@PathVariable("userId") Long userId)
    {
        UsersDTo user = usersService.getPatientById(userId);
        List<ReportEntity> patientDto = user.getReport();
        return new ResponseEntity<>(patientDto, HttpStatus.OK);
    }

    // Get All Patients
    @GetMapping
    public ResponseEntity<?> getAllPatients()
    {
        List<ReportDTo> patients = reportService.getAllPatients();
        return ResponseEntity.ok(patients);
    }

    // Edit By ID
    @PutMapping("{id}")
    public ResponseEntity<ReportDTo> updatePatient(@PathVariable("id") Long patientId, @RequestBody ReportDTo updatedPatient)
    {
        ReportDTo patientDto = reportService.updatePatient(patientId, updatedPatient);
        return ResponseEntity.ok(patientDto);
    }

    // Delete By Id
    @DeleteMapping("{id}")
    public ResponseEntity<?> deletePatient(@PathVariable("id") Long patientId)
    {
        reportService.deletePatient(patientId);
        return ResponseEntity.ok("Report Deleted Successfully");
    }

//    @GetMapping("/user/{userId}")
//    public ResponseEntity<?> getReport(@PathVariable Float userId)
//    {
//        UserEntity user =
//    }
}
