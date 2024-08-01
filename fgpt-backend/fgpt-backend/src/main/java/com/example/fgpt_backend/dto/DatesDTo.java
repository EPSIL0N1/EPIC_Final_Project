package com.example.fgpt_backend.dto;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DatesDTo {
    private Long id;
//    private Long userId;
    private Date periodStart;
    private Date periodEnd;
}