export class Weather {
    id: number = 0;
    condition: string = '';
}

export interface ForecastDay {
    date: Date,
    day: {
        maxtemp_c: number,
        mintemp_c: number,
        avgtemp_c: number,
        maxwind_kph: number,
        totalprecip_mm: number,
        totalsnow_cm: number,
        avgvis_km: number,
        avghumidity: number,
        daily_will_it_rain: number,
        daily_chance_of_rain: number,
        condition: {
            text: string,
            icon: string
        },
        uv: number
    },
    hour: Hour[],
}

export interface Hour {
    time: Date,
    temp_c: number,
    condition: {
        text: string,
        icon: string
    },
    wind_kph: number,
    wind_degree: number,
    wind_dir: string,
    pressure_mb: number,
    precip_mm: number,
    humidity: number,
    cloud: number,
    feelslike_c: number,
    windchill_c: number,
    heatindex_c: number,
    will_it_rain: number,
    chance_of_rain: number,
    vis_km: number,
    gust_kph: number,
    uv: number
}

export interface WeatherML {
    location: {
        name: string,
        region: string,
        country: string,
    },
    current: {
        temp_c: number,
        gust_kph: number,
        wind_kph: number,
        wind_dir: string,
        precip_mm: string,
        feelslike_c: string,
        uv: string,
        condition: {
            text: string,
            icon: string,
        },
    },
    forecast: {
        forecastday: ForecastDay[]
    }
}

export interface WeatherError{
    error: {
        code: number,
        message: string, 
    }
}