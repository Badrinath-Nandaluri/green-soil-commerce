
import React, { useState } from 'react';
import { Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import OrderForm from '@/components/OrderForm';
import { toast } from 'sonner';

const products = [
  {
    id: 'small-bag',
    name: 'Small Bag',
    weight: '2 kg',
    price: '₹150',
    nutrients: 'N-1.5%, P-0.8%, K-1.2%',
    description: 'Perfect for small gardens, indoor plants, or trying our product for the first time.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80'
  },
  {
    id: 'medium-bag',
    name: 'Medium Bag',
    weight: '5 kg',
    price: '₹325',
    nutrients: 'N-1.5%, P-0.8%, K-1.2%',
    description: 'Ideal for medium-sized garden beds or multiple plantings throughout the season.',
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80'
  },
  {
    id: 'bulk-bag',
    name: 'Bulk Bag',
    weight: '10 kg',
    price: '₹600',
    nutrients: 'N-1.5%, P-0.8%, K-1.2%',
    description: 'Our most economical option for larger gardens, farms, or community projects.',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80'
  }
];

const Products = () => {
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  
  const handleOrderClick = (product: typeof products[0]) => {
    setSelectedProduct(product);
    setShowOrderForm(true);
    // Scroll to form
    setTimeout(() => {
      document.getElementById('order-form-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };
  
  const handleOrderSubmit = (formData: Record<string, any>) => {
    console.log('Order submitted:', { product: selectedProduct, ...formData });
    // In a real app, you would send this to your form endpoint (Netlify/Formspree)
    toast.success(`Thank you! We'll contact you at ${formData.contact} to confirm your order.`);
    setShowOrderForm(false);
  };
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Products</h1>
      <p className="text-lg text-center text-gray-700 mb-12 max-w-3xl mx-auto">
        GreenGold manure is 100% natural, nutrient-rich, and perfect for promoting healthy plant growth. 
        Choose the size that works best for your gardening needs.
      </p>
      
      {/* Product Catalog */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden">
              <img 
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>{product.name}</CardTitle>
                  <div className="bg-greengold-green text-white px-3 py-1 rounded-full text-sm font-medium">
                    {product.price}
                  </div>
                </div>
                <CardDescription>{product.weight}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <span className="text-sm font-semibold text-gray-700">Nutrient Content:</span>
                  <span className="ml-2 text-sm">{product.nutrients}</span>
                </div>
                <p className="text-gray-600">{product.description}</p>
              </CardContent>
              <CardFooter>
                <Button 
                  onClick={() => handleOrderClick(product)}
                  className="w-full bg-green-gold-gradient hover:opacity-90 transition-opacity"
                >
                  <Package className="mr-2 h-4 w-4" />
                  Order Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
      
      {/* Order Form Section */}
      <section id="order-form-section" className="scroll-mt-24">
        {showOrderForm && selectedProduct && (
          <div className="bg-gray-50 rounded-lg p-6 md:p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <Package className="mr-2 h-6 w-6 text-greengold-green" />
              Order {selectedProduct.name}
            </h2>
            <OrderForm 
              product={selectedProduct} 
              onSubmit={handleOrderSubmit} 
              onCancel={() => setShowOrderForm(false)}
            />
          </div>
        )}
        
        {!showOrderForm && (
          <div className="text-center">
            <p className="text-lg mb-4">Ready to place an order?</p>
            <p className="text-gray-600 mb-8">Select a product above to start your order.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Products;
