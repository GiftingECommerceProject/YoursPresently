package com.codekul.codekulECommerece.service.interf;

import com.codekul.codekulECommerece.dto.LoginRequest;
import com.codekul.codekulECommerece.dto.Response;
import com.codekul.codekulECommerece.dto.UserDto;
import com.codekul.codekulECommerece.entity.User;

public interface UserService {
    Response registerUser(UserDto registrationRequest);
    Response loginUser(LoginRequest loginRequest);
    Response getAllUsers();
    User getLoginUser();
    Response getUserInfoAndOrderHistory();
}
