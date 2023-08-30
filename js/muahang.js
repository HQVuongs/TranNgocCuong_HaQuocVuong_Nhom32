// tạo 1 mảng chứa dữ liệu mẫu của sản phẩm
const products = [
    { name: "Bánh quế so-co-la", price: 10 },
    { name: "Kẹo mềm duomint", price: 12 },
    { name: "Bánh quy Klop Saluto Phô mai", price: 10 },
    { name: "Bánh quế Fullo va-ni sữa", price: 5 },
    { name: "Kẹo Blaster Sukocok - Sô-cô-la Vani nhân Cà phê", price: 20 },
    { name: "Bánh xốp Tango Sô-cô-la (160g)", price: 30 },
    { name: "Thạch vita jely", price: 90 }
];

// Hàm hiển thị danh sách sản phẩm theo mức giá đã chọn
function filterProducts() {
    const selectElement = document.getElementById("price-select");
    const selectedPrice = selectElement.value;
    const rows = document.querySelectorAll("tr");

    for (let i = 1; i < rows.length - 1; i++) {
        const product = products[i - 1];
        const row = rows[i];
        const checkBox = row.querySelector(".chon");
        const quantityInput = row.querySelector("input[name='soluong']");
        const totalPriceCell = row.querySelector(".tien");

        if (
            selectedPrice === "all" ||
            (selectedPrice === "low" && product.price < 10) ||
            (selectedPrice === "medium" && product.price >= 10 && product.price <= 20) ||
            (selectedPrice === "high" && product.price > 20)
        ) {
            row.style.display = "table-row";
            checkBox.disabled = false;
            calculateTotal(i - 1);
        } else {
            row.style.display = "none";
        }
    }

    updateTotalAmount();
}
// Hàm tính tổng tiền
function calculateTotal(index) {
    const row = document.querySelectorAll("tr")[index + 1];
    const checkBox = row.querySelector(".chon");
    const quantityInput = row.querySelector("input[name='soluong']");
    const totalPriceCell = row.querySelector(".tien");

    if (checkBox.checked && quantityInput.value >= 0) {
        const price = products[index].price;
        const quantity = parseInt(quantityInput.value);
        const totalPrice = price * quantity;
        totalPriceCell.innerText = "$" + totalPrice;
    } else {
        totalPriceCell.innerText = "$" + 0;
        quantityInput.value = 0;
    }

    updateTotalAmount();
}

// Hàm tính tổng tiền của tất cả hàng đã chọn
function updateTotalAmount() {
    const rows = document.querySelectorAll("tr");
    let totalAmount = 0;

    for (let i = 1; i < rows.length - 1; i++) {
        const row = rows[i];
        const checkBox = row.querySelector(".chon");
        const quantityInput = row.querySelector("input[name='soluong']");

        if (checkBox.checked && quantityInput.value !== "") {
            const price = products[i - 1].price;
            const quantity = parseInt(quantityInput.value);
            const totalPrice = price * quantity;
            totalAmount += totalPrice;
        }
    }

    const totalAmountCell = document.getElementById("tongtien");
    totalAmountCell.innerText = "$" + totalAmount;
}

// Hàm chọn tất cả các hàng
function selectAll() {
    const selectAllCheckbox = document.getElementById("chonhet");
    const checkboxes = document.querySelectorAll(".chon");

    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = selectAllCheckbox.checked;
        toggleQuantityInput(i);

    }
}
//hàm vô hiệu hoá và bậc checkbox
function toggleQuantityInput(index) {
    const row = document.querySelectorAll("tr")[index + 1];
    const checkBox = row.querySelector(".chon");
    const quantityInput = row.querySelector("input[name='soluong']");

    if (checkBox.checked) {
        quantityInput.disabled = false;
        calculateTotal(index);
    } else {
        quantityInput.disabled = true;
        quantityInput.value = 0;
        calculateTotal(index);
    }

    updateTotalAmount();
}
// Hiển thị danh sách sản phẩm ban đầu
filterProducts();
