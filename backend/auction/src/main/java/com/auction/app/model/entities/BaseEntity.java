package com.auction.app.model.entities;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.MappedSuperclass;
import lombok.Data;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;

import java.io.Serializable;
import java.util.Date;

@Data
@MappedSuperclass
public abstract class BaseEntity implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // After completing security section this will get activate
    // galleries addresses kullanarak


//    @CreatedBy
//    private String createdBy;
//    @CreatedDate
//    private Date createdDate;
//    @LastModifiedBy
//    private String updatedBy;
//    @LastModifiedDate
//    private Date updatedDate;
}
