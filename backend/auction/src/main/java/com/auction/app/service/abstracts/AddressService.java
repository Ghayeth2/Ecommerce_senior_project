package com.auction.app.service.abstracts;

import com.auction.app.core.utils.results.DataResult;
import com.auction.app.core.utils.results.Result;
import com.auction.app.model.dtos.AddressDto;
import com.auction.app.model.dtos.CountryDto;

import java.util.List;

public interface AddressService {
    DataResult<List<AddressDto>> addresses();
    Result save(AddressDto addressDto);
    Result update(AddressDto addressDto, Long id);
    Result delete(Long id);
    DataResult<AddressDto> findAddressById(Long id);
}
