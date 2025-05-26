// Khởi tạo giỏ hàng
let cart = [];

// Thêm món vào giỏ hàng
function addToCart(itemName, itemPrice) {
  const existingItem = cart.find(item => item.name === itemName);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ name: itemName, price: itemPrice, quantity: 1 });
  }

  updateCartUI();
}

// Tính tổng tiền trong giỏ hàng
function calculateCartTotal() {
  let total = 0;
  cart.forEach(item => {
    total += item.price * item.quantity;
  });
  return total;
}

// Cập nhật giao diện giỏ hàng
function updateCartUI() {
  const cartItemsList = document.getElementById('cart-items');
  cartItemsList.innerHTML = ''; // Xóa danh sách cũ

  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} x ${item.quantity} - ${(item.price * item.quantity).toLocaleString()},000₫`;
    cartItemsList.appendChild(li);
  });

  // Cập nhật tổng tiền
  document.getElementById('cart-total').textContent = calculateCartTotal().toLocaleString() + ",000₫";
}

// Xử lý thanh toán
function checkoutCart() {
  if (cart.length === 0) {
    alert("Giỏ hàng trống. Vui lòng thêm sản phẩm trước khi thanh toán.");
    return;
  }

  const confirmCheckout = confirm("Bạn có chắc chắn muốn thanh toán?");
  if (confirmCheckout) {
    alert("Cảm ơn bạn đã mua hàng!");

    cart = []; // Xóa giỏ hàng sau khi thanh toán
    updateCartUI(); // Cập nhật giao diện
  }
}
