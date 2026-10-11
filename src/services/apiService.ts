import { ProductError } from "../utils/errorHandler.js";

// Defines the product information we expect from the API.
export interface ProductData {
    id: number;
    title: string;
    price: number;
    discountPercentage: number;
    category: string;
}

// Fetch product data from the DummyJSON API.
export async function fetchProducts(): Promise<ProductData[]> {
    try {
        const response = await fetch("https://dummyjson.com/products");

        if (!response.ok) {
            throw new ProductError("Failed to fetch products");
        }

        const data = await response.json();

        return data.products;
    } catch (error) {
        console.error("Failed to fetch products:", error);
        throw error;
    }
}