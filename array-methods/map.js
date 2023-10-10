const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

const priceObjects = prices.map((p) => ({ price: p, salesPrice: p / 2 }));

console.log(priceObjects);

console.log(prices.map((p) => `$${p.toFixed(2)}`));
