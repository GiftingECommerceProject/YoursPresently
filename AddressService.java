package com.codekul.codekulECommerece.service.interf;

import com.codekul.codekulECommerece.dto.AddressDto;
import com.codekul.codekulECommerece.dto.Response;

public interface AddressService {
    Response saveAndUpdateAddress(AddressDto addressDto);
}
