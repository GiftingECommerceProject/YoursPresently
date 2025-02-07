package com.codekul.codekulECommerece.repository;

import com.codekul.codekulECommerece.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepo extends JpaRepository<Category, Long> {
}
