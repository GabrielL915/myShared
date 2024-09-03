package com.myShared.backend.services.exception;

import java.util.function.Supplier;

public class EntityNotFoundException extends StandardApplicationException {

    private static final String DEFAULT_MESSAGE = "Unable to find entity.";

    private static final String DEFAULT_MESSAGE_KEY = "my-shared.entity-not-found.error";

    public EntityNotFoundException(Object id) {
        super(String.format("Entity %s not found", id));
    }

    @Override
    public String getDefaultMessage() {
        return DEFAULT_MESSAGE;
    }

    @Override
    public String getDefaultMessageKey() {
        return DEFAULT_MESSAGE_KEY;
    }
}
