# SBA: TypeScript and Advanced JavaScript — Reflection

For this assignment, I built an e-commerce product management system using TypeScript and the DummyJSON API. The application retrieves product data, creates Product objects, calculates discounted prices, applies taxes based on product categories, and displays the results in the console.

One of the things I spent the most time working through was understanding how the different files connected to each other. I created separate modules for the Product class, API service, discount calculator, tax calculator, and error handler. I ran into a few issues with imports and function names along the way. One mistake was having a different function name in my discount calculator than the one I was trying to import. Fixing that helped me better understand how imports and exports work together.

I also got more practice working with classes, constructors, methods, and TypeScript types. I used the map() method to turn the product data from the API into Product objects, then used forEach() to display the product information and calculations. Understanding what was happening inside those callback functions took some extra effort, but it started making more sense as I worked through the code.

Another part of the assignment was using async/await to retrieve data from the API and implementing error handling with a custom ProductError class. I also tested the tax calculator to make sure it applied the correct 3% grocery tax and 4.75% tax for other categories.

Overall, this assignment gave me more experience putting together an application with multiple files instead of having everything in one place. I still want to spend more time practicing JavaScript fundamentals, especially functions, array methods, and asynchronous code. But I was able to work through the challenges, debug my code, and get the application running. 