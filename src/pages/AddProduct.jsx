import React, { useEffect, useState } from 'react';

const AddProductForm = () => {
    const [product, setProduct] = useState({
        productName: '',
        price: 0,
        img: '',
        description: '',
        size: [],
        colors: [],
        freeDeliveryReturns: false,
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
    };

    const handleSizeChange = (e) => {
        const { value, checked } = e.target;
        setProduct((prevProduct) => {
            if (checked) {
                return { ...prevProduct, size: [...prevProduct.size, value] };
            } else {
                return {
                    ...prevProduct,
                    size: prevProduct.size.filter((size) => size !== value),
                };
            }
        });
    };

    const handleColorChange = (e) => {
        const { value, checked } = e.target;
        setProduct((prevProduct) => {
            if (checked) {
                return { ...prevProduct, colors: [...prevProduct.colors, value] };
            } else {
                return {
                    ...prevProduct,
                    colors: prevProduct.colors.filter((color) => color !== value),
                };
            }
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle the submission logic here, e.g., sending the data to a backend server
        console.log('Product Submitted:', product);
            fetch('http://localhost:3000/addProduct', {
                method:'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(product)
            })
            .then(res => res.json())
            .then(data => console.log(data))
    
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md">
            <h2 className="text-2xl font-bold mb-4">Add Product</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="productName" className="block text-sm font-medium text-gray-600">
                        Product Name
                    </label>
                    <input
                        type="text"
                        id="productName"
                        name="productName"
                        value={product.productName}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="price" className="block text-sm font-medium text-gray-600">
                        Price 20
                    </label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                        step="0.01"
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="img" className="block text-sm font-medium text-gray-600">
                        Image URL
                    </label>
                    <input
                        type="url"
                        id="img"
                        name="img"
                        value={product.img}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-600">
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        value={product.description}
                        onChange={handleChange}
                        rows="4"
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                    ></textarea>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">Size</label>
                    {['XS', 'S', 'M', 'L'].map((size) => (
                        <div key={size} className="flex items-center">
                            <input
                                type="checkbox"
                                id={`size-${size}`}
                                value={size}
                                checked={product.size.includes(size)}
                                onChange={handleSizeChange}
                                className="mr-2"
                            />
                            <label htmlFor={`size-${size}`}>{size}</label>
                        </div>
                    ))}
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">Colors</label>
                    {['Navy Blue', 'Gray', 'Black'].map((color) => (
                        <div key={color} className="flex items-center">
                            <input
                                type="checkbox"
                                id={`color-${color}`}
                                value={color}
                                checked={product.colors.includes(color)}
                                onChange={handleColorChange}
                                className="mr-2"
                            />
                            <label htmlFor={`color-${color}`}>{color}</label>
                        </div>
                    ))}
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">Free Delivery & Returns</label>
                    <input
                        type="checkbox"
                        id="freeDeliveryReturns"
                        name="freeDeliveryReturns"
                        checked={product.freeDeliveryReturns}
                        onChange={() =>
                            setProduct((prevProduct) => ({
                                ...prevProduct,
                                freeDeliveryReturns: !prevProduct.freeDeliveryReturns,
                            }))
                        }
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                >
                    Add Product
                </button>
            </form>
        </div>
    );
};

export default AddProductForm;
