package com.app.dto;

import java.time.LocalDate;
import java.util.List;

import com.app.pojos.OrderItem;
import com.app.pojos.UserRole;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Past;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString(exclude = "orderItemList")
public class UserDTO {
	
	@NotBlank
	private String userName;
	
	@NotBlank
	private String firstName;
	
	private String lastName;
	
	@Email
	private String email;
	
	@NotBlank
	private String password;

	@NotBlank
	private String address;
	
	@NotNull
	@Past
	private LocalDate dob;
	
	@NotNull
	private UserRole role;

	@NotNull
	private String phone;	
	
	private List<OrderItemDTO> orderItemList;
		
	
}
