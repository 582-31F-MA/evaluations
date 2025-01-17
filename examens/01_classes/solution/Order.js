export class Product {
    /** @type {string} */
    name;
    /** @type {number} */
    price;
    /** @type {number} */
    quantity;

    /**
     * @param {string} name
     * @param {number} price
     * @param {number} quantity
     */
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    /**
     * Determine if the product is out of stock.
     *
     * @returns {boolean}
     */
    isOutOfStock() {
        return this.quantity < 1;
    }
}

export class OutOfStockError extends Error {}

export class Order {
    products;

    /**
     * @param {Product[]} products
     */
    constructor(products) {
        this.products = products;
    }

    /**
     * Add the given product to the order.
     *
     * @param {Product} product
     * @throws {OutOfStockError}
     * @returns {void}
     */
    add(product) {
        if (product.isOutOfStock()) {
            throw new OutOfStockError();
        }
        this.products.push(product);
    }
}
