"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const sections = [
  { id: "agreement", title: "Agreement to Our Legal Terms" },
  { id: "section-1", title: "1. Our Services" },
  { id: "section-2", title: "2. Intellectual Property Rights" },
  { id: "section-3", title: "3. User Representations" },
  { id: "section-4", title: "4. User Registration" },
  { id: "section-5", title: "5. Purchases and Payment" },
  { id: "section-6", title: "6. Subscriptions" },
  { id: "section-7", title: "7. Prohibited Activities" },
  { id: "section-8", title: "8. User Generated Contributions" },
  { id: "section-9", title: "9. Contribution License" },
  { id: "section-10", title: "10. Social Media" },
  { id: "section-11", title: "11. Advertisers" },
  { id: "section-12", title: "12. Services Management" },
  { id: "section-13", title: "13. Privacy Policy" },
  { id: "section-14", title: "14. Term and Termination" },
  { id: "section-15", title: "15. Modifications and Interruptions" },
  { id: "section-16", title: "16. Governing Law" },
  { id: "section-17", title: "17. Dispute Resolution" },
  { id: "section-18", title: "18. Corrections" },
  { id: "section-19", title: "19. Disclaimer" },
  { id: "section-20", title: "20. Limitations of Liability" },
  { id: "section-21", title: "21. Indemnification" },
  { id: "section-22", title: "22. User Data" },
  { id: "section-23", title: "23. Electronic Communications" },
  { id: "section-24", title: "24. California Users and Residents" },
  { id: "section-25", title: "25. Miscellaneous" },
  { id: "section-26", title: "26. Contact Us" },
];

export default function TableOfContents() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id)
      })).filter(item => item.element !== null);

      if (sectionElements.length === 0) return;

      // Find the section that is currently in view
      const currentSection = sectionElements.find(section => {
        if (!section.element) return false;
        const rect = section.element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom > 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      } else if (window.scrollY < 200) {
        setActiveSection("agreement");
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    setTimeout(handleScroll, 100);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    
      <div className="bg-card border rounded-lg p-4">
        <h2 className="font-bold text-lg mb-4">Table of Contents</h2>
        <nav className="space-y-1">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleClick(section.id)}
              className={cn(
                "block w-full text-left text-sm py-1.5 px-2 rounded-md transition-colors",
                activeSection === section.id
                  ? "bg-primary/10 text-primary font-medium"
                  : "hover:bg-secondary"
              )}
            >
              {section.title}
            </button>
          ))}
        </nav>
      </div>
    
  );
}