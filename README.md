# Portfolio Website - Modular Structure

## 📁 Project Structure

```
portfolio/
├── index.html                 # Main entry point
├── components/                # Reusable HTML components
│   ├── navbar.html           # Navigation bar and mobile menu
│   ├── hero.html             # Hero/Landing section
│   ├── about.html            # About me section
│   ├── services.html         # Services offered section
│   ├── projects.html         # Projects showcase section
│   ├── skills.html           # Technical skills section
│   ├── certificates.html     # Certificates section
│   ├── contact.html          # Contact/Hire me section
│   └── footer.html           # Footer section
├── js/                       # JavaScript files
│   └── component-loader.js   # Component loader script
├── Pages/                    # Page-specific scripts
│   ├── projects.js           # Projects data and logic
│   ├── certificates.js       # Certificates data and logic
│   └── skills.js             # Skills data and logic
├── script.js                 # Main application script
├── style.css                 # Custom styles
└── tailwind-config.js        # Tailwind configuration

```

## 🚀 How It Works

### Component-Based Architecture

This portfolio uses a modular component-based architecture where each section of the website is separated into its own HTML file. This approach offers several benefits:

1. **Maintainability**: Each component can be edited independently
2. **Reusability**: Components can be reused across different pages
3. **Organization**: Clear separation of concerns
4. **Scalability**: Easy to add or remove sections

### Component Loading

The `component-loader.js` script dynamically loads all HTML components into the main `index.html` file:

```javascript
// Components are loaded asynchronously
const components = [
    { id: 'navbar-component', path: 'components/navbar.html' },
    { id: 'hero-component', path: 'components/hero.html' },
    // ... other components
];
```

### Component Structure

Each component file contains:
- Semantic HTML5 markup
- Tailwind CSS utility classes for styling
- Font Awesome icons
- Responsive design (mobile-first approach)
- Dark mode support

## 📝 Components Overview

### 1. Navbar Component (`navbar.html`)
- Sticky navigation bar
- Dark mode toggle
- Responsive mobile menu
- Mobile bottom tabbar for touch devices

### 2. Hero Component (`hero.html`)
- Introduction section
- Profile image with floating animation
- Social media links
- Call-to-action buttons

### 3. About Component (`about.html`)
- Personal description
- Profile photo
- Download CV button
- Professional background

### 4. Services Component (`services.html`)
- Service cards grid
- 6 main services offered
- Icon-based design
- Hover effects

### 5. Projects Component (`projects.html`)
- Dynamic project grid
- JavaScript-driven content
- "Show More" functionality
- Responsive layout

### 6. Skills Component (`skills.html`)
- Swiper carousel integration
- Technology stack showcase
- Dynamic content loading

### 7. Certificates Component (`certificates.html`)
- Certificate grid display
- Dynamic loading
- "Show More" button
- Modal preview capability

### 8. Contact Component (`contact.html`)
- Multiple hiring options (Upwork, Fiverr, Direct)
- Email and calendar integration
- Feature highlights
- Rating showcase

### 9. Footer Component (`footer.html`)
- Social media links
- Copyright information
- Brand identity
- Quick links

## 🛠️ Setup & Installation

1. **Clone or download the project**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Project structure**
   Ensure your folder structure matches the one above.

3. **Open in browser**
   Simply open `index.html` in your web browser. No build process required!

4. **For development**
   Use a local server for better development experience:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

## 🎨 Customization

### Modifying Components

To edit any section, simply open the corresponding component file in `components/` directory:

```html
<!-- Example: Editing the hero section -->
<!-- Open components/hero.html and modify the content -->
<h1 class="text-4xl">Your Name Here</h1>
```

### Adding New Components

1. Create a new HTML file in `components/` directory
2. Add the component reference to `index.html`:
   ```html
   <div id="new-component"></div>
   ```
3. Update `component-loader.js`:
   ```javascript
   const components = [
       // ... existing components
       { id: 'new-component', path: 'components/new-component.html' }
   ];
   ```

### Styling

- **Tailwind CSS**: Utility classes are used throughout
- **Custom CSS**: Add custom styles in `style.css`
- **Dark Mode**: Uses Tailwind's dark mode classes (`dark:`)

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🌙 Dark Mode

Dark mode is implemented using:
- Tailwind CSS dark mode classes
- JavaScript toggle functionality
- LocalStorage for persistence

## 🔧 Dependencies

- **Tailwind CSS**: Utility-first CSS framework
- **Flowbite**: Component library built on Tailwind
- **Font Awesome**: Icon library
- **Swiper**: Touch slider library
- **Google Fonts**: Poppins font family

## 📄 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

To contribute to this project:
1. Fork the repository
2. Create a feature branch
3. Make your changes in the appropriate component files
4. Test responsiveness and dark mode
5. Submit a pull request

## 📞 Support

For questions or issues, please contact:
- Email: hello@andriirvansyah.com
- LinkedIn: [Andri Irvansyah](https://www.linkedin.com/in/andri-irvansyah/)

## 📜 License

© 2023 Andri Irvansyah. All rights reserved.

---

**Note**: This modular structure makes it easy to maintain and scale your portfolio. Each component is independent and can be modified without affecting others.
