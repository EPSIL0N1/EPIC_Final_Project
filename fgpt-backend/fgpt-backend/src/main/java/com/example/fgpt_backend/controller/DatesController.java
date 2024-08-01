package com.example.fgpt_backend.controller;

import com.example.fgpt_backend.dto.DatesDTo;
import com.example.fgpt_backend.dto.ReportDTo;
import com.example.fgpt_backend.dto.UsersDTo;
import com.example.fgpt_backend.entity.DatesEntity;
import com.example.fgpt_backend.entity.UserEntity;
import com.example.fgpt_backend.service.DatesService;
import com.example.fgpt_backend.service.ReportService;
import com.example.fgpt_backend.service.UsersService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/period_dates")
public class DatesController {

    private DatesService datesService;
    private UsersService usersService;

    // Create Date
    @PostMapping("/user/{id}")
    public ResponseEntity<DatesDTo> createPatient(@RequestBody DatesDTo patientDto, @PathVariable("id") Long id)
    {
//        UsersDTo user = usersService.getPatientById(id);
        DatesDTo savedPatient = datesService.createPatient(patientDto, id);
        return new ResponseEntity<>(savedPatient, HttpStatus.CREATED);
    }

    // Get Date By UserId
    @GetMapping("/user/{id}")
    public ResponseEntity<?> getPatientById(@PathVariable("id") Long patientId)
    {
        UsersDTo user = usersService.getPatientById(patientId);
//        DatesDTo patientDto = datesService.getPatientById(patientId);
        List<DatesEntity> all = user.getDates();
        return new ResponseEntity<>(all, HttpStatus.OK);
    }

    // Get All Patients
    @GetMapping("{userId}")
    public ResponseEntity<?> getAllPatients(@PathVariable Long userId)
    {
        List<DatesDTo> patients = datesService.getAllPatients();
        return ResponseEntity.ok(patients);
    }

    // Edit By ID
    @PutMapping("/user/{userId}/{dateId}")
    public ResponseEntity<DatesDTo> updatePatient(@PathVariable("dateId") Long patientId, @RequestBody DatesDTo updatedPatient, @PathVariable("userId") Long userId)
    {
        DatesDTo patientDto = datesService.updatePatient(patientId, updatedPatient);
        return ResponseEntity.ok(patientDto);
    }

    // Delete By Id
    @DeleteMapping("{id}")
    public ResponseEntity<?> deletePatient(@PathVariable("id") Long patientId)
    {
        datesService.deletePatient(patientId);
        return ResponseEntity.ok("Date Deleted Successfully");
    }
}
