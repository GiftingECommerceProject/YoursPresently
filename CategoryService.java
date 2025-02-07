package com.codekul.codekulECommerece.service.interf;

import com.codekul.codekulECommerece.dto.CategoryDto;
import com.codekul.codekulECommerece.dto.Response;

public interface CategoryService {

    Response createCategory(CategoryDto categoryRequest);
    Response updateCategory(Long categoryId, CategoryDto categoryRequest);
    Response getAllCategories();
    Response getCategoryById(Long categoryId);
    Response deleteCategory(Long categoryId);
}
