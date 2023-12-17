package com.auction.app.model.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity @Data @Table(name = "countries")
@NoArgsConstructor @Builder
@AllArgsConstructor
public class Country extends BaseEntity {
    @Column(nullable = false, length = 40)
    private String name;

    @OneToMany(mappedBy = "country", cascade = CascadeType.ALL)
    private List<City> cities;
}
