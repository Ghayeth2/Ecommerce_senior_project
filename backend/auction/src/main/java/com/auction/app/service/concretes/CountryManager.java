package com.auction.app.service.concretes;

import com.auction.app.core.utils.results.DataResult;
import com.auction.app.core.utils.results.Result;
import com.auction.app.model.dtos.CountryDto;
import com.auction.app.service.abstracts.CountryService;

import java.util.List;

public class CountryManager implements CountryService {
    @Override
    public DataResult<List<CountryDto>> countries() {
        return null;
    }

    @Override
    public Result save(CountryDto countryDto) {
        return null;
    }

    @Override
    public Result update(CountryDto countryDto, Long id) {
        return null;
    }

    @Override
    public Result delete(Long id) {
        return null;
    }
}
