package com.auction.app.model.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity @Data @AllArgsConstructor
@NoArgsConstructor
@Table(name = "users") @Builder
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

    @NotBlank
    private String password;
    private String phoneNumber;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Address> addresses;

//    @ManyToMany(fetch = FetchType.LAZY)
//    @JoinTable(  name = "user_roles",
//            joinColumns = @JoinColumn(name = "user_id"),
//            inverseJoinColumns = @JoinColumn(name = "role_id"))
//    private List<Role> roles;


}
