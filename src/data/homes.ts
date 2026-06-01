export type HomeStatus = 'Available' | 'Under Construction' | 'Sold'

export type Home = {
  slug: string
  title: string
  location: string
  tag: string
  status: HomeStatus
  beds: number
  baths: number
  sqft: string
  price: string
  image: string
  alt: string
  featured: boolean
}

export const homes: Home[] = [
  {
    slug: 'bayfront-modern',
    title: 'Bayfront Modern',
    location: 'Miami Beach, FL',
    tag: 'Custom Build',
    status: 'Available',
    beds: 5,
    baths: 6,
    sqft: '8,200',
    price: '$12.5M',
    image: '/projects/project-bayfront.jpg',
    alt: 'Modern waterfront Miami mansion with white stone, glass, and warm lighting.',
    featured: true,
  },
  {
    slug: 'palm-court-estate',
    title: 'Palm Court Estate',
    location: 'Coral Gables, FL',
    tag: 'Design-Build',
    status: 'Under Construction',
    beds: 6,
    baths: 7,
    sqft: '9,400',
    price: 'Inquire',
    image: '/projects/project-palm-court.webp',
    alt: 'Luxury Miami estate with palm-lined entry and contemporary architecture.',
    featured: true,
  },
  {
    slug: 'glass-house',
    title: 'Glass House',
    location: 'Coconut Grove, FL',
    tag: 'Turn-Key',
    status: 'Sold',
    beds: 4,
    baths: 5,
    sqft: '6,800',
    price: 'Sold',
    image: '/projects/project-glass-house.jpeg',
    alt: 'Modern glass and stone residence surrounded by tropical landscaping.',
    featured: true,
  },
  {
    slug: 'sunset-isles-villa',
    title: 'Sunset Isles Villa',
    location: 'Miami, FL',
    tag: 'Custom Build',
    status: 'Available',
    beds: 5,
    baths: 6,
    sqft: '7,600',
    price: '$9.8M',
    image: '/projects/project-modern-villa.webp',
    alt: 'Contemporary Miami villa with infinity pool and floor-to-ceiling glass.',
    featured: false,
  },
]