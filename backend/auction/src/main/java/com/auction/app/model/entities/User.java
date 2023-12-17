package com.auction.app.model.entities;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;

import java.util.List;

@Entity @Data @Builder
@NoArgsConstructor
@Table(name = "users")
@AllArgsConstructor
public class User extends BaseEntity {
    @NotEmpty @NotNull @Length(max = 30,
    message = "Length should not exceed 30 characters")
    private String firstName;
    @NotNull @NotEmpty @Length(max = 30,
    message = "Length should not exceed 30 characters")
    private String lastName;
    @NotNull @NotEmpty
    @Email
    private String email;

    private String password;
    private String phoneNumber;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Address> addresses;

}
