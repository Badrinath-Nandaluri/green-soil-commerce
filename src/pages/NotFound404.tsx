
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Leaf } from 'lucide-react';

const NotFound404 = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-16">
      <div className="mb-8 h-24 w-24 rounded-full bg-green-100 flex items-center justify-center">
        <Leaf className="h-12 w-12 text-greengold-green" />
      </div>
      <h1 className="text-4xl font-bold mb-2">Page Not Found</h1>
      <p className="text-xl text-gray-600 mb-8 text-center max-w-md">
        Sorry, we couldn't find the page you're looking for.
      </p>
      <Button asChild size="lg">
        <Link to="/" className="flex items-center">
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Home
        </Link>
      </Button>
    </div>
  );
};

export default NotFound404;
