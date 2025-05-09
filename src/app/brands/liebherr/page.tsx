"use client";

import BrandLayout from "@/components/layout/BrandLayout";
import {
  BrandInfo,
  Advantage,
  Testimonial,
  FAQItem,
} from "@/components/layout/BrandLayout";
import { BrandServiceItem } from "@/components/sections/brands/BrandServicesSection";

const liebherrInfo: BrandInfo = {
  id: "liebherr",
  name: "Liebherr",
  logo: "/images/brands/liebherr.webp",
  description:
    "Liebherr is a leading German brand renowned for its high-quality refrigeration and freezing appliances. Offering a range of premium refrigerators, freezers, and wine storage units, Liebherr appliances are known for their advanced technology, energy efficiency, and superior design.",
  history:
    "Founded in Germany in 1949, Liebherr has grown from a construction machinery manufacturer to a leading producer of high-quality refrigeration appliances. The brand is committed to innovation, continuously developing new technologies that improve performance and sustainability.",
  expertise:
    "Our technicians are extensively trained to handle the complexities of Liebherr appliances, including their advanced cooling and freezing technologies. We use only genuine Liebherr parts to ensure your appliances maintain their high efficiency and reliability.",
};

const liebherrServices: BrandServiceItem[] = [
  {
    id: "refrigerator-repair",
    name: "Liebherr Refrigerator Repair",
    description:
      "Specialized repair services for Liebherr refrigerators, including built-in, freestanding, and wine storage models.",
    commonIssues: [
      "Cooling issues",
      "Temperature fluctuations",
      "Ice maker not working",
      "Water dispenser problems",
      "Unusual noises",
      "Door seal problems",
    ],
    image: "/images/services/fridge-repair.png",
  },
  {
    id: "freezer-repair",
    name: "Liebherr Freezer Repair",
    description:
      "Expert repair services for Liebherr freezers, including upright and chest models.",
    commonIssues: [
      "Not freezing",
      "Temperature inconsistencies",
      "Ice buildup",
      "Unusual noises",
      "Door not closing properly",
      "Error codes",
    ],
    image: "/images/services/fridge-repair.png",
  },
];

const advantages: Advantage[] = [
  {
    title: "Liebherr-Certified Technicians",
    description:
      "Our technicians are certified to repair Liebherr appliances, ensuring expert and specialized care.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: "Genuine Liebherr Replacement Parts",
    description:
      "We use authentic Liebherr parts to ensure your appliances maintain their high performance and longevity.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
        />
      </svg>
    ),
  },
  {
    title: "Warranty-Protected Liebherr Repairs",
    description:
      "All our Liebherr appliance repairs are backed by a comprehensive warranty, giving you added peace of mind.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: "Advanced Knowledge of Liebherr Technology",
    description:
      "We have detailed knowledge of Liebherr’s advanced cooling and freezing technologies, ensuring your appliances are in expert hands.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
];

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "The technician who repaired our Liebherr refrigerator was incredibly knowledgeable. The service was quick, and the fridge is working perfectly again.",
    author: "Alex M.",
    location: "Toronto",
    rating: 5,
  },
  {
    id: 2,
    text: "I was very impressed with the service I received for my Liebherr freezer. The technician was professional and efficient.",
    author: "Sarah L.",
    location: "North York",
    rating: 5,
  },
  {
    id: 3,
    text: "Our Liebherr wine storage unit was having temperature issues, but the repair team fixed it effectively. Great service!",
    author: "Robert D.",
    location: "Vaughan",
    rating: 5,
  },
];

const faqs: FAQItem[] = [
  {
    question: "How quickly can you repair my Liebherr appliance?",
    answer:
      "Most Liebherr appliance repairs are completed within a single visit, typically taking 1-2 hours. We will provide a clear timeline for more complex repairs or if parts need to be ordered.",
  },
  {
    question: "Do you repair Liebherr’s high-end refrigeration appliances?",
    answer:
      "Yes, our technicians are specially trained to handle Liebherr’s high-end refrigerators, freezers, and wine storage units, addressing their advanced technology and standard mechanical issues.",
  },
  {
    question: "What type of warranty do you offer on Liebherr repairs?",
    answer:
      "We offer a 90-day warranty on both parts and labor for all Liebherr appliance repairs. Should you experience the same issue within this period, we will resolve it at no extra cost.",
  },
  {
    question: "Do you use genuine Liebherr parts for repairs?",
    answer:
      "Yes, we use only genuine Liebherr replacement parts to ensure the optimal performance and long-lasting reliability of your appliances.",
  },
  {
    question: "How do I decide whether to repair or replace my Liebherr appliance?",
    answer:
      "Our technicians will assess your appliance and provide you with an honest recommendation. We take into account the appliance’s age, the cost of repair, and the availability of parts before making a suggestion.",
  },
];

const relatedBrands = [
  "Sub-Zero",
  "Miele",
  "Bosch",
  "Gaggenau",
  "Thermador",
  "Viking",
];

export default function LiebherrBrandPage() {
  return (
    <BrandLayout
      brandInfo={liebherrInfo}
      services={liebherrServices}
      advantages={advantages}
      testimonials={testimonials}
      faqs={faqs}
      relatedBrands={relatedBrands}
      primaryColor="#00468f"
      secondaryColor="#f5f5f7"
    />
  );
}