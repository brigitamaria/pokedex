const fetch = require("jest-fetch-mock");
jest.setMock("node-fetch", fetch);
const services = require("../datasource/services");
const { BASE_URL } = require("../datasource/url");

describe("pokedex getNextAndResult", () => {
  const url = `${BASE_URL}/pokemon`;

  test("getNextAndResult result", async () => {
    const mockResponse = {
      count: 964,
      next: "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20",
      previous: null,
      results: [
        {
          name: "bulbasaur",
          url: "https://pokeapi.co/api/v2/pokemon/1/",
        },
        {
          name: "ivysaur",
          url: "https://pokeapi.co/api/v2/pokemon/2/",
        },
      ],
    };
    const passedResponseMock = { next: mockResponse.next, results: mockResponse.results };
    fetch.mockResponse(JSON.stringify(passedResponseMock));

    const current = await services.getNextAndResult(url);

    expect(current).toEqual(passedResponseMock);
    expect(current).toMatchSnapshot();
  });

  test("fetch", () => {
    expect(fetch).toHaveBeenCalled();
    expect(fetch.mock.calls).toMatchSnapshot();
  });
});
