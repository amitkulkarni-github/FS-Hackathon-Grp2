package com.mnrc.sales.forecasting.mnrcsalesforecasting.services.forecasting.mock;

import com.mnrc.sales.forecasting.mnrcsalesforecasting.model.forecast.ForecastInput;
import com.mnrc.sales.forecasting.mnrcsalesforecasting.model.forecast.ProductSales;
import com.mnrc.sales.forecasting.mnrcsalesforecasting.model.forecast.ProductSalesDetails;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.text.SimpleDateFormat;
import java.time.Instant;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Random;
import java.util.concurrent.ThreadLocalRandom;

// only for testing
// in real scenario the product sales needs to come from db
@Component
public class ForecastDataCreator {

    @Value("${enableMissingRecordCreator:false}")
    boolean enableMissingRecordCreator;

    public ProductSalesDetails getDataArima(ForecastInput forecastInput) {
        ProductSalesDetails productSalesDetails =  new ProductSalesDetails();
        List<ProductSales> datalist = new ArrayList<>();
        productSalesDetails.setProductSalesList(datalist);
        Random r = new Random();
        double rangeMin=20;
        double rangeMax=100;
        datalist.add(new ProductSales("Online","Phone","2017-01-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2017-02-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2017-03-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2017-04-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2017-05-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2017-06-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2017-07-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2017-08-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2017-09-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2017-10-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2017-11-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2017-12-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2018-01-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2018-02-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2018-03-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2018-04-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2018-05-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2018-06-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2018-07-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2018-08-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2018-09-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2018-10-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2018-11-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2018-12-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2019-01-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2019-02-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2019-03-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2019-04-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2019-05-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2019-06-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2019-07-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2019-08-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2019-09-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2019-10-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2019-11-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2019-12-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2016-01-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2016-01-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2016-02-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2016-03-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2016-04-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2016-05-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2016-06-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2016-07-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2016-08-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2016-09-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2016-10-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2016-11-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2016-12-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2015-01-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2015-02-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2015-03-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2015-04-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2015-05-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2015-06-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2015-07-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2015-08-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2015-09-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2015-10-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2015-11-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2015-12-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2014-01-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2014-02-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2014-03-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2014-04-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2014-05-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2014-06-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2014-07-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2014-08-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2014-09-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2014-10-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2014-11-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2014-12-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2013-01-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2013-02-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2013-03-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2013-04-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2013-05-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2013-06-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2013-07-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2013-08-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2013-09-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2013-10-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2013-11-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2013-12-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2012-01-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2012-01-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2012-01-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2012-02-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2012-03-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2012-04-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2012-05-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2012-06-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2012-07-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2012-08-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2012-09-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2012-10-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2012-11-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2012-12-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2011-01-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2011-02-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2011-03-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2011-04-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2011-05-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2011-06-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2011-07-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2011-08-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2011-09-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2011-10-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2011-11-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2011-12-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
        datalist.add(new ProductSales("Online","Phone","2010-12-01",rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));

        if(forecastInput.getForecastPeriod() > 112 && enableMissingRecordCreator){
            for(int i=113; i <forecastInput.getForecastPeriod();i++){
                datalist.add(new ProductSales("Online","Phone",new Date(ThreadLocalRandom.current().nextInt() * 1000L).toString(),rangeMin + (rangeMax - rangeMin) * r.nextDouble(),0));
            }
        }
        return productSalesDetails;
    }
}
