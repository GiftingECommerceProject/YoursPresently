package com.app.pojos;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="products")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Product extends BaseEntity {
	@Column(name = "product_name", length = 20, nullable = false) 
	private String productName;

	@Column(name = "product_description", length = 500) 
	private String productDescription;
	
	@Enumerated(EnumType.STRING)
	private Category category;
	
	private double price;
	
	private int quantity;
	
//	@OneToMany(mappedBy = "product", cascade = CascadeType.ALL, orphanRemoval = true)
//	private List<Reviews> reviews = new ArrayList<>();
	
	
}
