// ダミーの商品データ
const products = [
    {
      name: "ハンドメイド セラミックカップ",
      image: "./images/product1.jpg",
      price: "¥1,200",
      description: "素朴な風合いが魅力の手作りカップです。",
      stock: 10
    },
    {
      name: "木製カトラリーセット",
      image: "./images/product2.jpg",
      price: "¥800",
      description: "天然木を使用した温かみのあるカトラリー。",
      stock: 5
    },
    {
      name: "エコバッグ(コットン)",
      image: "./images/product3.jpg",
      price: "¥500",
      description: "シンプルなデザインで、毎日の買い物に活躍。",
      stock: 15
    },
    {
      name: "手編みコースター",
      image: "./images/product4.jpg",
      price: "¥300",
      description: "柔らかい素材でテーブルを傷つけない優しい作り。",
      stock: 20
    },
    {
      name: "レターセット",
      image: "./images/product5.jpg",
      price: "¥600",
      description: "コットンペーパーを使用した、風合いあるレターセット。",
      stock: 8
    }
  ];
  
  // DOM要素を取得
  const productGrid = document.getElementById("productGrid");
  const productModal = document.getElementById("productModal");
  const closeModalBtn = document.getElementById("closeModal");
  const modalImage = document.getElementById("modalImage");
  const modalName = document.getElementById("modalName");
  const modalPrice = document.getElementById("modalPrice");
  const modalDescription = document.getElementById("modalDescription");
  const modalStock = document.getElementById("modalStock");
  
  // 商品カードを生成し、商品一覧に追加
  products.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <div class="product-details">
        <h3 class="product-name">${product.name}</h3>
        <p class="product-price">${product.price}</p>
      </div>
    `;
    // カードがクリックされた時にモーダルを表示
    card.addEventListener("click", () => {
      openModal(product);
    });
    productGrid.appendChild(card);
  });
  
  // モーダルを開く関数
  function openModal(product) {
    modalImage.src = product.image;
    modalImage.alt = product.name;
    modalName.textContent = product.name;
    modalPrice.textContent = product.price;
    modalDescription.textContent = product.description;
    modalStock.textContent = `在庫数：${product.stock}`;
    productModal.style.display = "flex";
  }
  
  // モーダルを閉じる関数
  function closeModal() {
    productModal.style.display = "none";
  }
  
  // 閉じるボタンでモーダルを閉じる
  closeModalBtn.addEventListener("click", closeModal);
  
  // モーダル領域外をクリックしたら閉じる
  window.addEventListener("click", (event) => {
    if (event.target === productModal) {
      closeModal();
    }
  });
  