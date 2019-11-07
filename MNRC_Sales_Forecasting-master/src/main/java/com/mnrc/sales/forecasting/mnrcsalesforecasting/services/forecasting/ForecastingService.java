package com.mnrc.sales.forecasting.mnrcsalesforecasting.services.forecasting;

import com.mnrc.sales.forecasting.mnrcsalesforecasting.model.forecast.ForecastInput;
import com.mnrc.sales.forecasting.mnrcsalesforecasting.model.forecast.ForecastRequest;
import com.mnrc.sales.forecasting.mnrcsalesforecasting.model.forecast.ForecastResponse;
import com.mnrc.sales.forecasting.mnrcsalesforecasting.model.forecast.ProductSalesDetails;
import com.mnrc.sales.forecasting.mnrcsalesforecasting.services.forecasting.mapper.ForecastRequestMapper;
import com.mnrc.sales.forecasting.mnrcsalesforecasting.services.forecasting.mapper.ForecastResponseMapper;
import com.workday.insights.timeseries.arima.Arima;
import com.workday.insights.timeseries.arima.struct.ForecastResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("ForecastingService")
public class ForecastingService {

    @Autowired
    ForecastRequestMapper forecastRequestMapper;

    @Autowired
    ForecastResponseMapper forecastResponseMapper;

    public ProductSalesDetails getForecastData(ForecastInput forecastInput){

        ForecastRequest forecastRequest = forecastRequestMapper.getArimaParams(forecastInput.getMethod(),
                forecastInput.isSeasonal(),forecastInput.getSeasonalFrequency(),forecastInput.getProductSalesDetails());

        ForecastResult forecastResult = Arima.forecast_arima(forecastRequest.getHistoryArray(),forecastInput.getForecastPeriod(),forecastRequest.getArimaParams());
        ForecastResponse forecastResponse = new ForecastResponse();
        forecastResponse.setForecastArray(forecastResult.getForecast());; // in this example, it will return { 2 }
        forecastResponse.setUppers(forecastResult.getForecastUpperConf());
        forecastResponse.setLowers(forecastResult.getForecastLowerConf());
        forecastResponse.setRmse(forecastResult.getRMSE());
        forecastResponse.setMaxNormalizedVariance(forecastResult.getMaxNormalizedVariance());

        return forecastResponseMapper.getArimaResponse(forecastResponse, forecastInput.getProductSalesDetails());
    }
}
