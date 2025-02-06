package com.app.dto;


import com.app.pojos.Category;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProductDTO extends BaseDTO {
	@NotEmpty
	private String productName;	
	@NotNull
	private Category category;
	
	private String productDescription;
	private double price;
	private int quantity;
	

}
