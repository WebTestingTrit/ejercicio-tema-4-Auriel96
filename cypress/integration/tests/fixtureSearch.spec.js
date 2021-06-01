/// <reference types="Cypress" />
// FEATURE:     the page should allow me to search for any term I want
// As a:        user that wants to search a specific term
// I want to:   be able to search information about a specific term
// In order to: know more about such term

// SUT: https://www.codeblackbelt.com/

// Scenario: search how to delete an account
//  GIVEN: the landing page
//  WHEN: I search for "how to delete an account"
//  THEN: I should get some results

describe(`GIVEN: the landing page https://knowledgecenter.2checkout.com/`, () => {
  before(() => {
    const stubberSearchURL =
      'https://knowledgecenter.2checkout.com/Special:Search?query=Fitxtures&type=wiki';
    cy.intercept(stubberSearchURL, [
      {
        url: 'testUrl',
        articleName: 'Article Name',
        description: 'Article description'
      },
      {
        url: 'secondArticleUrl',
        articleName: 'Article name number two',
        description: 'Article description number two'
      }
    ]);
  });
  const sutURL = 'https://knowledgecenter.2checkout.com/';
  const inputSelector = '#mt-inputredirect-input';
  const searchButtonSelector = '#mt-inputredirect-input + button';
  const textToSearch = 'How to delete an account';
  const searchTitle = 'Search';
  context(`WHEN: I search for ${textToSearch}`, () => {
    before(() => {
      cy.viewport('macbook-16');
      cy.visit(sutURL);
      cy.searchTerm(inputSelector, searchButtonSelector, textToSearch);
    });
    it(`THEN: I should appear on the results page and see some results`, () => {
      cy.title().should('include', searchTitle);
      cy.get('.result').should('exist');
    });
  });
});
