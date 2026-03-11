# Cobalt Marketing Website

A modern, responsive marketing website built with Next.js 15 and Tailwind CSS.

## Getting Started

### Development Server

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `/app` - Next.js App Router pages and layouts
  - `/about` - About page
  - `/work` - Portfolio/work page
  - `/contact` - Contact page
- `/components` - Reusable React components
- `/public` - Static assets (images, fonts, etc.)

## Deployment

### Deploy to Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com).

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Click "Deploy"

Or use the Vercel CLI:

```bash
npm install -g vercel
vercel
```

### Environment Variables

No environment variables are required for the basic setup. Add any API keys or secrets in the Vercel dashboard under Project Settings > Environment Variables.

## Customization

### Adding Images

1. Place your images in the `/public` folder
2. Import and use Next.js `Image` component for optimized images:

```tsx
import Image from 'next/image';

<Image src="/your-image.jpg" alt="Description" width={800} height={600} />
```

### Styling

The project uses Tailwind CSS for styling. Customize the theme in `tailwind.config.ts` and global styles in `app/globals.css`.

### Pages

- Home: Hero section with brand statement
- About: Company information
- Work: Portfolio grid
- Contact: Contact information and form

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Deployment Documentation](https://vercel.com/docs)

