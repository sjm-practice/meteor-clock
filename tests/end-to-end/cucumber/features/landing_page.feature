Feature: Curate a meaningful readable landing page

  As an author
  I want to curate a landing page with a meaningful layout
  So it is easy to read and understand

  Scenario: Author the heading
    Given I have created a landing page with a heading
    When a user navigates to my page
    Then they can see the heading