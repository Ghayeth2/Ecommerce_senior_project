package com.auction.app.model.dtos;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;

@Data @NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserDto {
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
    private String password;
}
