
$(document).ready(function () {
    const products = [];
    let editingProductId = null;

    const productList = $("#productList");
    const addProductForm = $("#addProductForm");
    const editProductForm = $("#editProductForm");
    const deleteProductModal = $("#deleteProductModal");

    // Function to add a product to the list
    function addProduct(product) {
        const category = product.category || "N/A";
        const editButton = `<button class="btn btn-primary btn-sm edit-product" data-id="${product.id}">Edit</button>`;
        const deleteButton = `<button class="btn btn-danger btn-sm delete-product" data-id="${product.id}">Delete</button>`;
        productList.append(
            `<tr>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td>${product.stock}</td>
                <td>${category}</td>
                <td>${editButton} ${deleteButton}</td>
            </tr>`
        );
    }

    // Function to populate the Edit Product Modal
    function populateEditProductModal(product) {
        editingProductId = product.id;
        $("#editProductId").val(product.id);
        $("#editProductName").val(product.name);
        $("#editProductPrice").val(product.price);
        $("#editProductStock").val(product.stock);
        $("#editProductCategory").val(product.category);
        $("#editProductModal").modal("show");
    }

    // Function to handle the editing of a product
    editProductForm.submit(function (event) {
        event.preventDefault();
        const productName = $("#editProductName").val();
        const productPrice = $("#editProductPrice").val();
        const productStock = $("#editProductStock").val();
        const productCategory = $("#editProductCategory").val();

        // Find the product in the array and update its details
        const product = products.find((p) => p.id === editingProductId);
        if (product) {
            product.name = productName;
            product.price = productPrice;
            product.stock = productStock;
            product.category = productCategory;

            // Update the product in the table
            $(`tr:has(td:contains('${product.name}')`)
                .find(".edit-product")
                .attr("data-id", product.id);
            $(`tr:has(td:contains('${product.name}')`)
                .find(".delete-product")
                .attr("data-id", product.id);

            // Close the modal
            $("#editProductModal").modal("hide");
        }
    });

    // Function to handle the deletion of a product
    productList.on("click", ".delete-product", function () {
        const productId = $(this).data("id");
        editingProductId = productId;
        deleteProductModal.modal("show");
    });

    // Function to confirm and perform the deletion
    $("#confirmDeleteProduct").click(function () {
        // Find the product in the array and remove it
        const index = products.findIndex((p) => p.id === editingProductId);
        if (index !== -1) {
            products.splice(index, 1);

            // Remove the product from the table
            $(`tr:has(td:contains('${editingProductId}')`).remove();

            // Close the modal
            deleteProductModal.modal("hide");
        }
    });

    // ... (rest of the code, including addProduct functionality)
});
