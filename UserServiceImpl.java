package com.app.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exceptions.ApiException;
import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.ApiResponse;
import com.app.dto.UserDTO;
import com.app.pojos.UserEntity;
import com.app.repository.UserEntityRepository;

@Service
@Transactional
public class UserServiceImpl implements UserService {
	// depcy - dao
	@Autowired
	private UserEntityRepository userEntityRepository;
	// model mapper
	@Autowired
	private ModelMapper modelMapper;
	//pwd encoder
	@Autowired
	private PasswordEncoder passwordEncoder;

	@Override
	public ApiResponse registerNewUser(UserDTO dto) {
		// chk if user alrdy exists
		if (userEntityRepository.existsByEmail(dto.getEmail()))
			throw new ApiException("User email already exists!!!!");
		// map dto -> entity
		UserEntity userEntity = modelMapper.map(dto, UserEntity.class);
		userEntity.setPassword(passwordEncoder.encode(userEntity.getPassword()));
		UserEntity savedUser = userEntityRepository.save(userEntity);
		return new ApiResponse("User registered with ID " + savedUser.getId());
	}

//	@Override
//	public ApiResponse getUserInfoAndOrderHistory() {
//		UserEntity user = getLoginUser();
//		return null;
//	}
//
//	
//	public UserEntity getLoginUser() {
//		 Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
//	        String  email = authentication.getName();
//	        log.info("User Email is: " + email);
//	        return userEntityRepository.findByEmail(email)
//	                .orElseThrow(()-> new ResourceNotFoundException("User Not found"));	}

	@Override
	public UserEntity getUserByEmail(String email) {
		
		return userEntityRepository.findByEmail(email)
                .orElseThrow(()-> new ResourceNotFoundException("User Not found"));
	}

}
