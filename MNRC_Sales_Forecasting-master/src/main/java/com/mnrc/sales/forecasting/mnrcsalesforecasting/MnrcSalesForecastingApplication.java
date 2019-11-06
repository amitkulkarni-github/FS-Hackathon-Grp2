package com.mnrc.sales.forecasting.mnrcsalesforecasting;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.mongo.MongoAutoConfiguration;

@SpringBootApplication
public class MnrcSalesForecastingApplication {

	public static void main(String[] args) {
		SpringApplication.run(MnrcSalesForecastingApplication.class, args);
	}

}
