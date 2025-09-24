# Content Editing Guide

This guide explains how to easily edit all text content on the EcoLeaf landing page.

## 📝 Quick Start

All website content is managed through a single file: **`src/data/content.yaml`**

Simply edit this file to update any text on the website, then save and refresh your browser to see the changes!

## 🎯 What You Can Edit

### Site Information
```yaml
site:
  title: "EcoLeaf - Natural Products"  # Browser tab title
  description: "Your SEO description here"
```

### Brand Details
```yaml
brand:
  name: "EcoLeaf"  # Company name (appears in header and footer)
  tagline: "Natural products for a sustainable future."  # Footer tagline
```

### Navigation Menu
```yaml
navigation:
  items:
    - label: "Home"      # Menu item text
      href: "home"       # Section to scroll to
    - label: "Features"
      href: "features"
    - label: "About"
      href: "about"
  cta_button: "Shop Now"  # Button text in header
```

### Hero Section (Main Banner)
```yaml
hero:
  title: 
    line1: "Natural Beauty,"    # First line of main heading
    line2: "Pure Essence"       # Second line (gets gradient effect)
  subtitle: "Your main description here"
  buttons:
    primary: "Explore Products"    # Main call-to-action button
    secondary: "Learn More"       # Secondary button
```

### Products Section
```yaml
products:
  section_title: "Our Natural Product Range"
  subtitle: "Carefully crafted products for your wellness journey"
  items:
    - name: "Organic Face Serum"
      description: "Hydrating serum with botanical extracts for radiant skin"
      price: "$32"
      image: "https://your-image-url.jpg"
      bestseller: true    # Shows a bestseller badge
    - name: "Natural Body Butter"
      description: "Rich, nourishing cream made with organic shea butter"
      price: "$24"
      image: "https://your-image-url.jpg"
      bestseller: false
  cta_button: "View All Products"
```

### Features Section
```yaml
features:
  section_title: "Why Choose EcoLeaf?"
  items:
    - title: "100% Natural"
      description: "Your feature description here"
      icon: "leaf"        # Options: leaf, recycle, heart
    - title: "Eco-Friendly"
      description: "Another feature description"
      icon: "recycle"
    - title: "Cruelty Free"
      description: "Third feature description"
      icon: "heart"
```

### About Section
```yaml
about:
  title: "Our Story"
  paragraphs:
    - "First paragraph of your story..."
    - "Second paragraph continues here..."
  cta_button: "Read Our Story"
  images:
    - src: "https://your-first-image.jpg"
      alt: "Description of first image"
    - src: "https://your-second-image.jpg"
      alt: "Description of second image"
    - src: "https://your-third-image.jpg"
      alt: "Description of third image"
    # Add more images as needed - they will auto-rotate with fade transitions
```

### Footer
```yaml
footer:
  sections:
    - title: "Products"
      links:
        - name: "Skincare"
          href: "#skincare"
        - name: "Hair Care"
          href: "#haircare"
  social:
    - platform: "Facebook"
      href: "https://facebook.com/yourpage"
      icon: "facebook"      # Options: facebook, instagram, x, tiktok
    - platform: "X"
      href: "https://x.com/yourpage"
      icon: "x"
    - platform: "TikTok"
      href: "https://tiktok.com/@yourpage"
      icon: "tiktok"
  copyright: "© 2024 EcoLeaf. All rights reserved."
```

## 🛠️ How to Make Changes

1. **Open the file**: Navigate to `src/data/content.yaml`
2. **Edit the text**: Change any text values (keep the YAML structure the same)
3. **Save the file**: Save your changes
4. **Refresh browser**: The website will update after refresh

## ⚠️ Important Notes

### Keep the Structure
- Don't change the indentation or structure
- Only edit the text values after the colons
- Keep quotes around text values

### Good Example:
```yaml
title: "My New Title"        ✅ Correct
```

### Bad Example:
```yaml
title: My New Title          ❌ Missing quotes
  title: "My New Title"      ❌ Wrong indentation
```

### Adding New Items

You can add new items to lists like features or footer links:

```yaml
features:
  items:
    - title: "Existing Feature"
      description: "..."
      icon: "leaf"
    - title: "NEW FEATURE"     # Add new feature here
      description: "New description"
      icon: "heart"
```

### Available Icons
- `leaf` - Leaf icon
- `recycle` - Recycle icon  
- `heart` - Heart icon
- `facebook` - Facebook icon
- `instagram` - Instagram icon
- `twitter` - Twitter icon

## 🚀 Advanced Tips

### Multi-line Text
For longer descriptions, you can use the `>` character:

```yaml
description: >
  This is a longer description
  that spans multiple lines
  and will be displayed as one paragraph.
```

### Links and URLs
Always include the full URL for external links:

```yaml
href: "https://www.facebook.com/yourpage"
```

For internal navigation, use the section name:

```yaml
href: "about"  # Scrolls to the About section
```

### Images
Use high-quality images and provide descriptive alt text:

```yaml
# Single image
image:
  src: "https://images.unsplash.com/photo-example"
  alt: "Professional photo of natural ingredients on a wooden table"

# Multiple images (for rotating gallery in About section)
images:
  - src: "https://images.unsplash.com/photo-example1"
    alt: "Description of first image"
  - src: "https://images.unsplash.com/photo-example2"
    alt: "Description of second image"
```

**Image Gallery Features:**
- Auto-rotates every 5 seconds
- Smooth fade transitions between images
- Navigation dots at bottom
- Hover arrows for manual navigation
- Responsive design

## 🔄 Loading and Fallbacks

The website includes smart loading states and fallbacks:
- If the YAML file has errors, fallback content will be displayed
- Loading states show while content is being loaded
- The website continues to work even if content fails to load

## 🆘 Troubleshooting

### Content Not Updating?
1. Check that you saved the file
2. Refresh your browser (Ctrl+F5 or Cmd+Shift+R)
3. Check the browser console for any errors

### YAML Syntax Errors?
If you see errors, check:
- All text values are in quotes
- Indentation is consistent (use spaces, not tabs)
- No special characters without proper escaping
- Colons have spaces after them

### Getting Help
If you run into issues:
1. Copy the error message from the browser console
2. Check that your YAML structure matches the examples above
3. Try undoing your recent changes to identify the problem

---

**Happy editing! 🌿** Your changes will make the website truly yours while maintaining its beautiful design and functionality.
