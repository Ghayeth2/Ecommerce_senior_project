package com.auction.app.service.concretes;

import com.auction.app.core.utils.results.DataResult;
import com.auction.app.core.utils.results.Result;
import com.auction.app.model.dtos.CityDto;
import com.auction.app.service.abstracts.CityService;

import java.util.List;

public class CityManager implements CityService {
    @Override
    public DataResult<List<CityDto>> cities() {
        return null;
    }

    @Override
    public Result save(CityDto cityDto) {
        return null;
    }

    @Override
    public Result update(CityDto cityDto, Long id) {
        return null;
    }

    @Override
    public Result delete(Long id) {
        return null;
    }
}
