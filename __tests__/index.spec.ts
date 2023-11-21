import { sayHello } from "../index.ts";

describe("Index", () => {
  const consoleLogSpy = jest.spyOn(console, "log");
  consoleLogSpy.mockImplementation();

  it("should log to console", () => {
    sayHello();

    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenCalledWith("Hello World!!!");
  });
});
