package com.auction.app.model.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.databind.ser.Serializers;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data @Entity @Table(name = "cities")
@NoArgsConstructor @Builder
@AllArgsConstructor
public class City extends BaseEntity {
    @Column(nullable = false, length = 40)
    private String name;
    @ManyToOne @JoinColumn(name = "fk_country") @JsonIgnore
    private Country country;
    @OneToMany(mappedBy = "city", cascade = CascadeType.ALL)
    private List<District> districts;
}
