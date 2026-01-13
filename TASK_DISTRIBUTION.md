# Task Distribution & Work Breakdown Structure (WBS)

## Team Composition (4 Members)
This plan divides the project development among four distinct roles to maximize efficiency and specialization.

1.  **Member A: UI/UX & 3D Lead**  
    *Focus: Visuals, 3D Integration, Animations, Design System*
2.  **Member B: Core Frontend Developer**  
    *Focus: Structure, Layouts, Responsive Design, CSS Framework*
3.  **Member C: Logic & Interactivity Engineer**  
    *Focus: State Management, Event Handling, Filtering, Navigation logic*
4.  **Member D: Backend & QA Specialist**  
    *Focus: API Integration, Forms, SEO, Performance, Hosting*

---

## Work Breakdown Structure (WBS)

### Phase 1: Infrastructure & Design
| Task ID | Task Name | Owner |
| :--- | :--- | :--- |
| 1.1 | Project Initialization & Tailwind Setup | Member B |
| 1.2 | Design System (Colors, Typography, Icons) | Member A |
| 1.3 | Global SEO Configuration (Metadata) | Member D |
| 1.4 | Global State Setup (Context API) | Member C |

### Phase 2: Feature Development
| Task ID | Task Name | Owner |
| :--- | :--- | :--- |
| **2.1** | **Hero Section** | |
| 2.1.1 | 3D Robot Implementation & Resizing | Member A |
| 2.1.2 | Hero Text & Type Animations | Member B |
| 2.1.3 | Motion Animation Integration | Member A |
| **2.2** | **Navigation** | |
| 2.2.1 | Navbar Layout (Desktop) | Member B |
| 2.2.2 | Mobile Menu (Overlay & Toggles) | Member C |
| 2.2.3 | Smooth Scrolling Links | Member C |
| **2.3** | **About Section** | |
| 2.3.1 | Grid Layout & Content | Member B |
| 2.3.2 | Tab Switching System (Skills/Edu) | Member C |
| **2.4** | **Projects Section** | |
| 2.4.1 | Project Cards UI & Hover Effects | Member A |
| 2.4.2 | Project Data Structure & Filtering Logic | Member C |
| **2.5** | **Contact Section** | |
| 2.5.1 | Contact Form UI | Member B |
| 2.5.2 | Email Sending Logic (EmailJS/Resend) | Member D |

### Phase 3: Optimization & Polish
| Task ID | Task Name | Owner |
| :--- | :--- | :--- |
| 3.1 | Performance Tuning (Image Optimization, Lazy Loading) | Member D |
| 3.2 | Cross-Browser & Device Testing | Member D |
| 3.3 | Final Visual Polish (Gradients, Glassmorphism) | Member A |
| 3.4 | Code Refactoring & Cleanup | All |

---

## Detailed Task Assignments

### 1. Member A: UI/UX & 3D Lead
*The "Artist" of the group.*
*   **Robot.jsx**:
    *   Fine-tune `Canvas` settings for `@react-three/fiber`.
    *   Ensure the Robot scale adapts perfectly to Mobile (small) vs Desktop (large).
    *   Debug 3D lighting and positioning.
*   **Animations**:
    *   Implement `framer-motion` variants for entry animations (FadeIn, SlideUp).
    *   Add micro-interactions (hover states on buttons/cards).
*   **Aesthetics**:
    *   create complex gradients in `globals.css`.
    *   Ensure "Glassmorphism" effect on Navbar and Cards looks premium.

### 2. Member B: Core Frontend Developer
*The "Builder" of the group.*
*   **Layout Architecture**:
    *   Build the main `RootLayout`.
    *   Ensure the container constraints (`max-w`, `mx-auto`) are consistent.
*   **Component Structure**:
    *   Implement the skeletal structure of `AboutSection`, `ProjectsSection`, and `Footer`.
    *   Use Tailwind classes to handle the responsive grid system (`grid-cols-1 md:grid-cols-2`).
*   **Responsiveness**:
    *   Verify that text sizes and padding adjust correctly on Phone, Tablet, and Desktop.

### 3. Member C: Logic & Interactivity Engineer
*The "Architect" of the group.*
*   **State Management**:
    *   Handle the `tab` state in `AboutSection` (switching between Skills, Certifications).
    *   Manage the `navbarOpen` state for the Mobile Menu.
*   **Logic**:
    *   Implement the tag filtering logic for the Projects section (e.g., if user clicks "Web", show only Web projects).
    *   Ensure `NavLink` scroll handling works seamlessly.

### 4. Member D: Backend & QA Specialist
*The "Engineer" of the group.*
*   **Email Integration**:
    *   Set up the API route for sending emails.
    *   Connect the frontend Form to `EmailJS` or `Resend`.
    *   Handle loading states and success/error messages.
*   **Quality Assurance**:
    *   Run `npm run build` and fix any linting errors.
    *   Check for hydration errors common in Next.js.
    *   Audit Accessibility (ARIA labels, contrast).
*   **Deployment**:
    *   Prepare the project for deployment (Vercel/Netlify).
