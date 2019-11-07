package com.mnrc.sales.forecasting.mnrcsalesforecasting.model.forecast;

public class ProductSales {
    private String channel;
    private String product;
    private String date;
    private double sales;
    private double forecast;

    public ProductSales() {
    }

    public ProductSales(String channel, String product, String date, double sales, double forecast) {
        this.channel = channel;
        this.product = product;
        this.date = date;
        this.sales = sales;
        this.forecast = forecast;
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

    public double getSales() {
        return sales;
    }

    public void setSales(double sales) {
        this.sales = sales;
    }

    public double getForecast() {
        return forecast;
    }

    public void setForecast(double forecast) {
        this.forecast = forecast;
    }
}
