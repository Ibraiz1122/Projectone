import type { AcceptedItem, FAQItem, TestimonialItem } from '../types';

export const COMPANY_INFO = {
  name: "Wearables Exchange Inc.",
  parentEntity: "Global Exchange Inc.",
  email: "carla@globalexchangeny.com",
  phone: "(908) 787-8020",
  phoneDisplay: "(908) 787-8020",
  address: "420 Division Street, Elizabeth, NJ 07201",
  warehouseLocation: "Elizabeth, New Jersey, USA",
  servingArea: "New Jersey, New York Metro Area & Surrounding Communities",
  operatingHours: "Monday – Friday: 8:00 AM – 5:30 PM | Saturday: By Appointment",
  stats: [
    { value: "4.8M+", label: "Lbs Textiles Diverted", description: "Kept out of local landfills since inception" },
    { value: "140+", label: "Active Partner Bins", description: "Conveniently placed across NJ & NY properties" },
    { value: "$320K+", label: "Community Funds Raised", description: "Paid out directly to school PTOs, churches & clubs" },
    { value: "24+", label: "Export Destination Countries", description: "Fueling global circular markets and affordable clothing" },
  ]
};

export const ACCEPTED_ITEMS: AcceptedItem[] = [
  {
    id: "men-women-clothing",
    category: "clothing",
    title: "Everyday Clothing & Apparel",
    description: "Shirts, pants, jeans, dresses, skirts, hoodies, sweaters, and light jackets in clean condition.",
    accepted: true
  },
  {
    id: "children-baby",
    category: "clothing",
    title: "Children & Infant Clothes",
    description: "Kids wear, baby onesies, toddler sets, and outgrown school uniforms.",
    accepted: true
  },
  {
    id: "shoes-sneakers",
    category: "footwear",
    title: "Paired Footwear & Sneakers",
    description: "Running shoes, boots, dress shoes, sandals, and casual slip-ons (please tie or band in pairs).",
    accepted: true
  },
  {
    id: "accessories-bags",
    category: "accessories",
    title: "Bags, Belts & Hats",
    description: "Backpacks, handbags, purses, leather belts, baseball caps, scarves, and winter beanies.",
    accepted: true
  },
  {
    id: "household-linens",
    category: "linens",
    title: "Bedding & Soft Linens",
    description: "Bed sheets, pillowcases, light blankets, bath towels, and clean tablecloths.",
    accepted: true
  },
  {
    id: "outerwear-coats",
    category: "clothing",
    title: "Winter Coats & Outerwear",
    description: "Heavy winter coats, ski jackets, raincoats, windbreakers, and fleece pullovers.",
    accepted: true
  },
  // Not accepted items
  {
    id: "wet-soiled",
    category: "not_accepted",
    title: "Wet, Mildewed or Stained Rags",
    description: "Textiles contaminated with grease, motor oil, paint, mildew, or pungent pet odors.",
    accepted: false
  },
  {
    id: "mattresses-cushions",
    category: "not_accepted",
    title: "Mattresses, Box Springs & Foam",
    description: "Bulky foam furniture cushions, bed pillows, sleeping bags with broken stuffing, or mattresses.",
    accepted: false
  },
  {
    id: "carpets-rugs",
    category: "not_accepted",
    title: "Carpeting & Heavy Rugs",
    description: "Area rugs, automotive carpets, industrial floor mats, or rubber-backed bath rugs.",
    accepted: false
  },
  {
    id: "hard-goods",
    category: "not_accepted",
    title: "Electronics, Glass & Trash",
    description: "Small appliances, plastic toys, dishes, glassware, books, or everyday household garbage.",
    accepted: false
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-bin-cost",
    category: "bin_hosting",
    question: "Does it cost property owners anything to host a donation bin?",
    answer: "No, absolutely zero cost. Placement, routine scheduled servicing, perimeter clean-up, and all maintenance are 100% funded and handled by Wearables Exchange Inc. We also provide full liability insurance listing your property as additional insured.",
  },
  {
    id: "faq-bin-maintenance",
    category: "bin_hosting",
    question: "How do you ensure the bin area stays clean and free of overflow?",
    answer: "Our licensed NJ collection route drivers empty bins bi-weekly or on a customized weekly schedule based on foot traffic. Every driver is instructed to inspect and sweep the surrounding 15-foot perimeter upon each visit. We also offer a 24-hour response guarantee if a host notices overflow.",
  },
  {
    id: "faq-drive-how-it-works",
    category: "clothing_drives",
    question: "How does a school, church, or club clothing drive raise funds?",
    answer: "You choose your drive dates (typically 1 to 2 weeks), distribute our provided flyers and checklists to families, and collect bagged clothes at your facility. When your drive concludes, our team weighs the collection and pays your organization a set rate per pound. It’s an easy, zero-expense fundraiser.",
  },
  {
    id: "faq-drive-pickup",
    category: "clothing_drives",
    question: "Do we have to transport the clothing bags to your warehouse?",
    answer: "No. Our dedicated logistics trucks will come straight to your school, church hall, or facility parking lot in NJ/NY at an agreed pickup window, load everything, and provide an official collection manifest with weight tickets.",
  },
  {
    id: "faq-export-destination",
    category: "general",
    question: "What actually happens to the clothing after collection?",
    answer: "All items arrive at our Elizabeth, NJ distribution hub. Skilled textile specialists carefully grade each garment. Wearable clothing is sorted, packed into protective commercial bales, and exported to international secondhand markets where affordable, quality clothing is in high demand. Unwearable items are diverted to industrial wiping-rag and fiber-recycling partners.",
  },
  {
    id: "faq-tax-receipts",
    category: "general",
    question: "Can donors receive tax receipts?",
    answer: "When partnering with recognized 501(c)(3) non-profit schools or religious organizations for clothing drives, donation receipts can be distributed through your organization's sponsorship. For direct drop-offs, we provide collection confirmation documentation upon request.",
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    quote: "Wearables Exchange made our middle school PTO spring fundraiser effortlessly successful. We collected over 4,800 pounds of clothes in just 10 days and received our check within the week. Their pickup drivers were courteous and on time.",
    author: "Patricia Gomez",
    role: "PTO President, Union County Public Schools",
    location: "Union County, NJ",
    type: "school"
  },
  {
    id: "test-2",
    quote: "As a retail plaza property manager, my biggest worry was unsightly overflowing boxes. Wearables Exchange proved to be completely different. Their green bins look sharp, their drivers sweep the area every Tuesday and Friday, and community shoppers love having the bin.",
    author: "Marcus Sterling",
    role: "Senior Operations Director, Sterling Plaza Group",
    location: "Elizabeth & Linden, NJ",
    type: "property"
  },
  {
    id: "test-3",
    quote: "Partnering with Carla and the Elizabeth warehouse team gave our parish youth group the funding needed for our summer retreat, all while keeping tons of usable clothing out of county incinerators.",
    author: "Rev. Thomas Henderson",
    role: "Community Outreach Director",
    location: "Essex County, NJ",
    type: "partner"
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Convenient Collection",
    description: "Textiles are gathered through community-backed school drives and weather-sealed commercial bins placed across accessible neighborhood hubs.",
    badge: "Local Sourcing"
  },
  {
    step: "02",
    title: "Warehouse Grading in Elizabeth, NJ",
    description: "Bags arrive at our central warehouse facility where trained inspectors sort garments into distinct grades based on fabric, condition, and wearability.",
    badge: "Quality Control"
  },
  {
    step: "03",
    title: "Protective Baling & Packing",
    description: "Sorted apparel and paired shoes are cleanly compressed into weather-wrapped commercial export bales, maximizing shipping efficiency and garment integrity.",
    badge: "Logistics"
  },
  {
    step: "04",
    title: "Global Export & Circular Economy",
    description: "Bales are shipped to certified international secondhand distributors, creating local micro-entrepreneurship opportunities while preventing landfill waste.",
    badge: "Global Impact"
  }
];
