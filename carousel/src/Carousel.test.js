import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";

describe("smoke, snapshot tests", function() {
  it("renders Carousel without crashing", function() {
    render(<Carousel />);
  });
  
  it("matched snapshot of Carousel", function() {
    const {container} = render(<Carousel />);
    expect(container).toMatchSnapshot();
  });
});

describe("arrow functionality", function() {
  it("works when you click on the right arrow", function() {
    const { container } = render(<Carousel />);
  
    // expect the first image to show, but not the second
    expect(
      container.querySelector('img[alt="Photo by Richard Pasquarella on Unsplash"]')
    ).toBeInTheDocument();
    expect(
      container.querySelector('img[alt="Photo by Pratik Patel on Unsplash"]')
    ).not.toBeInTheDocument();
  
    // move forward in the carousel
    const rightArrow = container.querySelector(".fa-chevron-circle-right");
    fireEvent.click(rightArrow);
  
    // expect the second image to show, but not the first
    expect(
      container.querySelector('img[alt="Photo by Richard Pasquarella on Unsplash"]')
    ).not.toBeInTheDocument();
    expect(
      container.querySelector('img[alt="Photo by Pratik Patel on Unsplash"]')
    ).toBeInTheDocument();
  });
  
  it("works when you click on the left arrow", function() {
    const { container } = render(<Carousel />);
    const rightArrow = container.querySelector(".fa-chevron-circle-right");
    fireEvent.click(rightArrow);
  
    // expect the second image to show, but not the first
    expect(
      container.querySelector('img[alt="Photo by Pratik Patel on Unsplash"]')
    ).toBeInTheDocument();
    expect(
      container.querySelector('img[alt="Photo by Richard Pasquarella on Unsplash"]')
    ).not.toBeInTheDocument();
  
    // move backward in the carousel
    const leftArrow = container.querySelector(".fa-chevron-circle-left");
    fireEvent.click(leftArrow);
  
    // expect the first image to show, but not the second
    expect(
      container.querySelector('img[alt="Photo by Pratik Patel on Unsplash"]')
    ).not.toBeInTheDocument();
    expect(
      container.querySelector('img[alt="Photo by Richard Pasquarella on Unsplash"]')
    ).toBeInTheDocument();
  });
});

describe("hidden arrows", function() {
  it("left arrow is hidden if at first image", function() {
    const { container } = render(<Carousel />);
    const rightArrow = container.querySelector(".fa-chevron-circle-right");
  
    expect(rightArrow).toBeInTheDocument();
    expect(container.querySelector(".fa-chevron-circle-left")).not.toBeInTheDocument();
  });
  
  it("right arrow is hidden if at last image", function() {
    const { container } = render(<Carousel />);
  
    const rightArrow = container.querySelector(".fa-chevron-circle-right");
    fireEvent.click(rightArrow);
    fireEvent.click(rightArrow);
    const leftArrow = container.querySelector(".fa-chevron-circle-left");
  
    expect(leftArrow).toBeInTheDocument();
    expect(container.querySelector(".fa-chevron-circle-right")).not.toBeInTheDocument();
  });
});
