import movieApi from "../api/movieApi";
import httpClient from "../api/httpClient";
import config from "../api/config";

jest.mock("axios", () => {
  return {
    create: jest.fn(() => ({
      get: jest.fn(),
      interceptors: {
        request: { use: jest.fn(), eject: jest.fn() },
        response: { use: jest.fn(), eject: jest.fn() },
      },
    })),
  };
});
describe("FUNCTION getMoviesList", () => {
  test("should Call httpClient.get with the right params", async () => {
    jest
      .spyOn(httpClient, "get")
      .mockImplementation(() => Promise.resolve(true));
    await movieApi.getMoviesList("testA", "testB");

    expect(httpClient.get).toHaveBeenCalled();
    expect(httpClient.get).toHaveBeenCalledWith("/testA/movie", {
      params: { api_key: config.apiKey, query: "testB" },
    });
  });
});

describe("FUNCTION getTvList", () => {
  test("should Call httpClient.get with the right params", async () => {
    jest
      .spyOn(httpClient, "get")
      .mockImplementation(() => Promise.resolve(true));
    await movieApi.getTvList("testA", "testB");

    expect(httpClient.get).toHaveBeenCalledTimes(1);
    expect(httpClient.get).toHaveBeenCalledWith("/testA/tv", {
      params: { api_key: config.apiKey, query: "testB" },
    });
  });
});

describe("FUNCTION detail", () => {
  test("should Call httpClient.get with the right params", async () => {
    jest
      .spyOn(httpClient, "get")
      .mockImplementation(() => Promise.resolve(true));
    const id = 3;
    await movieApi.detail("testA", id);

    expect(httpClient.get).toHaveBeenCalledTimes(1);
    expect(httpClient.get).toHaveBeenCalledWith("testA/" + id, {
      params: { api_key: config.apiKey, query: null },
    });
  });
});

describe("FUNCTION credits", () => {
  test("should Call httpClient.get with the right params", async () => {
    jest
      .spyOn(httpClient, "get")
      .mockImplementation(() => Promise.resolve(true));
    const id = 4;
    await movieApi.credits("testA", id);

    expect(httpClient.get).toHaveBeenCalledTimes(1);
    expect(httpClient.get).toHaveBeenCalledWith(`testA/${id}/credits`, {
      params: {},
    });
  });
});

describe("FUNCTION similar", () => {
  test("should Call httpClient.get with the right params", async () => {
    jest
      .spyOn(httpClient, "get")
      .mockImplementation(() => Promise.resolve(true));
    const id = 5;
    await movieApi.similar("testA", id);

    expect(httpClient.get).toHaveBeenCalledTimes(1);
    expect(httpClient.get).toHaveBeenCalledWith(`testA/${id}/similar`, {
      params: {},
    });
  });
});