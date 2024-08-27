package com.myShared.backend.services.exception;

import org.apache.commons.lang3.StringUtils;

public abstract class StandardApplicationException extends RuntimeException {

    protected StandardApplicationException(String message) {
        super(message);
    }

    @Override
    public String getMessage() {
        String message = super.getMessage();
        return StringUtils.isNotBlank(message) ? message : this.getDefaultMessage();
    }

    public abstract String getDefaultMessage();

    public abstract String getDefaultMessageKey();
}
