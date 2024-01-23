$(document).ready(function () {
    // Sample data (you would fetch this data from your server)
    const statisticsData = {
        totalProducts: 100,
        totalCategories: 10,
        totalCustomers: 50,
        totalOrders: 200,
    };

    const recentlyAddedProductsData = [
        { name: "Product 1", price: 19.99 },
        { name: "Product 2", price: 29.99 },
        { name: "Product 3", price: 14.99 },
    ];

    const latestOrdersData = [
        { id: 1, customer: "Customer A", total: 100.0, date: "2023-11-01" },
        { id: 2, customer: "Customer B", total: 75.5, date: "2023-11-02" },
        { id: 3, customer: "Customer C", total: 50.0, date: "2023-11-03" },
    ];

    // Display summary statistics
    $("#totalProducts").text(statisticsData.totalProducts);
    $("#totalCategories").text(statisticsData.totalCategories);
    $("#totalCustomers").text(statisticsData.totalCustomers);
    $("#totalOrders").text(statisticsData.totalOrders);

    // Display recently added products
    const recentlyAddedProductsList = $("#recentlyAddedProducts");
    recentlyAddedProductsData.forEach((product) => {
        recentlyAddedProductsList.append(`<li>${product.name} - $${product.price}</li>`);
    });

    // Display latest orders
    const latestOrdersList = $("#latestOrders");
    latestOrdersData.forEach((order) => {
        latestOrdersList.append(`<li>Order ID: ${order.id}, Customer: ${order.customer}, Total: $${order.total}, Date: ${order.date}</li>`);
    });
});
