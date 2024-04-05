
The goal of this assignment is to build a **product listing page** using this specification with the provided Figma design. The assignment has a well-defined specification regarding the functionality, the implementation details are fully your decision, taking the judging criteria into consideration.

**User feature requirement:** 

> As an end user
>
> I want to see all available products on the website
>
> So I can select them to add them to my cart

**Functional requirements:**
- Create a "Product listing page" that displays "Product cards" in a responsive grid system.
  - UI:
    - Top of the page shows a simple cart, listing the names of selected products
        - A product can be added to the cart only once
        - Products can be deleted from the cart
        - After a product is added to the cart, the button on the "Product card" changes
    - Then show all the product cards with details: Image, Product name, View button, Add to cart button
      - 30 cards per page
    - Then show product pagination
      - First, Back, [Page number], Next, Last are the available pagination buttons

  - Interactions:
    - Cart:
      - Added product names appear in the cart in real time
      - Products can be deleted from the cart with a button click
    - Product cards
        - When "Add to cart" is clicked, the product is added to the cart
        - If the product is already in the cart, display "Remove from cart" button instead and handle removal on click
        - When "View button" is clicked, the "Product detail page" loads
- Create a "Product detail page" that displays details of a single product.
  - UI:
    - Implement navigation back to the "Product listing page"
    - Show product details:
      - Image
      - Name
      - Description
    - Show interactions:
      - Add to cart button / Remove from cart, based on the cart state
  - Functionality:
    - "Product detail page" should use the product slug as navigation (eg: /product/glove)
  - Interactions:
    - When "Back to product listing" button is clicked, navigate back to "Product listing page"
    - When "Add to cart button / Remove from cart" button is clicked, handle adding / removing the product to/from the cart

## Resources to use 
### Mock API
Please use the mock API in this repo to get product data to display. 
You can run it with:
```
npm i
node index.js
```

You can use the openapi.yml file to check the API contract if needed (recommended easy way: https://editor.swagger.io) and test the locally running API.

### Figma design
TODO

## Judging criteria:
🔴REQUIRED parts are must-do, we need developers who have strong fundamental knowledge in our core technologies.
🌟OPTIONAL parts are can-do, shows us the depth of your knowledge, highly recommended for non-junior applicants.

🔴Component creation from Figma design (React, Storybook, Jest):
- 🔴[REQUIRED] Components are created separately as **Storybook** components as per the Figma structure, according to Atomic Design principles (or similar)
  - 🔴[REQUIRED] Components should fully match the Figma design (structure and behavior of components)
  - 🔴[REQUIRED] Components should be fully responsive on all generic screen sizes (mobile / tablet / desktop)
  - 🌟[OPTIONAL] Usage of third-party component package (eg: Material, Chakra UI)
  - 🌟[OPTIONAL] Usage of other type of styling (eg: Styled components, Tailwind)
  - 🌟[OPTIONAL] Components are fully tested with 100% coverage (recommended: Jest)

🔴Frontend project structure and code (React, NextJS):
- 🔴[REQUIRED] Project is written in React Typescript
  - 🌟[OPTIONAL] Project is written in NextJS Typescript instead
- 🌟[OPTIONAL] "Product detail page" is using SSG

🔴Functionality (React, NextJS):
- 🔴[REQUIRED] Proper state handling for cart functionality
- 🔴[REQUIRED] Proper communication with mock API
  - 🌟[OPTIONAL] Usage of some kind of query package (eg: React-query)
- 🔴[REQUIRED] Proper pagination handling for product listing
- 🌟[OPTIONAL] Performance improvements, optimizations (eg: using framework specific optimizations)
- 🌟[OPTIONAL] Any kind of testing (unit, integration, e2e)

🔴Documentation:
- 🔴[REQUIRED] Documentation for running the solution

🌟Deployment (CI/CD, devops, Vercel):
- 🌟[OPTIONAL] CI/CD config files are created and working
- 🌟[OPTIONAL] Solution deployed to cloud / Vercel
