package com.example.fgpt_backend.repository;

import com.example.fgpt_backend.entity.DatesEntity;
import com.example.fgpt_backend.entity.ReportEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DatesRepository extends JpaRepository<DatesEntity, Long> {

}
