
import React from 'react';
import { ArrowRight, Leaf, Recycle, Package, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Home = () => {
  const processSteps = [
    {
      icon: <Leaf className="h-10 w-10 text-greengold-green" />,
      title: 'Collect',
      description: 'Gather fallen leaves from campus collection bins'
    },
    {
      icon: <Recycle className="h-10 w-10 text-greengold-green" />,
      title: 'Compost',
      description: 'Transform leaves through natural decomposition'
    },
    {
      icon: <Package className="h-10 w-10 text-greengold-green" />,
      title: 'Bag',
      description: 'Package nutrient-rich organic fertilizer'
    },
    {
      icon: <Truck className="h-10 w-10 text-greengold-green" />,
      title: 'Supply',
      description: 'Deliver to local gardens and farms'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center py-32 md:py-48" 
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=900&q=80")' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Turn Campus Leaves into Living Soil
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">
            GreenGold: 100% Natural Manure from Fallen Leaves
          </p>
          <Button 
            asChild
            size="lg" 
            className="bg-green-gold-gradient hover:opacity-90 transition-opacity"
          >
            <Link to="/products">
              Shop & Order
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div 
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="mb-4 p-4 rounded-full bg-gray-100">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why It Matters</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">Sustainability in Action</h3>
              <p className="text-gray-700 mb-4">
                Every year, tons of leaf litter accumulate across campus grounds. Instead of treating this as waste, 
                GreenGold transforms it into valuable, nutrient-rich manure through natural composting processes.
              </p>
              <p className="text-gray-700 mb-4">
                By diverting leaves from landfills, we reduce methane emissions while creating a product that 
                improves soil health, reduces the need for chemical fertilizers, and completes the natural 
                nutrient cycle.
              </p>
              <p className="text-gray-700">
                Our initiative supports campus sustainability goals, provides educational opportunities, 
                and creates connections between our campus and local gardening communities.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80" 
                alt="Sustainable ecosystem" 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-gold-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Grow with GreenGold?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience the difference of 100% natural, campus-made manure for your garden or farm.
          </p>
          <Button 
            asChild
            size="lg" 
            variant="outline" 
            className="bg-white text-greengold-green hover:bg-gray-100"
          >
            <Link to="/products">
              View Products & Order
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
