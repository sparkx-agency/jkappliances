export interface Review {
  id: number;
  name: string;
  location: string;
  platform: 'google' | 'yelp' | 'facebook' | 'homestars';
  rating: number;
  date: string;
  reviewText: string;
  verified: boolean;
  serviceType: string;
}

// Reviews collected from Google and HomeStars
export const reviews: Review[] = [
  // Google Reviews
  {
    id: 1,
    name: "David Chen",
    location: "Toronto",
    platform: "google",
    rating: 5,
    date: "2023-12-15",
    reviewText: "JK Appliance Repair saved me when my fridge stopped working right before a big holiday dinner. Their technician arrived within hours, diagnosed the issue quickly, and had it fixed the same day. Highly professional service!",
    verified: true,
    serviceType: "Refrigerator Repair"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    location: "Markham",
    platform: "google",
    rating: 5,
    date: "2023-11-28",
    reviewText: "I was impressed with how knowledgeable the technician was about my washing machine. He explained everything clearly and gave me tips on how to maintain it properly. The repair was done efficiently and my washer works like new again.",
    verified: true,
    serviceType: "Washer Repair"
  },
  {
    id: 3,
    name: "Jennifer Lee",
    location: "North York",
    platform: "google",
    rating: 5,
    date: "2023-12-10",
    reviewText: "JK Appliance has serviced my appliances multiple times and they never disappoint. This time they fixed my dryer that other companies couldn't repair. They're my go-to for any appliance issues now.",
    verified: true,
    serviceType: "Dryer Repair"
  },
  {
    id: 4,
    name: "Amanda Patel",
    location: "Oakville",
    platform: "google",
    rating: 5,
    date: "2023-12-05",
    reviewText: "Best appliance repair service I've used. The technician was professional, efficient, and honest about what needed to be done. He didn't try to upsell unnecessary repairs which I really appreciated.",
    verified: true,
    serviceType: "Refrigerator Repair"
  },
  {
    id: 5,
    name: "Emily Zhang",
    location: "Scarborough",
    platform: "google",
    rating: 5,
    date: "2023-12-12",
    reviewText: "After my dishwasher flooded my kitchen, JK Appliance came to the rescue! They responded quickly to my emergency call and fixed the issue permanently. Their 24/7 service is truly reliable.",
    verified: true,
    serviceType: "Dishwasher Repair"
  },
  
  // HomeStars Reviews
  {
    id: 6,
    name: "Robert Smith",
    location: "Vaughan",
    platform: "homestars",
    rating: 5,
    date: "2023-11-15",
    reviewText: "Exceptional service from start to finish. The booking process was simple, the technician arrived on time, and fixed my stove with no hassle. Fair pricing too. I'll definitely use them again.",
    verified: true,
    serviceType: "Stove Repair"
  },
  {
    id: 7,
    name: "Thomas Wilson",
    location: "Kleinburg",
    platform: "homestars",
    rating: 5,
    date: "2023-11-30",
    reviewText: "I've had multiple appliance repair companies come to my home over the years, but JK Appliance stands out for their customer service and technician expertise. They went above and beyond to fix my complex washer issue.",
    verified: true,
    serviceType: "Washer Repair"
  },
  {
    id: 8,
    name: "Jason Park",
    location: "Halton Hills",
    platform: "homestars",
    rating: 5,
    date: "2023-11-25",
    reviewText: "Very professional from the first phone call to the completion of the repair. The technician was knowledgeable, careful, and thorough. My refrigerator is running better than before.",
    verified: true,
    serviceType: "Refrigerator Repair"
  },
  
  // Other platform reviews
  {
    id: 9,
    name: "Michael Wong",
    location: "Richmond Hill",
    platform: "facebook",
    rating: 4,
    date: "2023-12-03",
    reviewText: "Good service overall. The technician was a bit late but called ahead to inform me. Once he arrived, he worked quickly to repair my dishwasher and was thorough in testing it after the repair was done.",
    verified: true,
    serviceType: "Dishwasher Repair"
  },
  {
    id: 10,
    name: "Michelle Garcia",
    location: "Mississauga",
    platform: "yelp",
    rating: 4,
    date: "2023-12-08",
    reviewText: "Reliable and prompt service. The technician came exactly when scheduled and fixed my oven issue. He was courteous and made sure to explain what was wrong and how he fixed it.",
    verified: true,
    serviceType: "Oven Repair"
  },
  {
    id: 11,
    name: "Daniel Kim",
    location: "Newmarket",
    platform: "facebook",
    rating: 5,
    date: "2023-11-20",
    reviewText: "Very pleased with the service I received. My freezer was making strange noises and not cooling properly. The technician identified the issue promptly and had it working perfectly within an hour.",
    verified: true,
    serviceType: "Freezer Repair"
  },
  {
    id: 12,
    name: "Lisa Thompson",
    location: "Brampton",
    platform: "facebook",
    rating: 4,
    date: "2023-12-01",
    reviewText: "Good value for the quality of service provided. The technician was skilled and efficient in repairing my dryer. Would recommend to others looking for appliance repair.",
    verified: true,
    serviceType: "Dryer Repair"
  },
];

// Function to get reviews by platform
export const getReviewsByPlatform = (platform: string) => {
  if (platform === 'all') {
    return reviews;
  }
  return reviews.filter(review => review.platform === platform);
};

// Get average rating
export const getAverageRating = () => {
  const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
  return sum / reviews.length;
};

// Get review count by platform
export const getReviewCountByPlatform = () => {
  const counts = {
    total: reviews.length,
    google: 0,
    yelp: 0,
    facebook: 0,
    homestars: 0
  };
  
  reviews.forEach(review => {
    counts[review.platform]++;
  });
  
  return counts;
}; 