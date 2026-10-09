import { calculateDiscount } from "../utils/discountCalculator.js";

export class Product {
    id: number;
    title: string;
    price: number;
    discountPercentage: number;
    category: string;

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

    displayDetails(): void {
        console.log(this.id);
        console.log(this.title);
        console.log(this.price);
        console.log(this.discountPercentage);
        console.log(this.category);
    }

    getPriceWithDiscount(): number {
        const discountAmount = calculateDiscount(this.price, this.discountPercentage);
        return this.price - discountAmount;
    }
}