package com.codekul.codekulECommerece.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.codekul.codekulECommerece.entity.Payment;
import lombok.Data;

import java.math.BigDecimal;
import java.util.List;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class OrderRequest {

    private BigDecimal totalPrice;
    private List<OrderItemRequest> items;
    private Payment paymentInfo;
}

//to handle cart functionality

