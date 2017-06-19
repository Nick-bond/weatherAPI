import React from 'react';

const ForecastItems = (data) => {
    let forecast = data.data;

    const convertTemp = (clv) => {
        return `+${parseInt(clv - 273.15)}`;
    };

    const convertData = (date) => {
        let dateForecast = new Date(date * 1000);
        let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return dateForecast.getDate() + " " + weekDays[dateForecast.getDay()];
    };

    return (
        <div>
            <div>
                <h3 className="title">Weather in {forecast.city.name} </h3>
            </div>
            <div className="days">
                {
                    forecast.list.map(function (item, key) {
                        let imgUrl = `http://openweathermap.org/img/w/${item.weather[0].icon}.png`;
                        return (
                            <div className="items" key={key}>
                                <div>
                                    <div> { convertData(item.dt) } </div>
                                    <img src={imgUrl} />
                                </div>
                                <div className="temp">
                                    <span>Morning:</span>
                                    <span>{convertTemp(item.temp.morn)}&#8451;</span>
                                </div>
                                <div className="temp">
                                    <span>Day:</span>
                                    <span>{convertTemp(item.temp.day)}&#8451;</span>
                                </div>
                                <div className="temp">
                                    <span>Evening:</span> 
                                    <span>{convertTemp(item.temp.eve)}&#8451;</span>
                                </div>
                                <div className="temp">
                                    <span>Night:</span> 
                                    <span>{convertTemp(item.temp.night)}&#8451;</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ForecastItems;