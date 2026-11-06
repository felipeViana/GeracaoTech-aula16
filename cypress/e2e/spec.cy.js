describe("Saudação", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("mostrando a resposta com o nome digitado", () => {
    cy.get('[data-cy="nome"]').type("Felipe")
    cy.get('[data-cy="enviar"]').click()
    cy.get('[data-cy="resposta"]').should("be.visible").and("include.text", "Felipe")
  })

  it("pedir que o nome seja digitado", () => {
    cy.get('[data-cy="enviar"]').click()
    cy.get('[data-cy="resposta"]').should("be.visible").and("include.text", "Preencha seu nome")
  })
})