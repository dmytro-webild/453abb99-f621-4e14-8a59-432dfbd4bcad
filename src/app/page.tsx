"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardMedia from '@/components/sections/feature/FeatureCardMedia';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroOverlayTestimonial from '@/components/sections/hero/HeroOverlayTestimonial';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import { Award, Users, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="largeSmall"
        background="noise"
        cardStyle="gradient-bordered"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "About",
          id: "about",
        },
        {
          name: "Portfolio",
          id: "portfolio",
        },
        {
          name: "Testimonials",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Portfolio"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlayTestimonial
      title="Crafting Digital Experiences with Purpose"
      description="I help brands bridge the gap between creative vision and digital execution. Let's build something remarkable together."
      testimonials={[
        {
          name: "Alice Smith",
          handle: "@alicesmith",
          testimonial: "Exceptional vision and execution. Highly recommend.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/cheerful-professional-partners-posing-photo-smiling-looking-camera-african-american-successful-office-employer-caucasian-businesswoman-taking-selfie-teamwork-business-concept_74855-6842.jpg",
        },
        {
          name: "Bob Johnson",
          handle: "@bobjohnson",
          testimonial: "Delivered beyond our expectations. Pure talent.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-handsome-confident-stylish-hipster-lambersexual-modelsexy-modern-man-dressed-elegant-red-suit-fashion-male-posing-studio-near-blue-wall-spectacles_158538-21117.jpg",
        },
        {
          name: "Charlie Davis",
          handle: "@charliedavis",
          testimonial: "Very professional and insightfully creative.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/positive-shaved-head-male-dressed-grey-suit-dark-grey-background_613910-11352.jpg",
        },
        {
          name: "Diana Ross",
          handle: "@dianaross",
          testimonial: "Changed our brand trajectory completely.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-hispanic-woman-wearing-casual-sweater-happy-face-smiling-with-crossed-arms-looking-camera-positive-person_839833-7483.jpg",
        },
        {
          name: "Evan Wright",
          handle: "@evanwright",
          testimonial: "Creative, punctual, and reliable expert.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-businessman-with-smartphone-smiling-camera_23-2148112961.jpg",
        },
      ]}
      buttons={[
        {
          text: "View Portfolio",
          href: "#portfolio",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/neat-tidy-workspace-with-tablet-desk_23-2148592316.jpg"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/happy-beautiful-blonde-woman-wearing-white-shirt-standing-co-working-space-leaning-desk_74855-15151.jpg",
          alt: "Portrait 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-cheerful-manager-sunny-day_1139-417.jpg",
          alt: "Portrait 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/successful-young-man-stylish-hat-relaxing-alone-cozy-cafeteria-lunch-break-looking-with-happy-expression_273609-1935.jpg",
          alt: "Portrait 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/beautiful-mature-woman-having-fun-time_23-2149232840.jpg",
          alt: "Portrait 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-working-woman-office-clothing-smiling-looking-camera-standing-white-background-professional-women-concept_176420-52120.jpg",
          alt: "Portrait 5",
        },
      ]}
      avatarText="Trusted by 100+ industry leaders"
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={false}
      title="By The Numbers"
      metrics={[
        {
          icon: Award,
          label: "Projects Completed",
          value: "150+",
        },
        {
          icon: Users,
          label: "Happy Clients",
          value: "80+",
        },
        {
          icon: Zap,
          label: "Years Experience",
          value: "10+",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "95%",
          title: "Client Retention",
          items: [
            "Deep engagement",
            "Collaborative approach",
          ],
        },
        {
          id: "m2",
          value: "120%",
          title: "Avg Growth",
          items: [
            "KPI focus",
            "Performance driven",
          ],
        },
        {
          id: "m3",
          value: "48h",
          title: "Rapid Delivery",
          items: [
            "Agile workflow",
            "Efficient results",
          ],
        },
      ]}
      title="Expertise Focus"
      description="I bring a multi-disciplinary approach to digital design."
    />
  </div>

  <div id="skills" data-section="skills">
      <FeatureCardMedia
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      features={[
        {
          id: "f1",
          title: "Brand Strategy",
          description: "Defining your identity in a noisy market.",
          tag: "Strategy",
          imageSrc: "http://img.b2bpic.net/free-photo/team-meeting-with-growth-chart-overlay_23-2152011776.jpg",
        },
        {
          id: "f2",
          title: "UI/UX Design",
          description: "Creating seamless user experiences.",
          tag: "Design",
          imageSrc: "http://img.b2bpic.net/free-photo/nature-ecology-go-green-concept_53876-124937.jpg",
        },
        {
          id: "f3",
          title: "Digital Growth",
          description: "Scaling products through targeted content.",
          tag: "Marketing",
          imageSrc: "http://img.b2bpic.net/free-photo/website-design-content-layout-graphic_53876-13764.jpg",
        },
      ]}
      title="My Core Competencies"
      description="Tools and frameworks I leverage to deliver results."
    />
  </div>

  <div id="portfolio" data-section="portfolio">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          brand: "TechCorp",
          name: "UI Dashboard",
          price: "Featured",
          rating: 5,
          reviewCount: "24",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-measuring-tools-still-life_23-2150440938.jpg",
        },
        {
          id: "p2",
          brand: "BrandIdentity",
          name: "Logo Redesign",
          price: "Featured",
          rating: 5,
          reviewCount: "12",
          imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-stationery-supplies-companies_23-2148500459.jpg",
        },
        {
          id: "p3",
          brand: "AppScale",
          name: "Mobile Redesign",
          price: "Featured",
          rating: 5,
          reviewCount: "30",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-designer-holding-smartphone_23-2149930986.jpg",
        },
        {
          id: "p4",
          brand: "PrintWorks",
          name: "Layout Concept",
          price: "Featured",
          rating: 5,
          reviewCount: "18",
          imageSrc: "http://img.b2bpic.net/free-photo/illustrators-tools-arrangement-still-life_23-2150163144.jpg",
        },
        {
          id: "p5",
          brand: "DataViz",
          name: "Analytics Tool",
          price: "Featured",
          rating: 5,
          reviewCount: "15",
          imageSrc: "http://img.b2bpic.net/free-photo/empty-startup-office-displays-statistics_482257-119484.jpg",
        },
        {
          id: "p6",
          brand: "AdCamp",
          name: "Campaign Visual",
          price: "Featured",
          rating: 5,
          reviewCount: "22",
          imageSrc: "http://img.b2bpic.net/free-photo/business-man-planning-strategy-startup-presentation-with-asian-women-boardroom-briefing-colleagues-about-new-ideas-job-partners-working-develop-financial-collaboration_482257-42841.jpg",
        },
      ]}
      title="Portfolio Highlights"
      description="A selection of my best work across industries."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="split"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",
          title: "Top-tier design",
          quote: "Incredible design eye.",
          name: "Alice Smith",
          role: "CEO",
          imageSrc: "http://img.b2bpic.net/free-photo/successful-young-woman-looking-away_23-2148452666.jpg",
        },
        {
          id: "t2",
          title: "Impactful work",
          quote: "Transformed our product.",
          name: "Bob Johnson",
          role: "CTO",
          imageSrc: "http://img.b2bpic.net/free-photo/smiley-girl-with-pink-hair-hoodie_23-2148629699.jpg",
        },
        {
          id: "t3",
          title: "Highly professional",
          quote: "Seamless collaboration.",
          name: "Charlie Davis",
          role: "Marketing",
          imageSrc: "http://img.b2bpic.net/free-photo/beauty-woman-s-with-blue-eyes-portrait_633478-325.jpg",
        },
        {
          id: "t4",
          title: "Stellar outcome",
          quote: "Beyond all expectations.",
          name: "Diana Ross",
          role: "Founder",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-business-woman-portrait_23-2149280776.jpg",
        },
        {
          id: "t5",
          title: "Reliable expert",
          quote: "I'll hire again soon.",
          name: "Evan Wright",
          role: "Product Lead",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-woman-posing-with-avantgarde-head-piece_23-2149020796.jpg",
        },
      ]}
      title="Voices of Success"
      description="What partners and clients say about my work."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "How do you start?",
          content: "I begin with a deep discovery session.",
        },
        {
          id: "q2",
          title: "What is your timeline?",
          content: "Varies by project scale, usually 2-4 weeks.",
        },
        {
          id: "q3",
          title: "Are you freelance?",
          content: "Yes, always open to new contracts.",
        },
      ]}
      title="Common Questions"
      description="Frequently asked questions about my workflow."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={true}
      background={{
        variant: "radial-gradient",
      }}
      tag="Let's Talk"
      title="Ready for your next project?"
      description="I'm always open to new and exciting challenges."
      buttons={[
        {
          text: "Contact Me",
          href: "mailto:hello@me.com",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Portfolio"
      leftLink={{
        text: "Privacy Policy",
        href: "#",
      }}
      rightLink={{
        text: "© 2024 All Rights Reserved",
        href: "#",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
