// Import the reusable function that calculates a product's discount amount.
import { calculateDiscount } from "../utils/discountCalculator.js";

// Represents a product retrieved from the DummyJSON API.
export class Product {
    // Properties that store each product's information.
    id: number;
    title: string;
    price: number;
    discountPercentage: number;
    category: string;

    // Initialize a new product with the values passed to the constructor.
    constructor(
        id: number,
        title: string,
        price: number,
        discountPercentage: number,
        category: string
    ) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.discountPercentage = discountPercentage;
        this.category = category;
    }

    // Display the product's information in the console.
    displayDetails(): void {
        console.log(this.id);
        console.log(this.title);
        console.log(this.price);
        console.log(this.discountPercentage);
        console.log(this.category);
    }

    // Calculate and return the product's price after its discount.
    getPriceWithDiscount(): number {
        const discountAmount = calculateDiscount(this.price, this.discountPercentage);
        return this.price - discountAmount;
    }
}