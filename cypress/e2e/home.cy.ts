import { contains } from "cypress/types/jquery"

describe('home page', () => {
  // Using beforeEach hooks.
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

// ***********************************************************************
  // The it block is the actuall test.
  // it blocks take a string as thefirst agument and a call back as the second argument.
  // This is an example of command chaining.
  // The should command is chained off of the get command.
  // cy.get("h1").should('contain', "Testing Next.js Applications with Cypress")
  
    context("Hero Section", () => {
      it("the h1 contains the correct text", () => {
        cy.get("[data-test='hero-heading']").should("exist")
        .contains("Testing Next.js Applications with Cypress")
      })
      it("the features on the homepage are correct", () => {
        cy.get('dt').eq(0).contains('4 Courses')
        cy.get('dt').eq(1).contains('25+ Lesson')
        cy.get('dt').eq(2).contains('Free and Open Source')
      })
    })  

 // *********************************************************************
  // Get the descendent DOM elements of a specific selector using find.
  // https://docs.cypress.io/api/commands/find
  // write assertions against URLs using the location command.
  // https://docs.cypress.io/api/commands/location

    context("Courses Section", () => {
      it.only("Course: Testing Your First Next.js Application", () => {
        // cy.get(`[data-test="course-0"]`).find("a").eq(3).click
        cy.getByData("course-0").find("a").eq(3).click()
        cy.location("pathname").should("eq", "/testing-your-first-application")
      })
      it.only("Course: Testing Foundations", () => {
        cy.getByData("course-1").find("a").eq(3).click()
        cy.location("pathname").should("eq", "/testing-foundations")
      })
      it.only("Course: Cypress Fundamentalsn", () => {
        cy.getByData("course-2").find("a").eq(3).click()
        cy.location("pathname").should("eq", "/cypress-fundamentals")
      })
      
    })  

  })

