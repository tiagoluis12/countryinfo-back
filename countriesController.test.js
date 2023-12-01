const request = require("supertest");
const app = require("./src/app");
const countriesService = require("./src/controllers/countriesService");

jest.mock("./src/controllers/countriesService");

beforeEach(() => {
  countriesService.fetchAllCountries.mockReset();
});

describe("Countries API", () => {
  test("It should GET /countries - success", async () => {
    const mockCountries = [{ name: "ireland" }, { name: "spain" }];
    countriesService.fetchAllCountries.mockResolvedValue(mockCountries);

    const response = await request(app).get("/api/countries");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(mockCountries);
  });

  test("It should GET /countries - failure", async () => {
    countriesService.fetchAllCountries.mockRejectedValue(
      new Error("Failed to fetch countries data")
    );

    const response = await request(app).get("/api/countries");
    expect(response.statusCode).toBe(500);
    expect(response.body).toHaveProperty("error", "Internal Server Error");
  });
});
