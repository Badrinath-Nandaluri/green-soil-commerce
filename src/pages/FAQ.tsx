
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Where are the leaf-collection bins located?",
      answer: "Leaf-collection bins are strategically placed across campus, including near the Main Quad, outside the Science Building, next to the Student Union, near the Library, and by all major residence halls. Each bin is clearly marked with the GreenGold logo. If you have suggestions for additional bin locations, please contact us."
    },
    {
      question: "How long does composting take?",
      answer: "Our composting process typically takes 4-6 weeks from collection to finished product. The timeline can vary slightly depending on seasonal conditions, leaf types, and other factors. We monitor the compost piles regularly to ensure optimal decomposition and nutrient development."
    },
    {
      question: "What are the nutrient contents?",
      answer: "Our GreenGold manure typically contains N-1.5%, P-0.8%, K-1.2%, along with essential micronutrients and beneficial soil organisms. The exact nutrient profile may vary slightly between batches due to the natural decomposition process and leaf composition, but we test each batch to ensure consistent quality."
    },
    {
      question: "How do I pay?",
      answer: "We offer several payment options for your convenience: Cash on Delivery (COD), UPI transfer, or online payment through our payment partner. For campus deliveries, we also accept department charge codes for faculty and staff orders."
    },
    {
      question: "Can I visit the compost site?",
      answer: "Yes! We welcome visitors to our compost site during our regular visiting hours: Monday to Friday, 10am to 4pm. Tours are available on Wednesdays at 2pm, or by appointment. Please contact us at greengold@yourcollege.edu to schedule a group visit or special tour time."
    },
    {
      question: "How should I use the manure in my garden?",
      answer: "For best results, mix GreenGold manure into your soil at a ratio of 1:3 (one part manure to three parts soil) before planting. For established plants, you can use it as a top dressing around the base of plants, keeping it from directly touching stems. Water thoroughly after application. One 2kg bag typically covers about 4-6 square meters of garden area."
    },
    {
      question: "Do you offer bulk discounts?",
      answer: "Yes, we offer discounts for bulk orders over 20 bags or for community garden projects. Please contact us directly to discuss your specific needs and we'll be happy to provide a custom quote."
    },
    {
      question: "Is the manure suitable for all plant types?",
      answer: "GreenGold manure is excellent for most garden plants, vegetables, shrubs, and trees. It's particularly beneficial for leafy greens and heavy-feeding plants. For acid-loving plants like blueberries or rhododendrons, we recommend mixing with an acidic amendment. For very sensitive seedlings, dilute with additional soil before use."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h1>
      <p className="text-lg text-center text-gray-700 mb-12 max-w-3xl mx-auto">
        Find answers to commonly asked questions about GreenGold manure, our process, and how to use our products.
      </p>
      
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      
      <div className="mt-16 text-center">
        <p className="text-lg mb-4">Still have questions?</p>
        <p className="text-gray-700">
          Feel free to <a href="/contact" className="text-greengold-green font-medium hover:underline">contact us</a> and we'll be happy to help!
        </p>
      </div>
    </div>
  );
};

export default FAQ;
