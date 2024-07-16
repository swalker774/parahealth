import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

const testimonials = [
  {
    name: 'ZB',
    text: 'Dan is an exceptional massage therapist who truly stands out in his field. After struggling with a shoulder injury for the past two years and visiting numerous massage and physical therapists without success, I was fortunate to find Dan. In just two months of working with him, I\'ve experienced significant improvements in my shoulder mobility and overall comfort. Dan\'s expertise and dedication have been instrumental in my recovery journey. I highly recommend him to anyone seeking effective and personalized care.'
  },
  {
    name: 'ARP',
    text: 'Daniel, at Para Health Massage, is an exceptional massage therapist, characterized by unparalleled care, flexibility, and a genuine commitment to meeting the diverse needs of his clients. His attentive and personalized approach creates a unique and deeply satisfying experience, making him stand out in the world of massage therapy. Daniel’s dedication to ensuring each client\'s well-being showcases his passion for the profession, earning him my highest recommendation for those seeking a truly exceptional and tailored massage experience.'
  },
  {
    name: 'BUR',
    text: 'Just had the best deep tissue massage I’ve ever had. So much time and attention to my worst problem areas and feel relief in areas I never get from other massages. Would 100% recommend and will be coming back soon.'
  },
  {
    name: 'AK',
    text: 'I’m a pro MMA fighter and Dan has literally changed my life. I used to feel very stiff all over and now I feel 5 years younger! It is definitely worth your time and money 💯.'
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <div className="w-full max-w-2xl mx-auto py-16 relative" {...handlers}>
      <div className="overflow-hidden">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0'} absolute top-0 left-0 w-full`}
            style={{ display: index === currentIndex ? 'block' : 'none' }}
          >
            <div className="p-4 text-left">
              <p className="text-xl mb-4">&quot;{testimonial.text}&quot;</p>
              <p className="text-lg font-bold">- {testimonial.name}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={handlePrev} className="hidden sm:block absolute top-1/2 left-[-3rem] transform -translate-y-1/2 p-4 text-3xl bg-gray-200 rounded-full">‹</button>
      <button onClick={handleNext} className="hidden sm:block absolute top-1/2 right-[-3rem] transform -translate-y-1/2 p-4 text-3xl bg-gray-200 rounded-full">›</button>
    </div>
  );
};

export default Testimonials;
