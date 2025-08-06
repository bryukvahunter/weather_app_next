import { randomCities } from "@/shared/data/randomCities.data";
import {
  converToLocal,
  formatCapitalLetter,
  formatTemp,
  getRandomCity,
} from "./helpers";

test("convert to local time", () => {
  expect(converToLocal(1754264609, 18000)).toBe("04:43");
});

test("adding a plus to a positive value", () => {
  expect(formatTemp(1)).toBe("+1");
});

test("return random city from array", () => {
  const result = getRandomCity(randomCities);
  expect(randomCities).toContain(result);
});

test("makes the first character in a string capital", () => {
  expect(formatCapitalLetter("hello")).toBe("Hello");
});

// import React from "react";
// import { render, screen } from "@testing-library/react";

// import MiniCard from "./MiniCard";

// test("test render", () => {
//   render(
//     <MiniCard
//       title={"Вторник, 5 августа"}
//       icon={"/weather_icons/rain_sun.png"}
//       temp={"+28"}
//       feelsLike={"+31"}
//       description={"небольшой дождь"}
//     />,
//   );
//   expect(screen.getByText("Вторник, 5 августа")).toBeInTheDocument();
//   expect(screen.getByText("+28°")).toBeInTheDocument();
//   expect(screen.getByText("+31°")).toBeInTheDocument();
//   expect(screen.getByText("Небольшой дождь")).toBeInTheDocument();
// });
