/// <reference types="Cypress" />
// FEATURE:     the page should allow me to check the onboarding process
// As a:        user that wants to use the product
// I want to:   know how to install and start the product
// In order to: be able to use it

// SUT: https://knowledgecenter.2checkout.com/

// Scenario: access the Onboarding section
//  GIVEN: the landing page
//  WHEN: I click on the Onboarding link
//  THEN: I should appear on the Onboarding page

describe(`GIVEN: the landing page https://knowledgecenter.2checkout.com/`, () => {
  const sutURL = 'https://knowledgecenter.2checkout.com/';
  const linkSelector = 'a[title="Onboarding"]:visible';
  const pageTitleText = 'Onboarding';
  context(`WHEN: I click on the Onboarding link`, () => {
    before(() => {
      cy.viewport('macbook-16');
      cy.visit(sutURL);
      cy.get(linkSelector).click();
    });
    it(`THEN: I should appear on the Onboarding page`, () => {
      cy.title().should('include', pageTitleText);
    });
  });
});
