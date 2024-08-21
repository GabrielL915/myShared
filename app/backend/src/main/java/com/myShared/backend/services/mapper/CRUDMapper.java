package com.myShared.backend.services.mapper;

public interface CRUDMapper<T, D> {

    D toDTO(T entity);

    T toEntity(D dto);
}
