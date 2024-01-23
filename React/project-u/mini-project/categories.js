$(document).ready(function () {
    const categories = [];
    let editingCategoryId = null;

    const categoryList = $("#categoryList");
    const addCategoryForm = $("#addCategoryForm");

    // Function to add a category to the list
    function addCategory(category) {
        categoryList.append(
            `<tr>
                <td>${category.name}</td>
                <td>${category.numOfProducts}</td>
                <td>
                    <button class="btn btn-primary btn-sm edit-category" data-id="${category.id}">Edit</button>
                    <button class="btn btn-danger btn-sm delete-category" data-id="${category.id}">Delete</button>
                </td>
            </tr>`
        );
    }

    // Function to populate the Edit Category Modal (similar to the previous examples)

    // Function to handle the editing of a category (similar to the previous examples)

    // Function to handle the deletion of a category (similar to the previous examples)

    // Function to update the number of products for a category
    function updateNumOfProducts(categoryId, newNumOfProducts) {
        const category = categories.find((c) => c.id === categoryId);
        if (category) {
            category.numOfProducts = newNumOfProducts;
        }
    }

    // Submit the add category form
    addCategoryForm.submit(function (event) {
        event.preventDefault();
        const categoryName = $("#categoryName").val();

        // Generate a unique ID (you may use a better method in a real application)
        const categoryId = Date.now();

        const newCategory = {
            id: categoryId,
            name: categoryName,
            numOfProducts: 0,
        };

        categories.push(newCategory);
        addCategory(newCategory);

        // Clear the form
        addCategoryForm[0].reset();
        $("#addCategoryModal").modal("hide");
    });

    // ... (rest of the code, including edit and delete functionality)
});
