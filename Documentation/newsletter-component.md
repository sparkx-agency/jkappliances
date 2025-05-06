# Newsletter Component Documentation

This document explains how to use the `NewsletterSection` component which has been added to the JK Appliances website.

## Component Overview

The `NewsletterSection` component provides a stylish, responsive newsletter signup form that can be used throughout the website. It features:

- Clean, modern design with an animated email icon
- Form validation with error handling
- Success confirmation message
- Mobile-responsive layout
- Customizable title, subtitle, and background color
- API integration ready

## How to Use the Component

### Basic Usage

```jsx
import NewsletterSection from '@/components/sections/NewsletterSection';

// In your page component:
<NewsletterSection />
```

This will render the newsletter section with default title, subtitle, and background color.

### Customization Options

You can customize the component by passing props:

```jsx
<NewsletterSection 
  title="Get Exclusive Offers for Toronto Residents"
  subtitle="Subscribe to our Toronto-specific newsletter for local promotions and news."
  bgColor="bg-blue-50"
/>
```

### Available Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | "Stay Updated with Appliance Tips" | The main headline |
| `subtitle` | string | "Join our newsletter for maintenance tips..." | The descriptive text |
| `bgColor` | string | "bg-gray-50" | Background color class (Tailwind CSS) |

## Implementation Details

### Component Location
The component is located at: `src/components/sections/NewsletterSection.tsx`

### API Endpoint
The form submits to the `/api/newsletter` endpoint which:
- Validates the email
- Currently logs the subscription
- Is ready to be connected to your newsletter service provider

## Connecting to Newsletter Services

To connect this to an actual newsletter service like Mailchimp, SendGrid, ConvertKit, etc:

1. Update the API route at `src/app/api/newsletter/route.ts` to integrate with your chosen service
2. Add any necessary environment variables
3. Test the integration

## Demo Page

A demonstration of different configurations is available at `/newsletter`. This page shows:
- Default configuration
- Alternative styling
- Area-specific example

## Best Practices

- Use the newsletter section at strategic points in the user journey:
  - Homepage (bottom)
  - After blog posts
  - Service area pages
  - Thank you pages after form submissions
- Consider customizing the content based on page context
- Don't overuse across the site (once per page is sufficient)
- Store subscribed emails securely and in compliance with privacy regulations

## Future Enhancements

Potential future enhancements for this component:
- Add name field option
- Additional customization options
- A/B testing variants
- Subscription preferences
- GDPR compliance features
- Integration with popular email marketing platforms 