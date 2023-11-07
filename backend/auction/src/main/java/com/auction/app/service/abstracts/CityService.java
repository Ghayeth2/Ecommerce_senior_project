package com.auction.app.service.abstracts;

import com.auction.app.core.utils.results.DataResult;
import com.auction.app.core.utils.results.Result;
import com.auction.app.model.dtos.CityDto;
import com.auction.app.model.dtos.UserDto;
import com.auction.app.model.dtos.UserDtoRegistration;

import java.util.List;

public interface CityService {
    DataResult<List<CityDto>> cities();
    Result save(CityDto cityDto);
    Result update(CityDto cityDto, Long id);
    Result delete(Long id);
}
