import stats from "../fixtures/stats.ts";
describe("know your starter tests", () => {
  before(() => {
    // runs once before all tests in the block
  });

  beforeEach(() => {
    // runs before each test in the block
  });

  afterEach(() => {
    // runs after each test in the block
  });

  after(() => {
    // runs once after all tests in the block
  });

  const appURL = Cypress.env("local") as string;

  const checkStats = (
    stats: {
      emoji: string;
      key: string;
    }[],
  ) =>
    stats.map((stat) => cy.contains(stat.emoji).next().should("not.be.empty"));

  it("should verify all the starting pokemon and its base stats availability", () => {
    cy.visit(appURL);
    cy.get("h1").contains("know your starters");

    cy.contains("charmander")
      .click()
      .then(() => {
        cy.contains("🔥").debug();
        checkStats(stats);
      });

    cy.wait(500);
    cy.contains("squirtle")
      .click()
      .then(() => {
        cy.contains("💧");

        checkStats(stats);
      });

    cy.wait(500);
    cy.contains("bulbasaur")
      .click()
      .then(() => {
        cy.contains("🌿");
        cy.contains("☠️");

        checkStats(stats);
      });
  });

  it("should show error message when the API does not return expected result", () => {
    cy.intercept(
      {
        method: "GET", // Route all GET requests
        url: "/api/v2/pokemon/*", // that have a URL that matches the pattern
      },
      {},
    ).as("getPokemonDetail"); // and assign an alias

    cy.visit(appURL);

    cy.contains("charmander")
      .click()
      .then(() => {
        cy.contains("oops, something went wrong");
      });
  });

  it("should show loading state when fetching data", () => {
    cy.intercept(
      {
        method: "GET", // Route all GET requests
        url: "/api/v2/pokemon/*", // that have a URL that matches the pattern
      },
      {
        delay: 1000,
        fixture: "charmander.json",
      },
    ).as("getPokemonDetail"); // and assign an alias

    cy.visit(appURL);
    cy.contains("charmander").click();
    cy.contains("loading...");
    cy.wait("@getPokemonDetail");
  });
});
