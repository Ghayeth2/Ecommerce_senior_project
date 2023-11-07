package com.auction.app.model.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Table(name = "districts") @Entity @Data
@NoArgsConstructor @Builder
@AllArgsConstructor
public class District extends BaseEntity {
    @Column(nullable = false, length = 40)
    private String name;

    @ManyToOne @JoinColumn(name = "fk_city") @JsonIgnore
    private City city;

    @OneToMany(mappedBy = "district", cascade = CascadeType.ALL)
    private List<Address> addresses;
}
