package com.example.fgpt_backend.dto;

import com.example.fgpt_backend.entity.UserEntity;
import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ReportDTo {

    private Long id;
//    private UserEntity user;
    private Integer CycleWithPeakorNot;
    private Integer ReproductiveCategory;
    private Integer LengthofCycle;
    private Integer EstimatedDayofOvulation;
    private Integer LengthofLutealPhase;
    private Integer FirstDayofHigh;
    private Integer TotalHighPostPeak;
    private Integer TotalNumberofPeakDays;
    private Integer LengthofMenses;
    private Integer TotalMensesScore;
    private Float MeanBleedingIntensity;
    private Integer IntercourseInFertility;
    private Integer UnusualBleeding;
    private Integer Age;
    private Integer Height;
    private Integer Weight;
    private Integer Numberpreg;
    private Integer Miscarriages;
    private Integer Medvits;
    private Integer Gynosurgeries;
    private Integer Urosurgeries;
}