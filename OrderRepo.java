package com.codekul.codekulECommerece.repository;

import com.codekul.codekulECommerece.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepo extends JpaRepository<Order, Long> {
}
