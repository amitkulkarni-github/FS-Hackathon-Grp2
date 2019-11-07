package com.mnrc.sales.forecasting.mnrcsalesforecasting.controller;

import com.mnrc.sales.forecasting.mnrcsalesforecasting.services.forecasting.ForecastingService;
import com.mnrc.sales.forecasting.mnrcsalesforecasting.services.forecasting.mock.ForecastDataCreator;
import com.mnrc.sales.forecasting.mnrcsalesforecasting.model.forecast.ForecastInput;
import com.mnrc.sales.forecasting.mnrcsalesforecasting.model.forecast.ProductSalesDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@RestController
public class Forecasting {

    @Autowired
    ForecastingService forecastingService;

    @Value("${enableMockForecasting:false}")
    boolean enableMockForecasting;

    @Autowired
    ForecastDataCreator forecastDataCreator;

    /**
     * This method needs the following inputs:
     *     private String method  -  One of the options : first-order | differenced-first-order| SES
     *     private boolean isSeasonal -  Seasonal if P,D,Q,m must be used
     *     private int seasonalFrequency - seasonal value 4- Quarterly, 12-monthly, 52 - weekly
     *     private int forecastPeriod  -  Number of Forecast period
     *     This value must be used by the history service to get the values from mongo db
     *     private String channel -
     *     private String product;
     *     private String date;
     *     // The Product Details must be formed like this:
     *
     *     List of
     *     [
     *       The Forecast only needs the sales values to form a double array.
     *       If the rest of the values are not there it will have the
     *       forecast populated and send the result
     *
     *       private String channel;
     *       private String product;
     *       private String date;
     *       private double sales;
     *       private double forecast;
     *
     *     ]
     * @param forecastInput
     * @return
     */
    @RequestMapping(value = "/forecast", method = RequestMethod.POST,
            consumes = MediaType.APPLICATION_JSON_VALUE, produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<ProductSalesDetails> addResource(@RequestBody ForecastInput forecastInput) {
        if(enableMockForecasting){
            forecastInput.setProductSalesDetails(forecastDataCreator.getDataArima(forecastInput));
        }
        ProductSalesDetails result = forecastingService.getForecastData(forecastInput);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}
