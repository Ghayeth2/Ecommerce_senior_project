package com.auction.app.core.controllerAdvisors;

import org.springframework.http.HttpStatus;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

@ControllerAdvice
public class ValidationExceptionAdvisor {
    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ResponseBody
    public Object handleValidationException
            (MethodArgumentNotValidException exceptions){
        Map<String ,String > validationErrors = new HashMap<>();
        exceptions.getBindingResult().getFieldErrors().stream().map(fieldError -> {
            validationErrors.put(fieldError.getField(), fieldError.getDefaultMessage());
            return validationErrors;
        }).collect(Collectors.toList());
        return validationErrors;
    }
}
