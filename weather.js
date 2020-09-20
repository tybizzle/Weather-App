class Weather {
  constructor(city, country) {
    this.apiKey = '21636411dd5277b7165d8ac82b338eaf';
    this.city = city;
    this.country = country;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.apiKey}`);

    const responseData = await response.json();
    console.log(responseData);
    return responseData;
  }

  // Change weather location
  async changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}