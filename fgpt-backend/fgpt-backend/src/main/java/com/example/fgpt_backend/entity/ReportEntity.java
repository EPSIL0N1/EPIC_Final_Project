package com.example.fgpt_backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Report")
public class ReportEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private Integer CycleWithPeakorNot; // Yes or No -> 0 / 1

    @Column
    private Integer ReproductiveCategory; // 1 -> Reproductive 2 -> Post-reproductive 3 -> Pre Reproductive

    @Column
    private Integer LengthofCycle; // 0 - 30 (range)

    @Column
    private Integer EstimatedDayofOvulation; // 0-30 range

    @Column
    private Integer LengthofLutealPhase; // 0-30 range ---by cal

    @Column
    private Integer FirstDayofHigh; // 0-30 range

    @Column
    private Integer TotalHighPostPeak; // 0-30

    @Column
    private Integer TotalNumberofPeakDays; // 0 - 30 ---by cal

    @Column
    private Integer LengthofMenses; // 0 - 30

    @Column
    private Integer TotalMensesScore; // 0 - 30 ---by cal

    @Column
    private Float MeanBleedingIntensity; // 0 - 30 ---by cal

    @Column
    private Integer IntercourseInFertility; // yes or no -> 0 / 1 (within last period cycle)

    @Column
    private Integer UnusualBleeding; // yes or no -> 0 / 1

    @Column
    private Integer Age; // int

    @Column
    private Integer Height; // int

    @Column
    private Integer Weight; // int

    @Column
    private Integer Numberpreg; // yes / no -> 0 / 1

    @Column
    private Integer Miscarriages; // yes no -> 0 / 1

    @Column
    private Integer Medvits; // yes or no -> 0 / 1

    @Column
    private Integer Gynosurgeries; // yes no

    @Column
    private Integer Urosurgeries; // yes no

}



