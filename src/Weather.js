import React from "react";
import "./Weather.css";
export default function Weather() {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>Berlin</h1>
        <ul>
          <li>Wednesday 20:00</li>
          <li>Clear sky</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
            <img
              src="https://cdn.search.brave.com/serp/v1/static/icons/weather-light/da7332cc2c82b1a2d97b95a375122bcb1b1b8a4cd86a33ffbd2aa97f09b040bb-01n.svg"
              alt="Clear sky"
              className="float-left"
            />
            <div className="float-left">
            <span className="temperature">13</span>
            <span className="unit">°C</span>
          </div>
          </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 2%</li>
              <li>Humidity: 15%</li>
              <li>Wind: 13 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
}