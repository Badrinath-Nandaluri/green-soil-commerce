
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MessageSquare, PhoneCall } from 'lucide-react';
import { toast } from 'sonner';

// Define form schema
const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters long' }),
  email: z.string().email({ message: 'Invalid email address' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters long' }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });
  
  const onSubmit = (data: FormValues) => {
    console.log('Contact form submitted:', data);
    // In a real app, you would send this to your form endpoint (Netlify/Formspree)
    toast.success('Your message has been sent! We\'ll get back to you soon.');
    form.reset();
  };
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      <p className="text-lg text-center text-gray-700 mb-12 max-w-3xl mx-auto">
        Have questions about our products or want to place a special order? 
        Get in touch with us and we'll be happy to help.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Contact Information */}
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
          
          {/* Contact Methods */}
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                <Mail className="h-6 w-6 text-greengold-green" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Email Us</h3>
                <p className="mt-1 text-gray-600">
                  <a 
                    href="mailto:greengold@yourcollege.edu"
                    className="hover:text-greengold-green transition-colors"
                  >
                    greengold@yourcollege.edu
                  </a>
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  We typically respond within 24 hours
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                <PhoneCall className="h-6 w-6 text-greengold-green" />
              </div>
              <div>
                <h3 className="text-lg font-medium">WhatsApp</h3>
                <p className="mt-1 text-gray-600">
                  <a 
                    href="https://wa.me/91XXXXXXXXXX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-greengold-green transition-colors"
                  >
                    Message us on WhatsApp
                  </a>
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Available Monday-Friday, 9am to 5pm
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                <MessageSquare className="h-6 w-6 text-greengold-green" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Visit Us</h3>
                <p className="mt-1 text-gray-600">
                  Environmental Science Building, Room 103<br />
                  North Campus<br />
                  Your College Name<br />
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Office hours: Monday-Friday, 10am to 4pm
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Field */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              {/* Email Field */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Your email address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              {/* Message Field */}
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="How can we help you?" 
                        className="min-h-[150px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button 
                type="submit" 
                className="w-full bg-green-gold-gradient hover:opacity-90 transition-opacity"
              >
                Send Message
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
