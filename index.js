<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
<script>
    const cartItems = [];
    let totalAmount = 0;

    function renderCart() {
        let html = '';
        cartItems.forEach((item, index) => {
            html += `
                <tr>
                    <td>${item.name}</td>
                    <td>${item.price}</td>
                    <td>${item.quantity}</td>
                    <td>${item.total}</td>
                    <td><button class="btn btn-danger" onclick="removeItem(${index})">Remove</button></td>
                </tr>
            `;
        });
        $('#cartTable').html(html);
        $('#totalAmount').text(totalAmount);
    }

    function addItem(item) {
        const existingItem = cartItems.find(i => i.id === item.id);
        if (existingItem) {
            existingItem.quantity++;
            existingItem.total = existingItem.price * existingItem.quantity;
        } else {
            cartItems.push({...item, quantity: 1, total: item.price});
        }
        totalAmount = cartItems.reduce((total, item) => total + item.total, 0);
        renderCart();
    }

    function removeItem(index) {
        const item = cartItems[index];
        cartItems.splice(index, 1);
        totalAmount -= item.total;
        renderCart();
    }

    // Test Data
    addItem({id: 1, name: 'Item 1', price: 100});
    addItem({id: 2, name: 'Item 2', price: 200});
    addItem({id: 1, name: 'Item 1', price: 100});
</script>