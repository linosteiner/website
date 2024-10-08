import type { MappedPost } from '../../routes/consulting/+page'
import type { Picture } from 'imagetools-core'

export interface FeaturedContent {
  quote: {
    content: string
    person: string
    image: Picture
    imageCss?: string
    personTitle: string
    linkedin: string
    email: string
    highlight: 'green' | 'blue'
    contactButton: string
    customLogos?: string[]
  }
  categories: Category[]
  testimonials: Testimonial[]
}

export interface Category {
  title: string
  link?: string
  content?: string
  quote?: { source: string; content: string }
  steps?: { title: string; content: string }[]
  posts?: MappedPost[]
}

export interface Testimonial {
  logo: string
  quote: { source: string; content: string }
}
