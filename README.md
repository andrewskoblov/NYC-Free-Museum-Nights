# 🏛️ NYC Free Museum Nights

An interactive, responsive website that showcases **free museum nights in New York City**. Visitors can explore events, RSVP, and enjoy smooth animations with light/dark mode options.

---

## 🌟 Project Overview

NYC Free Museum Nights helps art lovers, students, and tourists **discover NYC museums that offer free admission**. The site provides:

- Featured museum info and schedules  
- Interactive RSVP system with celebration modal  
- Dark mode toggle and reduce-motion accessibility  
- Responsive design for mobile, tablet, and desktop

---

## ✨ Key Features

### 🎨 Interactive RSVP
- Submit your name, email, and home state  
- See a personalized confirmation modal with animations  
- Participant list updates dynamically  

### 🌙 Light/Dark Mode
- Toggle dark/light theme  
- Preserves preference using `localStorage`  

### 📱 Responsive Design
- Optimized for desktop, tablet, and mobile  
- Flexbox layout for headers, schedule, and sections  

### ⚡ Smooth Animations & Accessibility
- Scrolling animations for section reveal  
- Reduce Motion button for users sensitive to animations  

### 🔗 Helpful Links
- Direct links to museum websites for more info  

---

## ⚙️ Technical Implementation

**Built With:**

- HTML5 – Semantic structure and accessibility  
- CSS3 – Flexbox, Grid, responsive styling, dark mode  
- Vanilla JavaScript – DOM manipulation, modal handling, localStorage  
- Emojis and animations – for RSVP celebration and UI feedback  

**Architecture Highlights:**

- Client-side only – runs entirely in the browser  
- Modular JS for RSVP, modal, dark mode, and motion control  
- State management – tracks RSVP count and theme preference  

---

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Edge, Safari)  
- No backend or server required  

### Installation
```bash
git clone https://github.com/YOUR-USERNAME/nyc-free-museum-nights.git
cd nyc-free-museum-nights
```

Open in browser:
```bash
# Simply open index.html
```

Or run a local server:
```bash
python -m http.server 8000
# Visit http://localhost:8000
```

---

## 📖 Usage Examples

**RSVP Example:**
- User submits form: `Name: Alex, State: NY`  
- Site displays modal: `Thanks for RSVPing, Alex from NY! 🎉`  
- Participant list updates dynamically  

**Dark Mode:**
- Click **Toggle Dark Mode** → site switches theme  
- Preference persists on reload  

**Reduce Motion:**
- Click **Reduce Motion** → disables animations for accessibility  

---

## 🤝 Contributing

This is a portfolio project, but feedback is welcome:

1. Fork the repository  
2. Create a feature branch:  
   ```bash
   git checkout -b feature/improvement
   ```
3. Commit changes:  
   ```bash
   git commit -m "Add some improvement"
   ```
4. Push branch:  
   ```bash
   git push origin feature/improvement
   ```
5. Open a Pull Request  

---

## 📝 Knowledge Base / Notes

- **RSVP** – Form submission logic & participant list  
- **Dark Mode** – localStorage persistence  
- **Animations** – celebration, scroll reveal, emoji wave  
- **Responsive Design** – header, schedule, links, and footer
