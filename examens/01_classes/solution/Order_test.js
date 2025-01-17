import { expect } from "jsr:@std/expect";

import { Order, OutOfStockError, Product } from "./Order.js";

Deno.test("create a product", () => {
    const apple = new Product("apple", 1.00, 5);
    expect(apple.name).toBe("apple");
    expect(apple.price).toBe(1.00);
    expect(apple.quantity).toBe(5);
});

Deno.test("create an order", () => {
    const apple = new Product("apple", 1.00, 5);
    const order = new Order([apple]);
    expect(order.products.length).toBe(1);
    expect(order.products[0]).toBe(apple);
});

Deno.test("add a product to an order", () => {
    const apple = new Product("apple", 1.00, 5);
    const order = new Order([apple]);
    const orange = new Product("orange", 1.25, 2);
    order.add(orange);
    expect(order.products.length).toBe(2);
    expect(order.products[1]).toBe(orange);
});

Deno.test("throw when adding a product that is out of stock", () => {
    const kiwi = new Product("kiwi", 2.50, 0);
    const order = new Order([]);
    expect(() => order.add(kiwi)).toThrow(OutOfStockError);
});
