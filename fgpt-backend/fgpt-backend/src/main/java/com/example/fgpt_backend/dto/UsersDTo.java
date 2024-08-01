package com.example.fgpt_backend.dto;

import com.example.fgpt_backend.entity.DatesEntity;
import com.example.fgpt_backend.entity.ReportEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UsersDTo {
    private Long id;
    private String userName;
    private String password ;
    private List<ReportEntity> report;
    private List<DatesEntity> dates;
}