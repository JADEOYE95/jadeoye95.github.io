const products = [
    { 
        name: "Moisturizing Shampoo", 
        price: 12.99, 
        rating: 4.5,
        image: "https://via.placeholder.com/150"
    },
    { 
        name: "Volumizing Conditioner", 
        price: 14.99, 
        rating: 4.7,
        image: "https://via.placeholder.com/150"
    },
    { 
        name: "Leave-in Hair Serum", 
        price: 19.99, 
        rating: 4.6,
        image: "https://via.placeholder.com/150"
    },
    { 
        name: "Hair Repair Mask", 
        price: 16.50, 
        rating: 4.8,
        image: "https://via.placeholder.com/150"
    },
    { 
        name: "Anti-Frizz Spray", 
        price: 11.99, 
        rating: 4.4,
        image: "https://via.placeholder.com/150"
    },
    { 
        name: "Curl Enhancing Cream", 
        price: 18.99, 
        rating: 4.9,
        image: "https://via.placeholder.com/150"
    }
]

function displayProducts(productList) {
    const productContainer = document.getElementById('products');
    productContainer.innerHTML = ''; 

    productList.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product-item';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <span class="product-name">${product.name}</span>
            <span class="product-price">$${product.price.toFixed(2)}</span>
            <span class="product-rating">Rating: ${product.rating} &#9733;</span>
        `;
        productContainer.appendChild(productDiv);
    });
}


displayProducts(products);


function sortProducts(criteria) {
    let sortedProducts = [...products];

    switch(criteria) {
        case 'price-asc':
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
        case 'rating-asc':
            sortedProducts.sort((a, b) => a.rating - b.rating);
            break;
        case 'rating-desc':
            sortedProducts.sort((a, b) => b.rating - a.rating);
            break;
    }

    displayProducts(sortedProducts);
}

