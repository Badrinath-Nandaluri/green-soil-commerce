
import React from 'react';
import { Leaf } from 'lucide-react';

const About = () => {
  // These would typically come from a CMS or API, but are hardcoded here for simplicity
  const impactMetrics = {
    leavesCollected: "2,500",
    bagsProduced: "750",
    gardensServed: "125",
  };
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">About GreenGold</h1>
      
      {/* Mission Statement */}
      <section className="mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex justify-center items-center p-3 bg-green-50 rounded-full mb-6">
            <Leaf className="h-8 w-8 text-greengold-green" />
          </div>
          <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-6">
            GreenGold transforms campus leaf waste into premium organic manure, reducing environmental impact while 
            creating a sustainable, nutrient-rich product for local gardens and farms. Our mission is to close the 
            loop on organic waste, promote soil health, and educate our community about the principles of 
            circular economics and environmental stewardship.
          </p>
          <p className="text-lg text-gray-700">
            We believe that what many see as waste is actually a valuable resource. Through our work, we're 
            demonstrating how educational institutions can lead innovation in sustainability practices.
          </p>
        </div>
      </section>
      
      {/* Team/Partners */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Our Partners</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Partner 1 */}
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
            <div className="h-24 w-24 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
              <span className="text-gray-500 text-xl font-semibold">ENV</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Environmental Science Dept.</h3>
            <p className="text-gray-600 text-center">
              Provides scientific expertise and student interns for the composting process.
            </p>
          </div>
          
          {/* Partner 2 */}
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
            <div className="h-24 w-24 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
              <span className="text-gray-500 text-xl font-semibold">FM</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Facilities Management</h3>
            <p className="text-gray-600 text-center">
              Coordinates leaf collection and provides space for composting operations.
            </p>
          </div>
          
          {/* Partner 3 */}
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
            <div className="h-24 w-24 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
              <span className="text-gray-500 text-xl font-semibold">SC</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Sustainability Council</h3>
            <p className="text-gray-600 text-center">
              Provides funding and promotes the initiative across campus and community.
            </p>
          </div>
        </div>
      </section>
      
      {/* Impact Metrics */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Our Impact</h2>
        <div className="bg-green-gold-gradient rounded-lg shadow-md p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Metric 1 */}
            <div className="flex flex-col items-center text-white">
              <span className="text-4xl font-bold mb-2">{impactMetrics.leavesCollected} kg</span>
              <p className="text-lg font-medium">Leaves Diverted</p>
            </div>
            
            {/* Metric 2 */}
            <div className="flex flex-col items-center text-white">
              <span className="text-4xl font-bold mb-2">{impactMetrics.bagsProduced}</span>
              <p className="text-lg font-medium">Bags Produced</p>
            </div>
            
            {/* Metric 3 */}
            <div className="flex flex-col items-center text-white">
              <span className="text-4xl font-bold mb-2">{impactMetrics.gardensServed}</span>
              <p className="text-lg font-medium">Local Gardens Served</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Description */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center">Our Process</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            The GreenGold process begins with the strategic placement of leaf collection bins across campus. 
            During fall months when leaf drop is at its peak, these bins collect tons of organic matter that 
            would otherwise be sent to landfills.
          </p>
          <p>
            The collected leaves are transported to our composting site, where they undergo a carefully monitored 
            decomposition process. We combine the leaves with other organic matter in the optimal ratio to 
            ensure proper decomposition. Our team regularly turns the compost, monitors moisture levels, and 
            checks temperatures to ensure ideal conditions.
          </p>
          <p>
            After 4-6 weeks of composting, the resulting material is screened to remove any larger pieces 
            and then packaged into various sized bags for distribution. The final product is rich in organic 
            matter and nutrients that improve soil structure, water retention, and plant growth.
          </p>
          <p>
            This entire process is overseen by environmental science students and faculty, providing valuable 
            hands-on learning experiences while creating a product that benefits both our campus and the 
            surrounding community.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
