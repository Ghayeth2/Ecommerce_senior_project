package com.auction.app.core.controllerAdvisors;

import com.auction.app.core.exceptions.AppException;
import com.auction.app.model.dtos.ErrorDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

@ControllerAdvice
public class AppExceptionAdvisor {
    @ExceptionHandler(value = AppException.class)
    @ResponseBody
    public ResponseEntity<ErrorDto> handleAppError(AppException ex){
        return ResponseEntity.status(ex.getCode())
                .body(ErrorDto.builder().message(ex.getMessage()).build());
    }
}
