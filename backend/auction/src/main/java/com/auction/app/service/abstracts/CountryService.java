package com.auction.app.service.abstracts;

import com.auction.app.core.utils.results.DataResult;
import com.auction.app.core.utils.results.Result;
import com.auction.app.model.dtos.CityDto;
import com.auction.app.model.dtos.CountryDto;

import java.util.List;

public interface CountryService {
    DataResult<List<CountryDto>> countries();
    Result save(CountryDto countryDto);
    Result update(CountryDto countryDto, Long id);
    Result delete(Long id);
}
