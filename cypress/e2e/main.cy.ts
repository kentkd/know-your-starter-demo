import stats from "../fixtures/stats.ts";
describe("know your starter tests", () => {
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
});
