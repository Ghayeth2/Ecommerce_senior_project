package com.auction.app.core.controllerAdvisors;

import com.auction.app.core.utils.results.DataResult;
import com.auction.app.core.utils.results.FailureDataResult;
import org.springframework.http.HttpStatus;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

@RestControllerAdvice
public class ValidationExceptionAdvisor {
    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public DataResult<Object> handleValidationException
            (MethodArgumentNotValidException exceptions){
        Map<String ,String > validationErrors = new HashMap<>();
        exceptions.getBindingResult().getFieldErrors().stream().map(fieldError -> {
            validationErrors.put(fieldError.getField(), fieldError.getDefaultMessage());
            return validationErrors;
        }).collect(Collectors.toList());
        return new FailureDataResult<>("Invalid input",validationErrors);
    }
}
