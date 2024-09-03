package com.myShared.backend.controller.exception;

import com.myShared.backend.utils.ErrorResponse;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpStatus;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.servlet.resource.NoResourceFoundException;

@Order(Ordered.HIGHEST_PRECEDENCE + 1)
@ControllerAdvice
public class GlobalAPIExceptionHandler {

    @ExceptionHandler(HttpMessageNotReadableException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ResponseBody
    private ErrorResponse handleHttpMessageNotReadableException(HttpMessageNotReadableException exception) {
        return buildErrorResponse(exception, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(NoResourceFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    @ResponseBody
    private ErrorResponse handleNoResourceFoundException(NoResourceFoundException exception) {
        return buildErrorResponse(exception, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(HttpRequestMethodNotSupportedException.class)
    @ResponseStatus(HttpStatus.METHOD_NOT_ALLOWED)
    @ResponseBody
    private ErrorResponse handleHttpRequestMethodNotSupportedException(HttpRequestMethodNotSupportedException exception) {
        return buildErrorResponse(exception, HttpStatus.METHOD_NOT_ALLOWED);
    }

    @ExceptionHandler(AccessDeniedException.class)
    @ResponseStatus(HttpStatus.FORBIDDEN)
    @ResponseBody
    private ErrorResponse handleAccessDeniedException(AccessDeniedException exception) {
        return buildErrorResponse(exception, HttpStatus.FORBIDDEN);
    }


    private ErrorResponse buildErrorResponse(Exception exception, HttpStatus httpStatus) {
        return ErrorResponse.builder()
                .title(exception.getClass().getSimpleName())
                .code(httpStatus.toString())
                .details(exception.getMessage())
                .build();
    }
}
