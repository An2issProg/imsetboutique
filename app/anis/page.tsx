'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaShoppingCart, FaTrash } from 'react-icons/fa';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from 'next/image';

// Product types
type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
};

type NewProduct = Omit<Product, 'id'>;

export default function Test() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cartCount, setCartCount] = useState(0);
  const [theme, setTheme] = useState('light');

  const [newProduct, setNewProduct] = useState<NewProduct>({
    title: '',
    description: '',
    price: 0,
    image: '',
    category: ''
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editingProductId, setEditingProductId] = useState<number | null>(null);

  const handleAddToCart = (product: Product) => {
    setCartCount(cartCount + 1);
    console.log('Product added to cart:', product.title);
  };

  const fetchApi = async () => {
    try {
      const { data } = await axios.get<Product[]>('https://fakestoreapi.com/products');
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.documentElement.classList.remove(theme === 'light' ? 'dark' : 'light');
    document.documentElement.classList.add(theme);
  }, [theme]);

  useEffect(() => {
    fetchApi();
  }, []);

  const handleDelete = (id: number) => {
    setProducts(products.filter(p => p.id !== id));
    console.log(`Product with ID ${id} deleted.`);
  };

  const handleEdit = (product: Product) => {
    setNewProduct({
      title: product.title,
      description: product.description,
      price: product.price,
      image: product.image,
      category: product.category,
    });
    setIsEditing(true);
    setEditingProductId(product.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: name === 'price' ? parseFloat(value) : value
    });
  };

  const handleAddOrUpdateProduct = (e: React.FormEvent) => {
    e.preventDefault();

    if (isEditing && editingProductId !== null) {
      setProducts(prev =>
        prev.map(product =>
          product.id === editingProductId
            ? { ...product, ...newProduct }
            : product
        )
      );
      console.log(`Product with ID ${editingProductId} updated.`);
    } else {
      const newProductData: Product = {
        id: products.length + 1,
        ...newProduct,
      };
      setProducts([...products, newProductData]);
      console.log('Product added:', newProductData);
    }

    setNewProduct({ title: '', description: '', price: 0, image: '', category: '' });
    setIsEditing(false);
    setEditingProductId(null);
  };

  return (
    <div className={`mx-auto px-4 py-8 min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Banner */}
      <div className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 py-3 text-center animate-pulse shadow-md rounded-md mb-6">
        <p className="text-white font-semibold text-lg tracking-wide">
          🎉 Black Friday Sale! Get up to 70% OFF on all items! 🎉
        </p>
      </div>

      {/* Theme toggle */}
      <button
        onClick={toggleTheme}
        className="absolute top-4 right-4 p-2 bg-purple-300 text-white rounded-full focus:outline-none transition-all duration-300 hover:bg-yellow-700 dark:bg-yellow-500 dark:text-black"
      >
        {theme === 'light' ? 'dark mode' : 'light mode'}
      </button>

      {/* Form */}
      <form onSubmit={handleAddOrUpdateProduct} className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{isEditing ? 'Modifier le produit' : 'Ajouter un produit'}</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium">Titre</label>
            <input
              type="text"
              name="title"
              value={newProduct.title}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md bg-white text-gray-900 dark:bg-gray-700 dark:text-white dark:border-gray-600"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Prix</label>
            <input
              type="number"
              name="price"
              value={newProduct.price}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md bg-white text-gray-900 dark:bg-gray-700 dark:text-white dark:border-gray-600"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Image URL</label>
            <input
              type="text"
              name="image"
              value={newProduct.image}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md bg-white text-gray-900 dark:bg-gray-700 dark:text-white dark:border-gray-600"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Catégorie</label>
            <input
              type="text"
              name="category"
              value={newProduct.category}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md bg-white text-gray-900 dark:bg-gray-700 dark:text-white dark:border-gray-600"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium">Description</label>
            <textarea
              name="description"
              value={newProduct.description}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md bg-white text-gray-900 dark:bg-gray-700 dark:text-white dark:border-gray-600"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 transition-all"
        >
          {isEditing ? 'Mettre à jour' : 'Ajouter Produit'}
        </button>
      </form>

      {/* Product list */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map(product => (
          <Card
            key={product.id}
            className={`flex flex-col shadow-lg rounded-lg overflow-hidden ${
              theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'
            }`}
          >
            <div className="relative h-72 w-full">
              <Image
                src={product.image}
                alt={product.title}
                layout="fill"
                objectFit="contain"
                className="rounded-t-lg"
              />
            </div>
            <CardHeader className="p-4 flex-grow">
              <CardTitle className="text-xl font-semibold">{product.title}</CardTitle>
              <CardDescription className="text-sm">{product.description}</CardDescription>
            </CardHeader>
            <CardContent className="p-4 flex-grow">
              <p>{product.category}</p>
            </CardContent>
            <CardFooter className="p-4 mt-auto flex flex-wrap gap-2 justify-between items-center">
              <p className="text-lg font-bold">{`$${product.price.toFixed(2)}`}</p>

              <button
                className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 active:bg-blue-800"
                onClick={() => handleAddToCart(product)}
              >
                <FaShoppingCart className="mr-1" /> Ajouter
              </button>

              <button
                className="flex items-center text-red-500 bg-red-100 hover:bg-red-200 active:bg-red-300 dark:bg-red-600 dark:text-white dark:hover:bg-red-700 px-4 py-2 rounded-md"
                onClick={() => handleDelete(product.id)}
              >
                <FaTrash className="mr-2" /> Supprimer
              </button>

              <button
                className="flex items-center text-yellow-600 bg-yellow-100 hover:bg-yellow-200 active:bg-yellow-300 dark:bg-yellow-500 dark:text-black dark:hover:bg-yellow-400 px-4 py-2 rounded-md"
                onClick={() => handleEdit(product)}
              >
                ✏️ Modifier
              </button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Cart badge */}
      <div className="fixed bottom-4 right-4 bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg dark:bg-green-400 dark:text-black">
        <span className="items-center flex">
          {cartCount} <FaShoppingCart className="w-7 h-6" />
        </span>
      </div>
    </div>
  );
}
