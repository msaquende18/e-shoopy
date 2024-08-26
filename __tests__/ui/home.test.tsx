/* eslint-disable react/react-in-jsx-scope */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { expect, test, describe } from "@jest/globals";
import Page from "@/app/page";

describe("Testing UI: Unit testing", () => {
  test("had and display a heading title", () => {
    // ARRANGE
    render(<Page />); //this need babel to run convert jsx suntax to javascript

    // ACT
    const heading = screen.getByRole("img", {
      name: "logo",
    });

    // ASSERT
    expect(heading).toBeDefined();
  });
});