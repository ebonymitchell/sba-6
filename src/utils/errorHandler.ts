export class ProductError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "ProductError";
    }
} // Closes the ProductError class

export function handleError(error: unknown): void {
    if (error instanceof Error) {
        console.error(error.message);
    } else {
        console.error("An unexpected error occurred:", error);
    }
}