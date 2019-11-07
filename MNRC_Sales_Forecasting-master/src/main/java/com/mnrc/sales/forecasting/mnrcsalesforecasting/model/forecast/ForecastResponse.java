package com.mnrc.sales.forecasting.mnrcsalesforecasting.model.forecast;

import java.util.Arrays;

public class ForecastResponse {
    private double forecastArray[];
    private double uppers[];
    private double lowers[];
    private double rmse;
    private double maxNormalizedVariance;

    public double[] getForecastArray() {
        return forecastArray;
    }

    public void setForecastArray(double[] forecastArray) {
        this.forecastArray = forecastArray;
    }

    public double[] getUppers() {
        return uppers;
    }

    public void setUppers(double[] uppers) {
        this.uppers = uppers;
    }

    public double[] getLowers() {
        return lowers;
    }

    public void setLowers(double[] lowers) {
        this.lowers = lowers;
    }

    public double getRmse() {
        return rmse;
    }

    public void setRmse(double rmse) {
        this.rmse = rmse;
    }

    public double getMaxNormalizedVariance() {
        return maxNormalizedVariance;
    }

    public void setMaxNormalizedVariance(double maxNormalizedVariance) {
        this.maxNormalizedVariance = maxNormalizedVariance;
    }

    @Override
    public String toString() {
        return "ForecastResponse{" +
                "forecastArray=" + Arrays.toString(forecastArray) +
                ", uppers=" + Arrays.toString(uppers) +
                ", lowers=" + Arrays.toString(lowers) +
                ", rmse=" + Double.toString(rmse) +
                ", maxNormalizedVariance=" + maxNormalizedVariance +
                '}';
    }
}
