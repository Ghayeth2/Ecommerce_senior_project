package com.auction.app.service.concretes;

import com.auction.app.core.utils.results.DataResult;
import com.auction.app.core.utils.results.Result;
import com.auction.app.model.dtos.AddressDto;
import com.auction.app.service.abstracts.AddressService;

import java.util.List;

public class AddressManager implements AddressService {
    @Override
    public DataResult<List<AddressDto>> addresses() {
        return null;
    }

    @Override
    public Result save(AddressDto addressDto) {
        return null;
    }

    @Override
    public Result update(AddressDto addressDto, Long id) {
        return null;
    }

    @Override
    public Result delete(Long id) {
        return null;
    }

    @Override
    public DataResult<AddressDto> findAddressById(Long id) {
        return null;
    }
}
