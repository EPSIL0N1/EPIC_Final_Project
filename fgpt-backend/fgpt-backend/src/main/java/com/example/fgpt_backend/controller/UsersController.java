package com.example.fgpt_backend.controller;

import com.example.fgpt_backend.dto.DatesDTo;
import com.example.fgpt_backend.dto.UsersDTo;
import com.example.fgpt_backend.service.DatesService;
import com.example.fgpt_backend.service.UsersService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/users")
public class UsersController {

    private UsersService usersService;

    // Create Patient
    @PostMapping
    public ResponseEntity<UsersDTo> createPatient(@RequestBody UsersDTo patientDto)
    {
        UsersDTo savedPatient = usersService.createPatient(patientDto);
        return new ResponseEntity<>(savedPatient, HttpStatus.CREATED);
    }

    // Get Patient By Id
    @GetMapping("{id}")
    public ResponseEntity<UsersDTo> getPatientById(@PathVariable("id") Long patientId)
    {
        UsersDTo patientDto = usersService.getPatientById(patientId);
        return ResponseEntity.ok(patientDto);
    }

    // Get All Patients
    @GetMapping
    public ResponseEntity<?> getAllPatients()
    {
        List<UsersDTo> patients = usersService.getAllPatients();
        return ResponseEntity.ok(patients);
    }

    // Edit By ID
    @PutMapping("{id}")
    public ResponseEntity<UsersDTo> updatePatient(@PathVariable("id") Long patientId, @RequestBody UsersDTo updatedPatient)
    {
        UsersDTo patientDto = usersService.updatePatient(patientId, updatedPatient);
        return ResponseEntity.ok(patientDto);
    }

    // Delete By Id
    @DeleteMapping("{id}")
    public ResponseEntity<?> deletePatient(@PathVariable("id") Long patientId)
    {
        usersService.deletePatient(patientId);
        return ResponseEntity.ok("User Deleted Successfully");
    }


}
