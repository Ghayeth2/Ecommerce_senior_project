package com.auction.app.model.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity @Data @Builder
@Table(name = "addresses")
@NoArgsConstructor
@AllArgsConstructor
public class Address extends BaseEntity{
    @Column(length = 50)
    private String street;
    private String postalCode;
    @Column(length = 15, nullable = false)
    private String type;
    @Column(nullable = false)
    private String address;
    @ManyToOne @JoinColumn(name = "fk_district") @JsonIgnore
    private District district;

    @ManyToOne @JoinColumn(name = "fk_user") @JsonIgnore
    private User user;


}
