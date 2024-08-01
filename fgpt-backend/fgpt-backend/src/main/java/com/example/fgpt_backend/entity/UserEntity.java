package com.example.fgpt_backend.entity;

import jakarta.persistence.*;
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
@Entity
@Table(name = "Users")
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_name", nullable = false)
    private String userName;

    @Column(name = "user_password", nullable = false)
    private String password ;

    @OneToMany(cascade =  CascadeType.ALL)
    @JoinColumn(name = "report_table", referencedColumnName = "id")
    private List<ReportEntity> report;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "period_date", referencedColumnName = "id")
    private List<DatesEntity> dates;

}



