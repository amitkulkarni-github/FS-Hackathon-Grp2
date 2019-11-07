package com.mnrc.sales.forecasting.mnrcsalesforecasting.services.forecasting.mapper;

import com.mnrc.sales.forecasting.mnrcsalesforecasting.model.forecast.ForecastRequest;
import com.mnrc.sales.forecasting.mnrcsalesforecasting.model.forecast.ProductSalesDetails;
import com.workday.insights.timeseries.arima.struct.ArimaParams;
import org.springframework.stereotype.Component;

@Component
public class ForecastRequestMapper {

    public ForecastRequest getArimaParams(String method, boolean isSeasonal, int seasonalFrequency, ProductSalesDetails salesDetails){
        ForecastRequest forecastRequest = new ForecastRequest();
        ArimaParams params = null;
        forecastRequest.setHistoryArray(salesDetails.getProductSalesList().stream().map(e -> e.getSales()).mapToDouble(Double::doubleValue).toArray());
        if(!isSeasonal){
            if("first-order".equalsIgnoreCase(method)){
                params = new ArimaParams(1,0,0,0,0,0,0);
            } else if("random-walk".equalsIgnoreCase(method)){
                throw new UnsupportedOperationException("Not implemented");
            }else if ("differenced-first-order".equalsIgnoreCase(method)){
                params = new ArimaParams(1,1,0,0,0,0,0);
            } else if("SES".equalsIgnoreCase(method)){
                params = new ArimaParams(0,1,1,0,0,0,0);
            }
        } else{
            if("first-order".equalsIgnoreCase(method)){
                params = new ArimaParams(0,0,0,1,0,0,seasonalFrequency);  // m - monthly
            } else if("random-walk".equalsIgnoreCase(method)){
                throw new UnsupportedOperationException("Not implemented");
            }else if ("differenced-first-order".equalsIgnoreCase(method)){
                params = new ArimaParams(0,0,0,1,1,0,seasonalFrequency);  // m - monthly
            } else if("SES".equalsIgnoreCase(method)){
                params = new ArimaParams(0,0,0,0,1,1,seasonalFrequency);  // m - monthly
            }
        }
        forecastRequest.setArimaParams(params);
        return forecastRequest;
    }
}
