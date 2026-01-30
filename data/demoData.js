import type { Leader, Event, SocialPost, BrandingImage, BrandingVideo, Notification } from '@/types';

export const demoLeader: Leader = {
  id: '1',
  name: 'Shri Rajesh Kumar Sharma',
  designation: 'Member of Parliament, Lok Sabha',
  party: 'Indian National Democratic Party',
  partyAbbreviation: 'INDP',
  photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face',
  coverPhotoUrl: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&h=400&fit=crop',
  bio: `Shri Rajesh Kumar Sharma is a distinguished Member of Parliament representing the people of Varanasi constituency. With over two decades of dedicated public service, he has been at the forefront of championing the rights of farmers, youth employment, and infrastructure development.

Born in a humble family in rural Uttar Pradesh, Shri Sharma completed his education in Political Science from Banaras Hindu University. His political journey began as a student leader, advocating for educational reforms and youth empowerment.

As an MP, he has been instrumental in bringing several development projects to his constituency, including the modernization of the agricultural market, establishment of skill development centers, and improvement of road connectivity in rural areas.

He is known for his accessibility to constituents and his commitment to addressing their concerns with sincerity and dedication.`,
  achievements: [
    'Secured ₹500 Crore for constituency development projects',
    'Established 15 Skill Development Centers benefiting 10,000+ youth',
    'Championed the Farmers\' Welfare Bill in Parliament',
    'Awarded "Best Parliamentarian" in 2022',
    'Led the Clean Varanasi Initiative with 100+ cleanliness drives',
    'Inaugurated 25 primary health centers in rural areas',
  ],
  timeline: [
    { year: '1998', title: 'Student Union President', description: 'Elected as President of BHU Student Union' },
    { year: '2004', title: 'District Youth Leader', description: 'Appointed District Youth Wing President' },
    { year: '2009', title: 'State Legislature', description: 'Elected to UP State Legislative Assembly' },
    { year: '2014', title: 'Member of Parliament', description: 'First elected to Lok Sabha from Varanasi' },
    { year: '2019', title: 'Re-elected to Parliament', description: 'Won with historic margin of 2.5 lakh votes' },
    { year: '2023', title: 'Parliamentary Committee Chair', description: 'Appointed Chair of Agriculture Committee' },
  ],
  vision: 'My vision is to transform our constituency into a model of sustainable development where every citizen has access to quality education, healthcare, and employment opportunities. Together, we will build a prosperous future for our children while preserving our rich cultural heritage.',
  contact: {
    phone: '+91 9876543210',
    whatsapp: '+91 9876543210',
    email: 'mp.rajesh.sharma@gov.in',
    officeAddress: '204, Parliament House Annexe, New Delhi - 110001',
    officeHours: 'Monday - Friday: 10:00 AM - 5:00 PM',
    mapUrl: 'https://maps.google.com/?q=Parliament+House+New+Delhi',
  },
  socialLinks: {
    facebook: 'https://facebook.com/RajeshKumarSharmaMP',
    instagram: 'https://instagram.com/rajesh_sharma_mp',
    youtube: 'https://youtube.com/@RajeshSharmaMP',
    twitter: 'https://twitter.com/RKSharmaMP',
  },
};

export const demoEvents: Event[] = [
  {
    id: '1',
    title: 'Kisan Samman Rally',
    description: 'Join us for the grand Kisan Samman Rally to honor our hardworking farmers and discuss new agricultural initiatives. Free seed distribution and Kisan credit card registration available.',
    date: '2026-02-15',
    time: '10:00 AM',
    location: 'Gandhi Maidan, Varanasi',
    posterUrl: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=300&fit=crop',
    category: 'rally',
  },
  {
    id: '2',
    title: 'Youth Employment Town Hall',
    description: 'Interactive session on government job opportunities, skill development programs, and entrepreneurship support for youth. Bring your resume for on-spot counseling.',
    date: '2026-02-20',
    time: '3:00 PM',
    location: 'BHU Convention Center, Varanasi',
    posterUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop',
    category: 'townhall',
  },
  {
    id: '3',
    title: 'Primary Health Center Inauguration',
    description: 'Inauguration of new state-of-the-art Primary Health Center equipped with modern diagnostic facilities and 24x7 emergency services.',
    date: '2026-02-25',
    time: '11:00 AM',
    location: 'Ramnagar Block, Varanasi',
    posterUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop',
    category: 'inauguration',
  },
  {
    id: '4',
    title: 'Constituency Development Meeting',
    description: 'Monthly review meeting with district officials to discuss ongoing development projects and address pending issues.',
    date: '2026-03-01',
    time: '2:00 PM',
    location: 'District Collectorate, Varanasi',
    posterUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=400&h=300&fit=crop',
    category: 'meeting',
  },
  {
    id: '5',
    title: 'Republic Day Celebration',
    description: 'Grand celebration of Republic Day with cultural programs, flag hoisting ceremony, and felicitation of freedom fighters.',
    date: '2026-01-26',
    time: '8:00 AM',
    location: 'Dashashwamedh Ghat, Varanasi',
    posterUrl: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=400&h=300&fit=crop',
    category: 'celebration',
  },
];

export const demoSocialPosts: SocialPost[] = [
  {
    id: '1',
    platform: 'facebook',
    title: 'Successful Kisan Sammelan',
    description: 'Grateful to the thousands of farmers who joined us today. Your concerns are my priority!',
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop',
    postUrl: 'https://facebook.com/RajeshKumarSharmaMP',
    date: '2026-01-28',
  },
  {
    id: '2',
    platform: 'instagram',
    title: 'Morning at the Ganga',
    description: 'Started the day with Ganga Aarti. May Maa Ganga bless our constituency. 🙏',
    imageUrl: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=400&h=300&fit=crop',
    postUrl: 'https://instagram.com/rajesh_sharma_mp',
    date: '2026-01-27',
  },
  {
    id: '3',
    platform: 'youtube',
    title: 'Parliament Speech on Agricultural Reforms',
    description: 'Watch my full speech on the importance of MSP guarantee for farmers.',
    imageUrl: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=400&h=300&fit=crop',
    postUrl: 'https://youtube.com/@RajeshSharmaMP',
    date: '2026-01-25',
  },
  {
    id: '4',
    platform: 'twitter',
    title: 'Development Update',
    description: 'Happy to announce ₹100 Cr sanctioned for road development in rural Varanasi. Work begins next month!',
    postUrl: 'https://twitter.com/RKSharmaMP',
    date: '2026-01-26',
  },
  {
    id: '5',
    platform: 'facebook',
    title: 'Meeting with Youth Entrepreneurs',
    description: 'Inspiring interaction with young entrepreneurs from our constituency. The future is bright!',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop',
    postUrl: 'https://facebook.com/RajeshKumarSharmaMP',
    date: '2026-01-24',
  },
];

export const demoGalleryImages: BrandingImage[] = [
  {
    id: '1',
    title: 'Development First',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
    description: 'Building a stronger tomorrow with sustainable development initiatives.',
  },
  {
    id: '2',
    title: 'With the People',
    imageUrl: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&h=600&fit=crop',
    description: 'Your voice matters. Together we shape our future.',
  },
  {
    id: '3',
    title: 'Youth Empowerment',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop',
    description: 'Investing in skill development for a prosperous generation.',
  },
];

export const demoGalleryVideos: BrandingVideo[] = [
  {
    id: '1',
    title: 'Journey of Service',
    thumbnailUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=225&fit=crop',
    videoUrl: 'https://www.youtube.com/watch?v=example1',
    duration: '3:45',
  },
  {
    id: '2',
    title: 'Development in Action',
    thumbnailUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=400&h=225&fit=crop',
    videoUrl: 'https://www.youtube.com/watch?v=example2',
    duration: '5:20',
  },
];

export const demoNotifications: Notification[] = [
  {
    id: '1',
    type: 'event',
    title: 'Upcoming Rally',
    message: 'Kisan Samman Rally on Feb 15th at Gandhi Maidan. Mark your calendar!',
    date: '2026-01-29',
    read: false,
  },
  {
    id: '2',
    type: 'announcement',
    title: 'New Scheme Launched',
    message: 'Youth Skill Development Scheme now accepting applications. Apply at nearest center.',
    date: '2026-01-28',
    read: false,
  },
  {
    id: '3',
    type: 'birthday',
    title: 'Birthday Wishes! 🎂',
    message: 'Shri Rajesh Kumar Sharma wishes you a very Happy Birthday!',
    date: '2026-01-27',
    read: true,
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
  },
  {
    id: '4',
    type: 'general',
    title: 'Office Timing Change',
    message: 'Constituency office will remain closed on Jan 26 for Republic Day.',
    date: '2026-01-25',
    read: true,
  },
];
