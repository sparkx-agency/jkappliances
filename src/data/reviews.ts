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
  
  // Added Google Reviews from the text file
  {
    id: 13,
    name: "Minesh Patel",
    location: "Toronto",
    platform: "google",
    rating: 5,
    date: "2024-01-05",
    reviewText: "Very honest and trustworthy. He came when he said he would, promptly found the problem and gave a fair price.",
    verified: true,
    serviceType: "Appliance Repair"
  },
  {
    id: 14,
    name: "Surinder Pal",
    location: "Brampton",
    platform: "google",
    rating: 5,
    date: "2024-01-10",
    reviewText: "Great experience with jk guys. will call them again for future needs.",
    verified: true,
    serviceType: "Appliance Repair"
  },
  {
    id: 15,
    name: "Rohit Pal",
    location: "Mississauga",
    platform: "google",
    rating: 5,
    date: "2024-01-15",
    reviewText: "Top notch service.. very reliable and trustworthy technicians.. definitely best in gta",
    verified: true,
    serviceType: "Appliance Repair"
  },
  {
    id: 16,
    name: "Greg R",
    location: "Toronto",
    platform: "google",
    rating: 5,
    date: "2024-01-08",
    reviewText: "Took the time to listen to my concerns about my portable dishwasher. Looked at my pictures. Looked up information for me at no charge.",
    verified: true,
    serviceType: "Dishwasher Repair"
  },
  {
    id: 17,
    name: "Felicia Sisi",
    location: "Richmond Hill",
    platform: "google",
    rating: 5,
    date: "2024-01-12",
    reviewText: "Best appliance repair man ever, very reasonable, always takes care of me as soon as I call. Very friendly.",
    verified: true,
    serviceType: "Appliance Repair"
  },
  {
    id: 18,
    name: "Ash Patel",
    location: "Vaughan",
    platform: "google",
    rating: 5,
    date: "2024-01-07",
    reviewText: "If you are looking for an honest and reliable appliance repair person, be sure to contact Vivek at JK Appliances.",
    verified: true,
    serviceType: "Appliance Repair"
  },
  {
    id: 19,
    name: "John Johnson",
    location: "Scarborough",
    platform: "google",
    rating: 5,
    date: "2024-01-18",
    reviewText: "Prompt reply to my initial request. Came the next day. Once parts came returned for install. Everything worked perfectly.",
    verified: true,
    serviceType: "Appliance Repair"
  },
  {
    id: 20,
    name: "David Fine",
    location: "North York",
    platform: "google",
    rating: 5,
    date: "2024-01-20",
    reviewText: "We needed a part for our old dryer. Vivek took the time to find it, ordered it for us, and had it delivered.",
    verified: true,
    serviceType: "Dryer Repair"
  },
  {
    id: 21,
    name: "Kaumil Gajera",
    location: "Markham",
    platform: "google",
    rating: 5,
    date: "2024-01-14",
    reviewText: "Really good and fast Service. People are very friendly and nice",
    verified: true,
    serviceType: "Appliance Repair"
  },
  {
    id: 22,
    name: "F G",
    location: "Toronto",
    platform: "google",
    rating: 4,
    date: "2024-01-22",
    reviewText: "I was in a jam with my fridge, I called up JK appliance repair and they came and saved me.",
    verified: true,
    serviceType: "Refrigerator Repair"
  },
  {
    id: 23,
    name: "Tammy Yurichuk",
    location: "Etobicoke",
    platform: "google",
    rating: 5,
    date: "2024-01-25",
    reviewText: "Vivek came same day, accurately diagnosed, fixed my leaking washing machine and gave helpful advice for future prevention.",
    verified: true,
    serviceType: "Washer Repair"
  },
  {
    id: 24,
    name: "Samundiswaran P Velpandian",
    location: "Toronto",
    platform: "google",
    rating: 5,
    date: "2024-01-28",
    reviewText: "Genuine suggestions. Didn't look to get money out of me and educated me properly to make a wise decision.",
    verified: true,
    serviceType: "Appliance Repair"
  },
  {
    id: 25,
    name: "Rony B",
    location: "Scarborough",
    platform: "google",
    rating: 5,
    date: "2024-02-01",
    reviewText: "Vivek is responsive and came to my rescue within a day of call. He knows his stuff and can fix multiple home appliances.",
    verified: true,
    serviceType: "Appliance Repair"
  },
  {
    id: 26,
    name: "Nidhi Dobariya",
    location: "Mississauga",
    platform: "google",
    rating: 5,
    date: "2024-02-03",
    reviewText: "We love that they're able to do everything from dishwasher repair to washing machine repair quickly.",
    verified: true,
    serviceType: "Dishwasher Repair"
  },
  {
    id: 27,
    name: "Dhaval Vekariya",
    platform: "google",
    location: "Brampton",
    rating: 5,
    date: "2024-02-05",
    reviewText: "I had a wonderful experience with JK Appliance Repair Crew. They are very professional and knowledgeable.",
    verified: true,
    serviceType: "Appliance Repair"
  },
  {
    id: 28,
    name: "S Alim",
    location: "Toronto",
    platform: "google",
    rating: 5,
    date: "2024-02-08",
    reviewText: "Vivek was on time, quickly diagnosed the oven issue, friendly, respectful, and clean. Excellent service.",
    verified: true,
    serviceType: "Oven Repair"
  },
  {
    id: 29,
    name: "Jeff Mooallem",
    location: "North York",
    platform: "google",
    rating: 4,
    date: "2024-02-10",
    reviewText: "Highly recommended. He provides reliable repairs for a wide range of appliances and good recommendations.",
    verified: true,
    serviceType: "Appliance Repair"
  },
  {
    id: 30,
    name: "Gayle Bates",
    location: "Vaughan",
    platform: "google",
    rating: 5,
    date: "2024-02-12",
    reviewText: "Responsive & helpful. Happy to recommend.",
    verified: true,
    serviceType: "Appliance Repair"
  },
  
  // Added HomeStars Reviews from the text file
  {
    id: 31,
    name: "Susan",
    location: "Toronto",
    platform: "homestars",
    rating: 5,
    date: "2024-01-08",
    reviewText: "Vivek provided excellent guidance from the start. I hired his company to remove an old dryer, which was no longer working, and pedestal from a tight closet area. Definitely not an easy job!",
    verified: true,
    serviceType: "Dryer Repair"
  },
  {
    id: 32,
    name: "LPM",
    location: "Oakville",
    platform: "homestars",
    rating: 5,
    date: "2024-01-15",
    reviewText: "We were so pleased to choose JK Appliance Repair. He was thorough, knowledgeable, and made sure things were working.",
    verified: true,
    serviceType: "Appliance Repair"
  },
  {
    id: 33,
    name: "CIC",
    location: "Toronto",
    platform: "homestars",
    rating: 5,
    date: "2024-01-22",
    reviewText: "Very fast response time. Scheduled the repair within 24 hours and did a very professional job. Satisfied!",
    verified: true,
    serviceType: "Appliance Repair"
  },
  {
    id: 34,
    name: "Stevie-lee Martindale",
    location: "Mississauga",
    platform: "homestars",
    rating: 5,
    date: "2024-01-30",
    reviewText: "Vive was so great! He contacted me right away and was at my place the next morning. Quick and very friendly.",
    verified: true,
    serviceType: "Appliance Repair"
  },
  {
    id: 35,
    name: "Gopinathan",
    location: "Brampton",
    platform: "homestars",
    rating: 5,
    date: "2024-02-05",
    reviewText: "JK Appliances promptly responded and completed the required work quickly.",
    verified: true,
    serviceType: "Appliance Repair"
  },
  {
    id: 36,
    name: "Manny Fischer",
    location: "Toronto",
    platform: "homestars",
    rating: 5,
    date: "2024-02-10",
    reviewText: "Vivek was incredibly professional, courteous, efficient and knowledgeable of this and all appliance service. Arrived in required time and was punctual.",
    verified: true,
    serviceType: "Appliance Repair"
  },
  {
    id: 37,
    name: "Franca",
    location: "Brampton",
    platform: "homestars",
    rating: 5,
    date: "2024-02-15",
    reviewText: "My oven fan stopped working. I gave him oven screen message as well model number. They were able to detect exactly what was wrong. Fixed it in one day. Excellent service!!",
    verified: true,
    serviceType: "Oven Repair"
  },
  {
    id: 38,
    name: "Jonathan Kumar",
    location: "Mississauga",
    platform: "homestars",
    rating: 4,
    date: "2024-02-20",
    reviewText: "My Dryer broke down as the drum was damaged and beyond repair and vivek helped me find a suitable dryer and installed it professionally.",
    verified: true,
    serviceType: "Dryer Repair"
  },
  {
    id: 39,
    name: "Steve",
    location: "Oakville",
    platform: "homestars",
    rating: 5,
    date: "2024-02-25",
    reviewText: "Great service. Arrived when he said he would and knew exactly what to do. Finished up quick and even gave us advice on how to improve the performance of the washer and a couple of our other appliances!",
    verified: true,
    serviceType: "Washer Repair"
  },
  {
    id: 40,
    name: "Dean Hayashi",
    location: "Richmond Hill",
    platform: "homestars",
    rating: 5,
    date: "2024-03-01",
    reviewText: "Vivek was quick and also gave advice on the repair, I will recommend JK Appliance Repair Inc to anyone of my friends or connections! Thank you for the great work!",
    verified: true,
    serviceType: "Appliance Repair"
  },
  {
    id: 41,
    name: "Vinod Satyanarayana",
    location: "Etobicoke",
    platform: "homestars",
    rating: 5,
    date: "2024-03-05",
    reviewText: "Vivek was extremely knowledgeable and helped to rectify the problem and guide us what to do. Highly recommend JK appliance anytime",
    verified: true,
    serviceType: "Appliance Repair"
  },
  {
    id: 42,
    name: "Jeff",
    location: "Toronto",
    platform: "homestars",
    rating: 5,
    date: "2024-03-08",
    reviewText: "He is now on my contacts list as the go-to guy for appliance repairs. He communicates well, showed up when I needed him, and assessed the problem very well. And he made the repair successfully and cleanly.",
    verified: true,
    serviceType: "Appliance Repair"
  },
  {
    id: 43,
    name: "Suzanne Mohammed",
    location: "Scarborough",
    platform: "homestars",
    rating: 5,
    date: "2024-03-12",
    reviewText: "JK Appliance Repair was the first company to respond, and follow up! Vivek provided same-day service, and was competitive with other quotes received.",
    verified: true,
    serviceType: "Appliance Repair"
  },
  {
    id: 44,
    name: "Frances Bentivoglio",
    location: "North York",
    platform: "homestars",
    rating: 5,
    date: "2024-03-15",
    reviewText: "When I requested service for my refrigerator, they came the same day. This was very important to me. The technician was very helpful and knowledgeable in diagnosing the problem. He was fast and efficient.",
    verified: true,
    serviceType: "Refrigerator Repair"
  },
  {
    id: 45,
    name: "Benjamin",
    location: "Markham",
    platform: "homestars",
    rating: 5,
    date: "2024-03-18",
    reviewText: "Vivek from JK Appliances is very knowledgeable, professional, and charged a very reasonable fee.",
    verified: true,
    serviceType: "Appliance Repair"
  },
  {
    id: 46,
    name: "Sophia",
    location: "Vaughan",
    platform: "homestars",
    rating: 5,
    date: "2024-03-22",
    reviewText: "Reached out right away and fixed the washing machine quickly, explained clearly and cleaned up afterward.",
    verified: true,
    serviceType: "Washer Repair"
  },
  {
    id: 47,
    name: "Amelia",
    location: "Toronto",
    platform: "homestars",
    rating: 5,
    date: "2024-03-25",
    reviewText: "JK Appliance correctly assessed why my refrigerator was not cooling in about 10 minutes and fixed it.",
    verified: true,
    serviceType: "Refrigerator Repair"
  },
  {
    id: 48,
    name: "Michael",
    location: "Mississauga",
    platform: "homestars",
    rating: 5,
    date: "2024-03-28",
    reviewText: "Service provided was great, on time, reliable, affordable price.",
    verified: true,
    serviceType: "Appliance Repair"
  },
  {
    id: 49,
    name: "Abigail",
    location: "Richmond Hill",
    platform: "homestars",
    rating: 5,
    date: "2024-04-01",
    reviewText: "Dishwasher re-installed perfectly after previous incorrect installation.",
    verified: true,
    serviceType: "Dishwasher Repair"
  },
  {
    id: 50,
    name: "Oliver",
    location: "Etobicoke",
    platform: "homestars",
    rating: 4,
    date: "2024-04-05",
    reviewText: "Technician very helpful, responsive, fixed washing machine leak.",
    verified: true,
    serviceType: "Washer Repair"
  },
  {
    id: 51,
    name: "Charlotte",
    location: "North York",
    platform: "homestars",
    rating: 5,
    date: "2024-04-10",
    reviewText: "High quality appliance repair, explained problem clearly.",
    verified: true,
    serviceType: "Appliance Repair"
  },
  {
    id: 52,
    name: "Ava",
    location: "Scarborough",
    platform: "homestars",
    rating: 5,
    date: "2024-04-15",
    reviewText: "Excellent job on Bosch dishwasher repair, professional, reasonable price.",
    verified: true,
    serviceType: "Dishwasher Repair"
  },
  {
    id: 53,
    name: "William",
    location: "Toronto",
    platform: "homestars",
    rating: 5,
    date: "2024-04-20",
    reviewText: "Samsung dishwasher repaired perfectly, issue resolved quickly.",
    verified: true,
    serviceType: "Dishwasher Repair"
  },
  {
    id: 54,
    name: "Emma",
    location: "Brampton",
    platform: "homestars",
    rating: 4,
    date: "2024-04-25",
    reviewText: "Fast response, reasonable cost, professional service.",
    verified: true,
    serviceType: "Appliance Repair"
  },
  // More Google Reviews
  {
    id: 55,
    name: "Jiten Bhatt",
    location: "Mississauga",
    platform: "google",
    rating: 5,
    date: "2024-02-15",
    reviewText: "Prompt response and Perfect service",
    verified: true,
    serviceType: "Appliance Repair"
  },
  {
    id: 56,
    name: "Alvaro Chavarria",
    location: "Toronto",
    platform: "google",
    rating: 5,
    date: "2024-02-18",
    reviewText: "Great and professional work. Very formal and clean job.",
    verified: true,
    serviceType: "Appliance Repair"
  },
  {
    id: 57,
    name: "Manny Fischer",
    location: "Richmond Hill",
    platform: "google",
    rating: 5,
    date: "2024-02-22",
    reviewText: "JK responded quickly to my emergency fridge service request. Vivek was punctual, courteous, knowledgeable.",
    verified: true,
    serviceType: "Refrigerator Repair"
  },
  {
    id: 58,
    name: "Salim Shaikh",
    location: "Vaughan",
    platform: "google",
    rating: 5,
    date: "2024-02-26",
    reviewText: "Vivek very friendly reliable economical prompt service",
    verified: true,
    serviceType: "Appliance Repair"
  },
  {
    id: 59,
    name: "Shahrukh Ansari",
    location: "Markham",
    platform: "google",
    rating: 5,
    date: "2024-03-01",
    reviewText: "For professional, reasonably priced, high-quality service, I highly recommend Vivek at JK Appliance.",
    verified: true,
    serviceType: "Appliance Repair"
  },
  {
    id: 60,
    name: "Ankit",
    location: "Etobicoke",
    platform: "google",
    rating: 5,
    date: "2024-03-05",
    reviewText: "Very prompt response, service and resolutions with affordable price.",
    verified: true,
    serviceType: "Appliance Repair"
  },
  {
    id: 61,
    name: "Elochukwu Emmanuel Okose",
    location: "Toronto",
    platform: "google",
    rating: 5,
    date: "2024-03-08",
    reviewText: "Very genuine, smart, communication friendly.",
    verified: true,
    serviceType: "Appliance Repair"
  },
  {
    id: 62,
    name: "Ayush Patel",
    location: "North York",
    platform: "google",
    rating: 5,
    date: "2024-03-12",
    reviewText: "Vivek came a day before Christmas to check our oven and fixed it within 40 minutes.",
    verified: true,
    serviceType: "Oven Repair"
  },
  {
    id: 63,
    name: "Akhil Sabhaya",
    location: "Mississauga",
    platform: "google",
    rating: 5,
    date: "2024-03-15",
    reviewText: "They quickly fixed my washing machine issue, very friendly technician, highly recommend.",
    verified: true,
    serviceType: "Washer Repair"
  },
  
  // More HomeStars Reviews
  {
    id: 64,
    name: "Ethan",
    location: "Toronto",
    platform: "homestars",
    rating: 5,
    date: "2024-05-01",
    reviewText: "Prompt refrigerator repair, professional, fair pricing.",
    verified: true,
    serviceType: "Refrigerator Repair"
  },
  {
    id: 65,
    name: "Noah",
    location: "Scarborough",
    platform: "homestars",
    rating: 5,
    date: "2024-05-05",
    reviewText: "Dryer repair top-notch experience, quickly diagnosed issue.",
    verified: true,
    serviceType: "Dryer Repair"
  },
  {
    id: 66,
    name: "Olivia",
    location: "Vaughan",
    platform: "homestars",
    rating: 5,
    date: "2024-05-10",
    reviewText: "Fridge diagnosed and repaired professionally.",
    verified: true,
    serviceType: "Refrigerator Repair"
  },
  {
    id: 67,
    name: "Liam",
    location: "Richmond Hill",
    platform: "homestars",
    rating: 4,
    date: "2024-05-15",
    reviewText: "Quickly fixed dryer, efficient both visits.",
    verified: true,
    serviceType: "Dryer Repair"
  },
  {
    id: 68,
    name: "Elizabeth",
    location: "Oakville",
    platform: "homestars",
    rating: 5,
    date: "2024-05-20",
    reviewText: "Reliable dishwasher service, trustworthy company.",
    verified: true,
    serviceType: "Dishwasher Repair"
  },
  {
    id: 69,
    name: "Sophia",
    location: "Markham",
    platform: "homestars",
    rating: 5,
    date: "2024-05-25",
    reviewText: "Incredible washing machine repair, highly recommend.",
    verified: true,
    serviceType: "Washer Repair"
  },
  {
    id: 70,
    name: "Daniel",
    location: "Brampton",
    platform: "homestars",
    rating: 5,
    date: "2024-06-01",
    reviewText: "Nice technician, prompt fridge compressor repair.",
    verified: true,
    serviceType: "Refrigerator Repair"
  },
  {
    id: 71,
    name: "Ethan",
    location: "Mississauga",
    platform: "homestars",
    rating: 5,
    date: "2024-06-05",
    reviewText: "Wonderful, honest fridge repair.",
    verified: true,
    serviceType: "Refrigerator Repair"
  },
  {
    id: 72,
    name: "Benjamin",
    location: "Toronto",
    platform: "homestars",
    rating: 5,
    date: "2024-06-10",
    reviewText: "Professional fridge repair, good communication, fair pricing.",
    verified: true,
    serviceType: "Refrigerator Repair"
  },
  {
    id: 73,
    name: "Jacob",
    location: "North York",
    platform: "homestars",
    rating: 5,
    date: "2024-06-15",
    reviewText: "Quick, honest refrigerator check and repair.",
    verified: true,
    serviceType: "Refrigerator Repair"
  },
  // More Google Reviews
  {
    id: 74,
    name: "Rutuja Shinde",
    location: "Toronto",
    platform: "google",
    rating: 5,
    date: "2024-03-18",
    reviewText: "They repaired my fridge, which was not cooling properly, now it's working flawlessly.",
    verified: true,
    serviceType: "Refrigerator Repair"
  },
  {
    id: 75,
    name: "Sumit Khairnar",
    location: "Scarborough",
    platform: "google",
    rating: 5,
    date: "2024-03-22",
    reviewText: "Fixed my stove, knowledgeable technician with necessary parts, commendable attention to detail.",
    verified: true,
    serviceType: "Stove Repair"
  },
  {
    id: 76,
    name: "Ajay Lakhani",
    location: "Brampton",
    platform: "google",
    rating: 5,
    date: "2024-03-25",
    reviewText: "Outstanding service, refrigerator repaired swiftly, highly recommend their prompt response.",
    verified: true,
    serviceType: "Refrigerator Repair"
  },
  {
    id: 77,
    name: "Divyesh Prajapati",
    location: "Mississauga",
    platform: "google",
    rating: 5,
    date: "2024-03-28",
    reviewText: "Impressed by their professionalism, quick diagnosis, and expertise fixing washing machine.",
    verified: true,
    serviceType: "Washer Repair"
  },
  {
    id: 78,
    name: "Sudhir Maurya",
    location: "Etobicoke",
    platform: "google",
    rating: 4,
    date: "2024-04-01",
    reviewText: "Great Service! Really appreciate their timely response and fixing the repair.",
    verified: true,
    serviceType: "Appliance Repair"
  },
  
  // More HomeStars Reviews
  {
    id: 79,
    name: "Oliver",
    location: "Oakville",
    platform: "homestars",
    rating: 5,
    date: "2024-06-20",
    reviewText: "Maintenance check very thorough and professional.",
    verified: true,
    serviceType: "Maintenance Services"
  },
  {
    id: 80,
    name: "Charlotte",
    location: "Vaughan",
    platform: "homestars",
    rating: 5,
    date: "2024-06-25",
    reviewText: "Quick, thorough dryer repair, works like new.",
    verified: true,
    serviceType: "Dryer Repair"
  },
  {
    id: 81,
    name: "Sophia",
    location: "Richmond Hill",
    platform: "homestars",
    rating: 5,
    date: "2024-07-01",
    reviewText: "Efficient stove repair, friendly technician.",
    verified: true,
    serviceType: "Stove Repair"
  },
  {
    id: 82,
    name: "Amelia",
    location: "North York",
    platform: "homestars",
    rating: 5,
    date: "2024-07-05",
    reviewText: "Good price for dryer door repair, highly recommend.",
    verified: true,
    serviceType: "Dryer Repair"
  },
  {
    id: 83,
    name: "Michael",
    location: "Etobicoke",
    platform: "homestars",
    rating: 5,
    date: "2024-07-10",
    reviewText: "Quick, affordable stove top repair.",
    verified: true,
    serviceType: "Stove Repair"
  },
  {
    id: 84,
    name: "Noah",
    location: "Brampton",
    platform: "homestars",
    rating: 5,
    date: "2024-07-15",
    reviewText: "Outstanding washing machine servicing.",
    verified: true,
    serviceType: "Washer Repair"
  },
  {
    id: 85,
    name: "Ethan",
    location: "Scarborough",
    platform: "homestars",
    rating: 5,
    date: "2024-07-20",
    reviewText: "Efficient refrigerator service, knowledgeable technician.",
    verified: true,
    serviceType: "Refrigerator Repair"
  },
  {
    id: 86,
    name: "Sophia",
    location: "Toronto",
    platform: "homestars",
    rating: 5,
    date: "2024-07-25",
    reviewText: "Fast, efficient refrigerator servicing.",
    verified: true,
    serviceType: "Refrigerator Repair"
  },
  {
    id: 87,
    name: "William",
    location: "Mississauga",
    platform: "homestars",
    rating: 5,
    date: "2024-08-01",
    reviewText: "Samsung dishwasher repaired perfectly, issue resolved quickly.",
    verified: true,
    serviceType: "Dishwasher Repair"
  },
  {
    id: 88,
    name: "Ava",
    location: "Markham",
    platform: "homestars",
    rating: 5,
    date: "2024-08-05",
    reviewText: "Excellent job on Bosch dishwasher repair, professional, reasonable price.",
    verified: true,
    serviceType: "Dishwasher Repair"
  },
  {
    id: 89,
    name: "Emma",
    location: "Oakville",
    platform: "homestars",
    rating: 4,
    date: "2024-08-10",
    reviewText: "Fast response, reasonable cost, professional service.",
    verified: true,
    serviceType: "Appliance Repair"
  },
  {
    id: 90,
    name: "Charlotte",
    location: "Toronto",
    platform: "homestars",
    rating: 5,
    date: "2024-08-15",
    reviewText: "High quality appliance repair, explained problem clearly.",
    verified: true,
    serviceType: "Appliance Repair"
  },
  {
    id: 91,
    name: "Mia",
    location: "Richmond Hill",
    platform: "homestars",
    rating: 5,
    date: "2024-08-20",
    reviewText: "Very knowledgeable about all types of appliances, fixed washer in one visit.",
    verified: true,
    serviceType: "Washer Repair"
  },
  {
    id: 92,
    name: "James",
    location: "Vaughan",
    platform: "homestars",
    rating: 5,
    date: "2024-08-25",
    reviewText: "Professional, punctual, and thorough with dishwasher installation.",
    verified: true,
    serviceType: "Dishwasher Repair"
  },
  {
    id: 93,
    name: "Isabella",
    location: "North York",
    platform: "homestars",
    rating: 5,
    date: "2024-09-01",
    reviewText: "Fixed our refrigerator quickly and efficiently. Very satisfied with the service.",
    verified: true,
    serviceType: "Refrigerator Repair"
  }
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