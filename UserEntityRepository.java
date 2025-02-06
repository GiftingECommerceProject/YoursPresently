package com.app.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.UserEntity;

public interface UserEntityRepository extends JpaRepository<UserEntity, Long> {
//load use details by user name(email)
	Optional<UserEntity> findByEmail(String email);
	boolean existsByEmail(String email);
	
	
}
