package com.auction.app.service.abstracts;

import com.auction.app.core.utils.results.DataResult;
import com.auction.app.core.utils.results.Result;
import com.auction.app.model.dtos.CityDto;
import com.auction.app.model.dtos.DistrictDto;

import java.util.List;

public interface DistrictService {
    DataResult<List<DistrictDto>> districts();
    Result save(DistrictDto districtDto);
    Result update(DistrictDto districtDto, Long id);
    Result delete(Long id);
}
