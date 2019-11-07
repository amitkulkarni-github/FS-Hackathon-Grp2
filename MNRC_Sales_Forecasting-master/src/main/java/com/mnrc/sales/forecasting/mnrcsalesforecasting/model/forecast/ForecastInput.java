package com.mnrc.sales.forecasting.mnrcsalesforecasting.model.forecast;


import com.fasterxml.jackson.annotation.JsonIgnore;

public class ForecastInput {
    private String method;
    private boolean isSeasonal;
    private int seasonalFrequency;
    private int forecastPeriod;
    private String channel;
    private String product;
    private String date;

    //only for testing
    private ProductSalesDetails productSalesDetails;

    public String getMethod() {
        return method;
    }

    public void setMethod(String method) {
        this.method = method;
    }

    public boolean isSeasonal() {
        return isSeasonal;
    }

    public void setSeasonal(boolean seasonal) {
        isSeasonal = seasonal;
    }

    public int getSeasonalFrequency() {
        return seasonalFrequency;
    }

    public void setSeasonalFrequency(int seasonalFrequency) {
        this.seasonalFrequency = seasonalFrequency;
    }

    public int getForecastPeriod() {
        return forecastPeriod;
    }

    public void setForecastPeriod(int forecastPeriod) {
        this.forecastPeriod = forecastPeriod;
    }

    public String getChannel() {
        return channel;
    }

    public void setChannel(String channel) {
        this.channel = channel;
    }

    public String getProduct() {
        return product;
    }

    public void setProduct(String product) {
        this.product = product;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public ProductSalesDetails getProductSalesDetails() {
        return productSalesDetails;
    }

    public void setProductSalesDetails(ProductSalesDetails productSalesDetails) {
        this.productSalesDetails = productSalesDetails;
    }

    @Override
    public String toString() {
        return "ForecastInput{" +
                "method='" + method + '\'' +
                ", isSeasonal=" + isSeasonal +
                ", seasonalFrequency=" + seasonalFrequency +
                ", forecastPeriod=" + forecastPeriod +
                ", channel='" + channel + '\'' +
                ", product='" + product + '\'' +
                ", date='" + date + '\'' +
                '}';
    }
}
