package com.app.service;

import com.app.dto.ApiResponse;
import com.app.dto.UserDTO;
import com.app.pojos.UserEntity;

public interface UserService {
	ApiResponse registerNewUser(UserDTO dto);

//	ApiResponse getUserInfoAndOrderHistory();
//	
//	UserEntity getLoginUser();

	UserEntity getUserByEmail(String email);
	

}
