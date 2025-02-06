package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AuthRequest;
import com.app.dto.AuthResp;
import com.app.dto.UserDTO;
import com.app.pojos.UserEntity;
import com.app.security.JwtUtils;
import com.app.service.UserService;

import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
	//depcy
	@Autowired
	private UserService userService;
	@Autowired
	private AuthenticationManager authenticationManager;
	@Autowired
	private JwtUtils jwtUtils;
	/*
	 * Desc - user sign up
	 * URL - http://host:port/users/signup
	 * Method - POST
	 * Payload - user req dto
	 * Success resp - Api resp
	 * err - Api resp err mesg
	 */
	@PostMapping("/signup")
	@Operation(description = "User signup")
	public ResponseEntity<?> registerUser(@RequestBody @Valid UserDTO dto) {
		System.out.println("register user "+dto);
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(userService.registerNewUser(dto));
		
	}
	/*
	 * Desc - user sign in
	 * URL - http://host:port/users/signin
	 * Method - POST
	 * Payload - auth req dto
	 * Success resp -Auth Resp DTO - mesg + JWT
	 * err - Api resp err mesg
	 */
	@PostMapping("/signin")
	@Operation(description = "User sign in")
	public ResponseEntity<?> userSignIn(@RequestBody @Valid
			AuthRequest dto) {
		System.out.println("in sign in "+dto);
		//1. Create auth token using user supplied em n pwd
		UsernamePasswordAuthenticationToken 
		authenticationToken = new UsernamePasswordAuthenticationToken
		(dto.getEmail(),dto.getPassword());
		System.out.println(authenticationToken.isAuthenticated());//f
		//2. invoke Spring sec supplied auth mgr's authenticate method
		Authentication authToken = 
				authenticationManager.authenticate(authenticationToken);
		//=> auth success
		System.out.println(authToken.isAuthenticated());//t
		//3 . Send auth respone to the client containing JWTS
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(new AuthResp("Successful Auth !",
						jwtUtils.generateJwtToken(authToken)));		
		
	}
	
//	@GetMapping("/my-info")
//    public ResponseEntity<?> getUserInfoAndOrderHistory(){
//        return ResponseEntity.ok(userService.getUserInfoAndOrderHistory());
//    }
	
	 	@GetMapping("/my-info")
	    public ResponseEntity<?> getUserProfile(Authentication authentication) {
	        // The authenticated principal typically holds the username or user ID
	        String username = authentication.getName();
	        System.out.println("Extracted username: " + username);
	        UserEntity userDetails = userService.getUserByEmail(username);
	        
	        // Return user details as JSON
	        return ResponseEntity.ok(userDetails);
	    }
	

}
