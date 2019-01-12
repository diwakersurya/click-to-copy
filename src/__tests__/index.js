import React from "react";
import { cleanup, render, waitForElement } from "react-testing-library";
import Copyable from "../index";

describe("Copyable Suite", () => {
  describe("Common", () => {
    let h1, container;
    beforeAll(async () => {
      ({ container } = render(
        <div>
          <Copyable>
            <h1 className="text-item">test text</h1>
          </Copyable>
          Copyable>
        </div>
      ));
      [h1] = await waitForElement(
        () => {
          return [container.querySelectorAll(".text-item")];
        },
        { container }
      );
    });
    afterAll(cleanup);
    test("should render properly", () => {});
  });
});
