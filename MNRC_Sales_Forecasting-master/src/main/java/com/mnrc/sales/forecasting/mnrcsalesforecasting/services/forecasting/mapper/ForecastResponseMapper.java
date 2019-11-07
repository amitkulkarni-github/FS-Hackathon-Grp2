package com.mnrc.sales.forecasting.mnrcsalesforecasting.services.forecasting.mapper;

import com.mnrc.sales.forecasting.mnrcsalesforecasting.model.forecast.ForecastResponse;
import com.mnrc.sales.forecasting.mnrcsalesforecasting.model.forecast.ProductSales;
import com.mnrc.sales.forecasting.mnrcsalesforecasting.model.forecast.ProductSalesDetails;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.DoubleStream;

@Component
public class ForecastResponseMapper {

    public ProductSalesDetails getArimaResponse(ForecastResponse forecastResponse, ProductSalesDetails inpSalesDetails) {
        ProductSalesDetails productSalesDetails = new ProductSalesDetails();

        if (null != forecastResponse) {
            productSalesDetails.setProductSalesList(DoubleStream.of(forecastResponse.getForecastArray()).boxed().map(e -> {
                ProductSales productSales = new ProductSales();
                productSales.setForecast(e);
                return productSales;
            }).collect(Collectors.<ProductSales>toList()));
        }
        List<ProductSales> salesForecast = productSalesDetails.getProductSalesList();

        List<ProductSales> salesInput = inpSalesDetails.getProductSalesList();

        int j = 0;
        if (salesInput.size() >= salesForecast.size()) {
            j = salesForecast.size();
        } else {
            j = salesInput.size();
        }
        for (int i = 0; i < j; i++) {
            ProductSales input = salesInput.get(i);
            ProductSales output = salesForecast.get(i);
            output.setChannel(input.getChannel());
            output.setSales(input.getSales());
            output.setDate(input.getDate());
            output.setProduct(input.getProduct());
        }

        return productSalesDetails;
    }
}
