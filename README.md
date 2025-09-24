![image](ecoleaf-banner.png)

# 🌱 EcoLeaf Landing Page Template

A modern, responsive React landing page for EcoLeaf - a natural beauty products company. Built with React, Vite, TailwindCSS, Framer Motion, and shadcn/ui components.

## ✨ Features

- **YAML Content Management**: Edit all website text from a single `content.yaml` file - no code changes needed!
- **Modern React Architecture**: Built with functional components and hooks
- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop
- **Smooth Animations**: Powered by Framer Motion for beautiful leaf animations and smooth transitions
- **Beautiful UI Components**: Uses shadcn/ui components for consistent design
- **Font Awesome Icons**: Social media icons with subtle hover animations
- **Image Gallery**: Rotating image gallery in About section with fade transitions
- **Performance Optimized**: Lazy loading, code splitting, and error boundaries
- **Accessibility**: ARIA attributes and keyboard navigation support
- **Fast Development**: Vite for lightning-fast development experience
- **Type Safety Ready**: Pre-configured for TypeScript migration

## 🛠️ Setup and Installation

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js 18.0.0+ Support** (20.19.5 LTS recommended)
  - **Recommended**: Node.js 20.19.5 LTS (Maintenance LTS)
  - **Minimum**: Node.js 18.0.0
  - **Supported**: Node.js 18.x, 20.x, 22.x and newer
  - Download from [nodejs.org](https://nodejs.org/)
  - Check version: `node --version`
- **npm 8+** (comes with Node.js) or **yarn**
  - Check npm version: `npm --version`
- **Git** (optional, for cloning)
  - Download from [git-scm.com](https://git-scm.com/)

### Method 1: Using the Setup Script (Recommended)

1. **Navigate to the project directory**
   ```bash
   cd ecoleaf-landing-page
   ```

2. **Run the automated setup script**
   ```bash
   ./setup.sh
   ```
   
   The script will:
   - Check Node.js version compatibility
   - Install all dependencies automatically
   - Provide setup completion status
   - Give you next steps

### Method 2: Manual Installation

1. **Navigate to the project directory**
   ```bash
   cd ecoleaf-landing-page
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   
   This will install all required packages:
   - React & React DOM
   - Vite (build tool)
   - TailwindCSS (styling)
   - Framer Motion (animations)
   - Font Awesome (social icons)
   - shadcn/ui components
   - YAML parser

3. **Verify installation**
   ```bash
   npm run build
   ```
   
   If successful, you'll see build output without errors.

### Development Server

**Start the development server:**
```bash
npm run dev
```

**Expected output:**
```
➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

**Open your browser:**
- Navigate to `http://localhost:5173`
- The page will automatically reload when you make changes
- Hot module replacement (HMR) is enabled for instant updates

### Troubleshooting Installation

#### Node.js Version Issues
```bash
# Check your Node.js version
node --version

# Supported versions:
 - Node.js 20.19.5 LTS (Maintenance LTS) - RECOMMENDED
 - Node.js 18.x, 20.x, 22.x and newer - Supported

# Using Node Version Manager (nvm)? 
nvm use  # Uses .nvmrc file (20.19.5)

# If version is below 18.0.0:
 Visit https://nodejs.org/ and download Node.js 20.19.5 LTS (recommended)
```

#### Permission Issues (macOS/Linux)
```bash
# Make setup script executable
chmod +x setup.sh

# If npm has permission issues, try:
sudo npm install -g npm@latest
```

#### Port Already in Use
```bash
# If port 5173 is busy, Vite will automatically try the next available port
# Or specify a different port:
npm run dev -- --port 3000
```

#### Clear Cache (if needed)
```bash
# Clear npm cache
npm cache clean --force

# Remove node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Deployment Preparation

**Build for production:**
```bash
npm run build
```

**Preview production build locally:**
```bash
npm run preview
```

The build artifacts will be stored in the `dist/` directory, ready for deployment to any static hosting service.

## 📝 Content Editing

**All website text can be easily edited without coding!**

1. **Edit content**: Open `src/data/content.yaml` and modify any text
2. **Save the file**: Your changes are automatically applied  
3. **Refresh browser**: See your updates after refresh

### Quick Edit Examples:
```yaml
# Change hero title
hero:
  title:
    line1: "Your New Title,"
    line2: "Amazing Products"

# Update products
products:
  items:
    - name: "New Product Name"
      price: "$25"
      description: "Updated description"
```

📚 **For complete editing guide**: See [CONTENT_EDITING.md](./CONTENT_EDITING.md) for detailed instructions on editing all sections including navigation, features, about content, social media, and more.

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 🛠️ Technology Stack

- **Framework**: React 18 with Vite
- **Styling**: TailwindCSS with custom pastel green theme
- **Animations**: Framer Motion for smooth transitions and leaf animations
- **UI Components**: shadcn/ui for consistent design
- **Icons**: 
  - Font Awesome for social media icons
  - Lucide React for UI icons
  - Custom SVG leaf icons
- **Content Management**: YAML with build-time parsing
- **Routing**: React Router DOM
- **Build Tool**: Vite with YAML plugin
- **Fonts**: Inter (Google Fonts)
- **Image Handling**: Rotating gallery with fade transitions

## 📁 Project Structure

```
ecoleaf-landing-page/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.jsx       # shadcn/ui button component
│   │   │   └── card.jsx         # shadcn/ui card components
│   │   ├── icons/
│   │   │   └── LeafIcon.jsx     # Custom leaf SVG icon
│   │   ├── Header.jsx           # Navigation with mobile menu
│   │   ├── Hero.jsx             # Hero section with leaf animations
│   │   ├── Products.jsx         # Product showcase section
│   │   ├── Features.jsx         # Why Choose EcoLeaf features
│   │   ├── About.jsx            # Our Story with image gallery
│   │   ├── Footer.jsx           # Footer with Font Awesome social icons
│   │   ├── ImageGallery.jsx     # Rotating image gallery component
│   │   └── CleanParticles.jsx   # Animated particles for hero
│   ├── contexts/
│   │   └── ContentContext.jsx   # React Context for YAML content
│   ├── data/
│   │   └── content.yaml         # All website text content
│   ├── lib/
│   │   └── utils.js             # Utility functions for styling
│   ├── App.jsx                  # Main app with routing and providers
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles and Tailwind imports
├── public/                      # Static assets
├── backup/                      # Backup files
├── dist/                        # Production build output
├── package.json                 # Dependencies and scripts
├── tailwind.config.js           # Tailwind configuration with custom colors
├── vite.config.js               # Vite configuration with YAML plugin
├── setup.sh                     # Automated setup script
├── .nvmrc                       # Node.js version specification (20.19.5)
├── CONTENT_EDITING.md           # Detailed content editing guide
└── README.md                    # This file
```

## 🎨 Customization

### Colors

The project uses a custom pastel green color palette defined in `tailwind.config.js`:

```javascript
'pastel-green': {
  50: '#f8faf9',
  100: '#d4e8d9',
  200: '#a8d5ba',
  // ... more shades
}
```

### Components

All components are modular and can be easily customized:

- **Header**: Navigation with mobile-responsive menu
- **Hero**: Eye-catching section with animated background
- **Features**: Card-based feature showcase
- **About**: Story section with image and text
- **Footer**: Company links and social media

### Animations

Framer Motion animations are used throughout:
- Page transitions
- Scroll-triggered animations
- Hover effects
- Loading states

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Adding New Components

1. Create component in `src/components/`
2. Use shadcn/ui components where possible
3. Add Framer Motion animations
4. Ensure responsive design with Tailwind
5. Import and use in `App.jsx`

### Performance Features

- **Lazy Loading**: Components are lazy-loaded for better performance
- **Error Boundaries**: Graceful error handling
- **Code Splitting**: Automatic code splitting with Vite
- **Image Optimization**: Lazy loading images with loading states

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## 🌟 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This project is for demonstration purposes. Feel free to use it as a template for your own projects.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

If you have any questions or need help with setup, please check the documentation or create an issue.

---

**Happy coding! 🚀**
