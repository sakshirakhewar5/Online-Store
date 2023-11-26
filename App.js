document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.querySelector('.products');

    // Function to fetch products
    const fetchProducts = () => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                data.forEach(product => {
                    const productCard = createProductCard(product);
                    productsContainer.appendChild(productCard);
                });
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    };

    // Function to create a product card
    const createProductCard = product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product');

        const image = document.createElement('img');
        image.src = product.image;
        image.alt = product.title;

        const title = document.createElement('h3');
        title.textContent = product.title;

        const price = document.createElement('p');
        price.textContent = `$${product.price}`;

        productCard.appendChild(image);
        productCard.appendChild(title);
        productCard.appendChild(price);

        return productCard;
    };

    // Fetch products on page load
    fetchProducts();

    // Example: Adding a new product
    const addNewProduct = () => {
        const newProduct = {
            title: 'New Product',
            price: 25.99,
            image: 'https://via.placeholder.com/150',
            category: 'electronics',
        };

        fetch('https://fakestoreapi.com/products', {
                method: 'POST',
                body: JSON.stringify(newProduct),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(response => response.json())
            .then(data => {
                const newProductCard = createProductCard(data);
                productsContainer.appendChild(newProductCard);
            })
            .catch(error => {
                console.error('Error adding new product:', error);
            });
    };

    // Example: Deleting a product
    const deleteProduct = productId => {
        fetch(`https://fakestoreapi.com/products/${productId}`, {
                method: 'DELETE',
            })
            .then(response => {
                if (response.ok) {
                    const productToDelete = document.getElementById(productId);
                    productToDelete.remove();
                } else {
                    throw new Error('Failed to delete product');
                }
            })
            .catch(error => {
                console.error('Error deleting product:', error);
            });
    };

    document.addEventListener('DOMContentLoaded', () => {
        // ... previous code ...

        // Function to fetch cart data
        const fetchCartData = () => {
            fetch('https://fakestoreapi.com/carts')
                .then(response => response.json())
                .then(cartData => {
                    console.log(cartData);
                    /
                })
                .catch(error => {
                    console.error('Error fetching cart data:', error);
                });
        };


        fetchCartData();

    });

});