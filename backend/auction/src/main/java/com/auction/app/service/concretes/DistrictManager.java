package com.auction.app.service.concretes;

import com.auction.app.core.utils.results.DataResult;
import com.auction.app.core.utils.results.Result;
import com.auction.app.model.dtos.DistrictDto;
import com.auction.app.service.abstracts.DistrictService;

import java.util.List;

public class DistrictManager implements DistrictService {
    @Override
    public DataResult<List<DistrictDto>> districts() {
        return null;
    }

    @Override
    public Result save(DistrictDto districtDto) {
        return null;
    }

    @Override
    public Result update(DistrictDto districtDto, Long id) {
        return null;
    }

    @Override
    public Result delete(Long id) {
        return null;
    }
}
