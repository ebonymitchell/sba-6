// Calculate the tax amount based on the product's category.
export function calculateTax(
    price: number,
    category: string
): number {
    if (category === "groceries") {
    // Apply the reduced 3% grocery tax.
    return price * 0.03;
} else {
    // Apply the standard 4.75% tax to all other categories.
    return price * 0.0475;
}
}