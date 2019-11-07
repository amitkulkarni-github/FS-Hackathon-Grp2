package com.mnrc.sales.forecasting.mnrcsalesforecasting.model.forecast;

import java.util.List;

public class ProductSalesDetails {
    private List<ProductSales> productSalesList;

    public List<ProductSales> getProductSalesList() {
        return productSalesList;
    }

    public void setProductSalesList(List<ProductSales> productSalesList) {
        this.productSalesList = productSalesList;
    }
}
