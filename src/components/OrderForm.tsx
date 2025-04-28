
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

// Define form schema
const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters long' }),
  contact: z.string().min(5, { message: 'Email or phone number required' }),
  quantity: z.string().min(1, { message: 'Please select a quantity' }),
  deliveryOption: z.enum(['pickup', 'campus', 'offcampus'], { required_error: 'Please select a delivery option' }),
  deliveryAddress: z.string().optional(),
  notes: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface OrderFormProps {
  product: {
    id: string;
    name: string;
    weight: string;
    price: string;
  };
  onSubmit: (data: FormValues) => void;
  onCancel: () => void;
}

const OrderForm: React.FC<OrderFormProps> = ({ product, onSubmit, onCancel }) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      contact: '',
      quantity: '1',
      deliveryOption: 'pickup',
      deliveryAddress: '',
      notes: '',
    },
  });
  
  const deliveryOption = form.watch('deliveryOption');
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
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
          
          {/* Contact Field */}
          <FormField
            control={form.control}
            name="contact"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email or Phone</FormLabel>
                <FormControl>
                  <Input placeholder="Your email or phone number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          {/* Quantity Field */}
          <FormField
            control={form.control}
            name="quantity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Quantity</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select quantity" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 10].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num} {num === 1 ? 'bag' : 'bags'}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormDescription>
                  {product.weight} per bag, {product.price} each
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          
          {/* Delivery Option */}
          <FormField
            control={form.control}
            name="deliveryOption"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Delivery Option</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="pickup" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Pickup (from campus location)
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="campus" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Campus Delivery (free)
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="offcampus" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Off-campus Delivery (additional fee may apply)
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          {/* Delivery Address - shown conditionally */}
          {deliveryOption !== 'pickup' && (
            <FormField
              control={form.control}
              name="deliveryAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Delivery Address/Location</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder={deliveryOption === 'campus' 
                        ? "Building name, room/office number, etc." 
                        : "Full address for delivery"} 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          
          {/* Notes Field */}
          <FormField
            control={form.control}
            name="notes"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Additional Notes (Optional)</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Any special instructions or requests" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <div className="flex space-x-4 justify-end">
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit" className="bg-green-gold-gradient hover:opacity-90 transition-opacity">
            Submit Order
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default OrderForm;
