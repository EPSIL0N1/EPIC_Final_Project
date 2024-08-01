package com.example.fgpt_backend.mapper;

import com.example.fgpt_backend.dto.ReportDTo;
import com.example.fgpt_backend.entity.ReportEntity;

public class ReportMapper {

    public static ReportDTo mapToPatientDto(ReportEntity reportEntity)
    {
        return new ReportDTo(
                reportEntity.getId(),
//                reportEntity.getUser(),
//                reportEntity.getUserId(),
                reportEntity.getCycleWithPeakorNot(),
                reportEntity.getReproductiveCategory(),
                reportEntity.getLengthofCycle(),
                reportEntity.getEstimatedDayofOvulation(),
                reportEntity.getLengthofLutealPhase(),
                reportEntity.getFirstDayofHigh(),
                reportEntity.getTotalHighPostPeak(),
                reportEntity.getTotalNumberofPeakDays(),
                reportEntity.getLengthofMenses(),
                reportEntity.getTotalMensesScore(),
                reportEntity.getMeanBleedingIntensity(),
                reportEntity.getIntercourseInFertility(),
                reportEntity.getUnusualBleeding(),
                reportEntity.getAge(),
                reportEntity.getHeight(),
                reportEntity.getWeight(),
                reportEntity.getNumberpreg(),
                reportEntity.getMiscarriages(),
                reportEntity.getMedvits(),
                reportEntity.getGynosurgeries(),
                reportEntity.getUrosurgeries()
        );
    }

    public static ReportEntity mapToPatient(ReportDTo reportDTo)
    {
        return new ReportEntity(
                reportDTo.getId(),
//                reportDTo.getUser(),
//                reportDTo.getUserId(),
                reportDTo.getCycleWithPeakorNot(),
                reportDTo.getReproductiveCategory(),
                reportDTo.getLengthofCycle(),
                reportDTo.getEstimatedDayofOvulation(),
                reportDTo.getLengthofLutealPhase(),
                reportDTo.getFirstDayofHigh(),
                reportDTo.getTotalHighPostPeak(),
                reportDTo.getTotalNumberofPeakDays(),
                reportDTo.getLengthofMenses(),
                reportDTo.getTotalMensesScore(),
                reportDTo.getMeanBleedingIntensity(),
                reportDTo.getIntercourseInFertility(),
                reportDTo.getUnusualBleeding(),
                reportDTo.getAge(),
                reportDTo.getHeight(),
                reportDTo.getWeight(),
                reportDTo.getNumberpreg(),
                reportDTo.getMiscarriages(),
                reportDTo.getMedvits(),
                reportDTo.getGynosurgeries(),
                reportDTo.getUrosurgeries()
        );
    }

}
