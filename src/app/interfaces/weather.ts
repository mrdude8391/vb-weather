export class Weather {
    id: number = 0;
    condition: string = '';
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
        condition: {
            text: string,
            icon: string,
        },
    }
}