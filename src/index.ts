// Import the Product class.
import { Product } from "./models/Product.js";

// Import the function that retrieves products from DummyJSON.
import { fetchProducts } from "./services/apiService.js";

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
    });
}

// Start the application.
main();