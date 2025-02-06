package com.app.pojos;

import java.time.LocalDate;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@Entity 
@Table(name = "users")
@NoArgsConstructor
@Getter
@Setter
@ToString(callSuper = true, exclude = { "password"})

public class UserEntity extends BaseEntity {

	@Column(name = "user_name", unique = true, length = 20) // column name , varchar(20)
	private String userName;

	@Column(length = 25, unique = true) // adds unique constraint
	private String email;
	
	@Column(length = 500, nullable = false) // not null constraint
	private String password;

	@Column(name = "first_name", length = 20) // column name , varchar(20)
	private String firstName;
	
	@Column(name = "last_name", length = 20) // column name , varchar(20)
	private String lastName;	
	
	private LocalDate dob;
	
	@Column(length = 500, nullable = false) // not null constraint
	private String address;
	
	@Column(length = 10, nullable = false) // not null constraint
	private String phone;	
	
	@Enumerated(EnumType.STRING) // create column of type
	// varchar to store the name of constant
	@Column(length = 30) // varchar(30)
	private UserRole role;
	
	@OneToMany(mappedBy = "user", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private List<OrderItem> orderItemList;
	
//	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
//	private List<Reviews> reviews = new ArrayList<>();
		
}
