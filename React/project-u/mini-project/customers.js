$(document).ready(function () {
    const customers = [];
    let editingCustomerId = null;

    const customerList = $("#customerList");
    const addCustomerForm = $("#addCustomerForm");

    // Function to add a customer to the list
    function addCustomer(customer) {
        customerList.append(
            `<tr>
                <td>${customer.name}</td>
                <td>${customer.email}</td>
                <td>
                    <button class="btn btn-primary btn-sm edit-customer" data-id="${customer.id}">Edit</button>
                    <button class="btn btn-danger btn-sm delete-customer" data-id="${customer.id}">Delete</button>
                </td>
            </tr>`
        );
    }

    // Function to populate the Edit Customer Modal (similar to the previous examples)

    // Function to handle the editing of a customer (similar to the previous examples)

    // Function to handle the deletion of a customer (similar to the previous examples)

    // Submit the add customer form
    addCustomerForm.submit(function (event) {
        event.preventDefault();
        const customerName = $("#customerName").val();
        const customerEmail = $("#customerEmail").val();

        // Generate a unique ID (you may use a better method in a real application)
        const customerId = Date.now();

        const newCustomer = {
            id: customerId,
            name: customerName,
            email: customerEmail,
        };

        customers.push(newCustomer);
        addCustomer(newCustomer);

        // Clear the form
        addCustomerForm[0].reset();
        $("#addCustomerModal").modal("hide");
    });

    // ... (rest of the code, including edit and delete functionality)
});
