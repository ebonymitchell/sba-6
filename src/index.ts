// Import the Product class.
import { Product } from "./models/Product.js";

// Import the function that retrieves products from DummyJSON.
import { fetchProducts } from "./services/apiService.js";

// Import the utility that calculates tax based on product category.
import { calculateTax } from "./utils/taxCalculator.js";

// Run the main application.
async function main() {
    // Retrieve product data from the API.
    const productsData = await fetchProducts();

    // Convert each API product into an instance of our Product class.
    const products = productsData.map((data) => {
        return new Product(
            data.id,
            data.title,
            data.price,
            data.discountPercentage,
            data.category
        );
    });

    // Display the details of each product.
    products.forEach((product) => {
        product.displayDetails();
        // Display the price after applying the product's discount.
        console.log("Discounted Price:", product.getPriceWithDiscount());

        // Calculate tax on the discounted price.
        const taxAmount = calculateTax(
            product.getPriceWithDiscount(),
            product.category
        );

        console.log("Tax Amount:", taxAmount);
    });
}

// Start the application.
main();