package com.mnrc.sales.forecasting.mnrcsalesforecasting.model.forecast;

import com.workday.insights.timeseries.arima.struct.ArimaParams;

import java.util.Arrays;

public class ForecastRequest {
    private ArimaParams arimaParams;
    private double historyArray[];

    public ArimaParams getArimaParams() {
        return arimaParams;
    }

    public void setArimaParams(ArimaParams arimaParams) {
        this.arimaParams = arimaParams;
    }

    public double[] getHistoryArray() {
        return historyArray;
    }

    public void setHistoryArray(double[] historyArray) {
        this.historyArray = historyArray;
    }

    @Override
    public String toString() {
        return "ForecastRequest{" +
                "arimaParams=" + arimaParams +
                ", historyArray=" + Arrays.toString(historyArray) +
                '}';
    }
}
