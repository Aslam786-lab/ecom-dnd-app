export const data = [
  {
    id: 77,
    title: "Fog Linen Chambray Towel - Beige Stripe",
    variants: [
      {
        id: 1,
        product_id: 77,
        title: "XS / Silver",
        price: "49",
      },
      {
        id: 2,
        product_id: 77,
        title: "S / Silver",
        price: "49",
      },
      {
        id: 3,
        product_id: 77,
        title: "M / Silver",
        price: "49",
      },
    ],
    image: {
      id: 266,
      product_id: 77,
      src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/77/images/266/foglinenbeigestripetowel1b.1647248662.386.513.jpg?c=1",
    },
  },
  {
    id: 80,
    title: "Orbit Terrarium - Large",
    variants: [
      {
        id: 64,
        product_id: 80,
        title: "Default Title",
        price: "109",
      },
    ],
    image: {
      id: 272,
      product_id: 80,
      src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/80/images/272/roundterrariumlarge.1647248662.386.513.jpg?c=1",
    },
  },
  {
    id: 81,
    title: "Wool Blend Throw Blanket - Charcoal",
    variants: [
      {
        id: 65,
        product_id: 81,
        title: "One Size",
        price: "79",
      },
    ],
    image: {
      id: 273,
      product_id: 81,
      src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/81/images/273/woolblendthrowcharcoal.1647248662.386.513.jpg?c=1",
    },
  },
  {
    id: 82,
    title: "Ceramic Vase - Matte White",
    variants: [
      {
        id: 66,
        product_id: 82,
        title: "Small",
        price: "29",
      },
      {
        id: 67,
        product_id: 82,
        title: "Medium",
        price: "39",
      },
      {
        id: 68,
        product_id: 82,
        title: "Large",
        price: "49",
      },
    ],
    image: {
      id: 274,
      product_id: 82,
      src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/82/images/274/ceramicvasewhite.1647248662.386.513.jpg?c=1",
    },
  },
  {
    id: 83,
    title: "Leather Journal - A5",
    variants: [
      {
        id: 69,
        product_id: 83,
        title: "Default Title",
        price: "59",
      },
    ],
    image: {
      id: 275,
      product_id: 83,
      src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/83/images/275/leatherjournal.1647248662.386.513.jpg?c=1",
    },
  },
  {
    id: 84,
    title: "Handmade Wooden Cutting Board",
    variants: [
      {
        id: 70,
        product_id: 84,
        title: "Default Title",
        price: "45",
      },
    ],
    image: {
      id: 276,
      product_id: 84,
      src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/84/images/276/woodcuttingboard.1647248662.386.513.jpg?c=1",
    },
  },
];

export async function fetchP() {
  return new Promise((resolve, rej) => {
    setTimeout(() => {
      resolve(data);
    }, 200);
  });
}
