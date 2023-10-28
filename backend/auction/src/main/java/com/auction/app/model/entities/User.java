package com.auction.app.model.entities;

import jakarta.persistence.Entity;
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

@Entity @Data @Builder
@NoArgsConstructor
@Table(name = "users")
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
//    @NotNull @NotEmpty @NotBlank
    private String password;
    private String phoneNumber;

    public User(String firstName, String lastName, String email, String password, String phoneNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
    }
}
