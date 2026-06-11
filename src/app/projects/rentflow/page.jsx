"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { ArrowLeftIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export default function RentFlowCaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <article className="container mt-32 mx-auto px-6 sm:px-12 max-w-4xl pb-24 text-slate-300 font-light leading-relaxed">
      
      <Link href="/#projects" className="inline-flex items-center gap-2 text-cyan hover:text-magenta transition-colors mb-8 font-mono text-sm tracking-widest uppercase">
        <ArrowLeftIcon className="w-4 h-4" /> Back to Portfolio
      </Link>

      <header className="mb-16 border-b border-white/10 pb-12">
        <h1 className="font-[family-name:var(--font-syne)] text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
          Rent<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-magenta">Flow</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 mb-8 font-light">
          A Local-First Property Management Dashboard
        </p>
        <a 
          href="https://rent-flow-xi.vercel.app" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 hover:border-cyan hover:bg-cyan/10 hover:shadow-[0_0_20px_var(--color-cyan)] text-white font-bold tracking-widest uppercase transition-all duration-300 rounded-full"
        >
          View Live Project <ArrowTopRightOnSquareIcon className="w-5 h-5" />
        </a>
      </header>

      <div className="space-y-12">
        <section>
          <h2 className="font-[family-name:var(--font-syne)] text-3xl font-bold text-white mb-6">Introduction</h2>
          <p className="mb-4">
            RentFlow is a property management web application I built to help independent landlords manage tenants, rent payments, expenses, and maintenance records without relying on expensive subscription-based software.
          </p>
          <p className="mb-4">
            The idea came from noticing how many small landlords still depend on spreadsheets, notebooks, or multiple apps to keep track of property-related information. While existing property management platforms offer many features, they often require monthly subscriptions, internet access, and cloud storage of sensitive financial data.
          </p>
          <p>
            I wanted to build something simpler: a lightweight application that works directly in the browser and keeps all data on the user's device.
          </p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-syne)] text-3xl font-bold text-white mb-6">The Problem</h2>
          <p className="mb-4">
            Most property management solutions are designed for large organizations and include features that many small landlords never use. These platforms can be expensive and often store financial and tenant information on external servers.
          </p>
          <p className="mb-4">
            On the other hand, spreadsheets can quickly become difficult to maintain. Rent records, maintenance requests, and expense tracking are usually spread across multiple files, making it easy to lose information or make mistakes.
          </p>
          <p>
            I wanted to create a single dashboard where landlords could manage everything from one place while maintaining complete control over their data.
          </p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-syne)] text-3xl font-bold text-white mb-6">Building the Solution</h2>
          <p className="mb-4">
            I developed RentFlow as a local-first web application using HTML, CSS, and Vanilla JavaScript.
          </p>
          <p className="mb-4">
            Instead of using a backend database, I chose browser localStorage to store application data. This decision allowed users to access the application without creating accounts or sharing their data with third-party services.
          </p>
          <p>
            My focus throughout development was simplicity, responsiveness, and privacy.
          </p>
        </section>

        <section className="bg-white/5 p-8 border border-white/10 rounded-2xl">
          <h2 className="font-[family-name:var(--font-syne)] text-2xl font-bold text-cyan mb-6">Technologies Used</h2>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-sm">
            <li className="flex items-center gap-2"><span className="text-magenta">▸</span> HTML5</li>
            <li className="flex items-center gap-2"><span className="text-magenta">▸</span> CSS3</li>
            <li className="flex items-center gap-2"><span className="text-magenta">▸</span> Flexbox & Grid</li>
            <li className="flex items-center gap-2"><span className="text-magenta">▸</span> Vanilla JS</li>
            <li className="flex items-center gap-2"><span className="text-magenta">▸</span> Chart.js</li>
            <li className="flex items-center gap-2"><span className="text-magenta">▸</span> localStorage</li>
            <li className="flex items-center gap-2"><span className="text-magenta">▸</span> Font Awesome</li>
            <li className="flex items-center gap-2"><span className="text-magenta">▸</span> Google Fonts</li>
          </ul>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-syne)] text-3xl font-bold text-white mb-8 border-b border-white/10 pb-4">Key Features</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-magenta mb-3">Dashboard Overview</h3>
              <p className="mb-3">The dashboard gives users a quick summary of their property performance. It automatically calculates:</p>
              <ul className="list-disc list-inside space-y-1 mb-4 text-slate-400 pl-4">
                <li>Total rent collected</li>
                <li>Pending rent payments</li>
                <li>Property expenses</li>
                <li>Net profit</li>
                <li>Occupancy rate</li>
              </ul>
              <p>One thing I paid special attention to was ensuring these values update instantly whenever data changes, making the dashboard feel responsive and interactive.</p>
            </div>

            <div>
              <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-magenta mb-3">Tenant Management</h3>
              <p>Users can add and manage tenant information, including lease details, rent amounts, deposits, and payment records. The goal was to reduce the need for separate spreadsheets and provide a cleaner way to organize tenant information.</p>
            </div>

            <div>
              <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-magenta mb-3">Expense Tracking</h3>
              <p>I added expense categories such as maintenance, utilities, and taxes so users can understand where money is being spent. This feature helps landlords get a clearer picture of their property's financial performance.</p>
            </div>

            <div>
              <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-magenta mb-3">Financial Reports</h3>
              <p>Using Chart.js, I created interactive charts that visualize income and expenses over time. Rather than looking at rows of numbers, users can quickly identify trends and understand cash flow through visual reports.</p>
            </div>

            <div>
              <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-magenta mb-3">CSV Export</h3>
              <p>Many landlords still work with accountants or prefer keeping backups of their records. To support this, I implemented CSV export functionality entirely in JavaScript, allowing users to download their data whenever needed.</p>
            </div>

            <div>
              <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-magenta mb-3">Maintenance Management</h3>
              <p>The maintenance section allows landlords to record property issues and assign priority levels. This feature helps ensure that repair requests are tracked and not forgotten.</p>
            </div>

            <div>
              <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-magenta mb-3">Receipt Generation & UPI</h3>
              <p>To simplify rent collection, I added automatic receipt generation along with UPI QR code support. This makes it easier for tenants to complete payments and provides landlords with payment records immediately.</p>
            </div>

            <div>
              <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-magenta mb-3">Dark Mode</h3>
              <p>I implemented a theme system using CSS variables to support both light and dark modes. Instead of reloading the page or switching stylesheets, the theme updates instantly, creating a smoother user experience.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-syne)] text-3xl font-bold text-white mb-8 border-b border-white/10 pb-4">Challenges I Faced</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-cyan mb-3">Managing Data Without a Backend</h3>
              <p className="mb-3">The biggest challenge was handling application data without using a database. Since everything is stored in localStorage, I needed to carefully design how data was structured and validated. I created a consistent JSON format and added checks to prevent invalid records from affecting the application.</p>
              <p>This experience taught me a lot about state management and data organization.</p>
            </div>

            <div>
              <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-cyan mb-3">Responsive Design</h3>
              <p>Another challenge was making the application usable on smaller screens. Tables, charts, and financial data can become difficult to read on mobile devices, so I spent time refining layouts and testing different screen sizes to ensure a good user experience across phones, tablets, and desktops.</p>
            </div>

            <div>
              <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-cyan mb-3">Performance</h3>
              <p>As more tenants and transactions were added, dashboard calculations became more complex. To keep the application responsive, I optimized how data was processed and how UI updates were triggered, reducing unnecessary re-rendering of elements.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-syne)] text-3xl font-bold text-white mb-6">What I Learned</h2>
          <p className="mb-4">This project helped me improve my skills in:</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 pl-4 text-slate-300">
            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-cyan"></div> JavaScript application architecture</li>
            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-cyan"></div> Client-side data management</li>
            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-cyan"></div> Responsive web design</li>
            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-cyan"></div> Data visualization</li>
            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-cyan"></div> Performance optimization</li>
            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-cyan"></div> User interface design</li>
          </ul>
          <p>More importantly, it showed me that useful business applications can be built without large frameworks or complex backend systems when the requirements are carefully planned.</p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-syne)] text-3xl font-bold text-white mb-6">Future Improvements</h2>
          <ul className="space-y-2 pl-4 text-slate-300">
            <li className="flex items-center gap-3"><span className="text-magenta">→</span> PDF report generation</li>
            <li className="flex items-center gap-3"><span className="text-magenta">→</span> Cloud backup and synchronization</li>
            <li className="flex items-center gap-3"><span className="text-magenta">→</span> Multi-property management</li>
            <li className="flex items-center gap-3"><span className="text-magenta">→</span> Automated rent reminders</li>
            <li className="flex items-center gap-3"><span className="text-magenta">→</span> Progressive Web App (PWA) support</li>
            <li className="flex items-center gap-3"><span className="text-magenta">→</span> Advanced analytics and forecasting</li>
            <li className="flex items-center gap-3"><span className="text-magenta">→</span> IndexedDB support for larger datasets</li>
          </ul>
        </section>

        <section className="bg-gradient-to-br from-magenta/10 to-cyan/10 p-8 rounded-2xl border border-white/10 mt-16 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-magenta to-cyan"></div>
          <h2 className="font-[family-name:var(--font-syne)] text-3xl font-bold text-white mb-6">Conclusion</h2>
          <p className="mb-4">
            RentFlow started as a simple idea to replace spreadsheets with a more organized solution for landlords. Over time, it evolved into a complete property management dashboard that combines rent tracking, expense management, reporting, and maintenance logging in a single application.
          </p>
          <p>
            The project strengthened my frontend development skills and gave me valuable experience building a real-world application focused on usability, performance, and data privacy.
          </p>
        </section>

      </div>
    </article>
  );
}
