import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";
import image1 from "./image1.jpg"

it("renders card without crashing", function() {
render(<Card src={ image1 } caption= "Photo by Richard Pasquarella on Unsplash" />);
});

it("matches snapshot of card", function() {
  const {container} = render(<Card src={ image1 } caption= "Photo by Richard Pasquarella on Unsplash" />);
 
  expect(container).toMatchSnapshot();
});