package com.auction.app.model.dtos.requests;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;

import java.util.List;
import java.util.Set;

@Data @NoArgsConstructor
@AllArgsConstructor
@Builder
public class SignupRequest {
    @NotBlank(message = "First name is required!")
    @Length(max = 30, message = "First name should not exceed 30 character")
    private String firstName;
    @NotBlank(message = "Last name is required!")
    @Length(max = 30, message = "Last name should not exceed 30 character")
    private String lastName;
    @Email(message = "Please, enter email formatted text")
    @NotBlank(message = "Email is required!")
    private String email;
    private String phoneNumber;
    @NotBlank(message = "Password field is required!")
    private String password;
    private List<String> roles;
}
