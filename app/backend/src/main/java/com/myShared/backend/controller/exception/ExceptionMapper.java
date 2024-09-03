package com.myShared.backend.controller.exception;

import com.myShared.backend.services.exception.EntityNotFoundException;
import com.myShared.backend.services.exception.StandardApplicationException;
import com.myShared.backend.utils.ErrorResponse;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@Order(Ordered.HIGHEST_PRECEDENCE)
@ControllerAdvice
public class ExceptionMapper {

    @ExceptionHandler(EntityNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    @ResponseBody
    public ErrorResponse mapStandardExceptionWithNotFound(StandardApplicationException exception) {
        return buildErrorResponse(HttpStatus.NOT_FOUND, exception);
    }

    private ErrorResponse buildErrorResponse(HttpStatus httpStatus, StandardApplicationException exception) {
        return ErrorResponse.builder()
                .code(httpStatus.toString())
                .message(exception.getDefaultMessage())
                .details(exception.getMessage())
                .messageCode(exception.getDefaultMessageKey())
                .build();
    }
}
