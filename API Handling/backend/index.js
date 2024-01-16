import express from "express";

const app = express();

app.get("/api/products", (req, res) => {
  const products = [
    {
      id: 1,
      name: "product-1",
      price: 29.99,
      image:
        "https://images.pexels.com/photos/3497065/pexels-photo-3497065.jpeg?cs=srgb&dl=pexels-fujifilm-north-america-3497065.jpg&fm=jpg",
    },
    {
      id: 2,
      name: "Product-2",
      price: 49.99,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 3,
      name: "Product-3",
      price: 19.99,
      image:
        "https://photographyforrealestate.net/wp-content/uploads/2022/11/pfre-photos-50gb-hold-02.jpg",
    },
    {
      id: 4,
      name: "Product-4",
      price: 39.99,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3RzfGVufDB8fDB8fHww",
    },
    {
      id: 5,
      name: "Product-5",
      price: 59.99,
      image:
        "https://m.media-amazon.com/images/I/51ld63rLveL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 6,
      name: "Product-6",
      price: 69.99,
      image:
        "https://shop.zebronics.com/cdn/shop/products/Zeb-Havoc-pic3.jpg?v=1705128575&width=1200",
    },
    {
      id: 7,
      name: "Product-7",
      price: 89.99,
      image: "https://example.com/product7.jpg",
    },
    {
      id: 8,
      name: "Product-8",
      price: 79.99,
      image:
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71Iih58Q2rL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 9,
      name: "Product-9",
      price: 99.99,
      image:
        "https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/ce_showcase/4pack/ce_showcase_4pack_mobile_bestsellers.jpg",
    },
    {
      id: 10,
      name: "Product-10",
      price: 109.99,
      image:
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51cbEIpl2dL._AC_UF1000,1000_QL80_.jpg",
    },
    // Add more products as needed
  ];
  //http://localhost:3000/api/products?search=product1

  if (req.query.search) {
    const filterProducts = products.filter((product) =>
      product.name.includes(req.query.search)
    );
    res.send(filterProducts);
    return;
  }

  setTimeout(() => {
    res.send(products);
  }, 3000);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
