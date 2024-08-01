package com.example.fgpt_backend.mapper;

import com.example.fgpt_backend.dto.DatesDTo;
import com.example.fgpt_backend.dto.ReportDTo;
import com.example.fgpt_backend.entity.DatesEntity;
import com.example.fgpt_backend.entity.ReportEntity;

public class DatesMapper {

    public static DatesDTo mapToPatientDto(DatesEntity datesEntity)
    {
        return new DatesDTo(
                datesEntity.getId(),
//                datesEntity.getUserId(),
                datesEntity.getPeriodStart(),
                datesEntity.getPeriodEnd()
        );
    }

    public static DatesEntity mapToPatient(DatesDTo datesDTo)
    {
        return new DatesEntity(
                datesDTo.getId(),
//                datesDTo.getUserId(),
                datesDTo.getPeriodStart(),
                datesDTo.getPeriodEnd()
        );
    }

}
