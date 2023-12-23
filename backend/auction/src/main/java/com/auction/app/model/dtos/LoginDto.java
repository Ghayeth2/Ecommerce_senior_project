package com.auction.app.model.dtos;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @Builder @AllArgsConstructor
@NoArgsConstructor
public class LoginDto {
    @NotBlank(message = "This field is required!")
    @Email(message = "Please enter email formatted text.")
    private String email;
    @NotBlank(message = "This field is required!")
    private String password;
}
