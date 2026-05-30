import { Link } from 'react-router-dom'
import './Home.css'
import heroBg from '../../assets/hero-bg.jpg'
import advisorImg from '../../assets/about1.png'
import advisorImg2 from '../../assets/about2.png'
import smallImage from '../../assets/small-image.jpg'

const SERVICES = [
  {
    title: 'Will & Trust - Estate Planning',
    description: 'Secure your legacy and protect your loved ones with customized estate planning, wills, and revocable living trusts.',
    icon: 'history_edu',
  },
  {
    title: 'Term Life Insurance',
    description: 'Ensure your family’s financial security with affordable, high-coverage term life insurance policies tailored to your needs.',
    icon: 'favorite',
  },
  {
    title: 'Retirement Planning',
    description: 'Build a reliable income stream and optimize your portfolio to enjoy a worry-free, financially stable retirement.',
    icon: 'wb_sunny',
  },
  {
    title: 'Fixed Indexed Annuities',
    description: 'Protect your principal capital while participating in market upside with zero downside risk through indexed annuities.',
    icon: 'trending_up',
  },
  {
    title: 'Health Insurance',
    description: 'Comprehensive health coverage solutions for individuals, families, and businesses to safeguard against medical costs.',
    icon: 'health_and_safety',
  },
  {
    title: 'Mortgage Loans',
    description: 'Get competitive interest rates and flexible financing terms for home purchases, refinancing, or property investments.',
    icon: 'home',
  },
  {
    title: 'Accelerated Tax Depreciation',
    description: 'Unlock major tax savings on commercial properties using cost segregation studies and bonus depreciation strategies.',
    icon: 'percent',
  },
  {
    title: 'Alternate Investments & Tax Write-Offs',
    description: 'Diversify your wealth in alternative assets designed to generate strong returns while offering maximum tax benefits.',
    icon: 'payments',
  },
  {
    title: 'Tax-Filing & Compliance',
    description: 'Maximize your deductions and stay fully compliant with expert personal and corporate tax preparation services.',
    icon: 'receipt_long',
  },
]

const TESTIMONIALS = [
  {
    name: 'Sarah Jenkins',
    location: 'Property Investor, TX',
    text: 'The accelerated tax depreciation segregation study they conducted saved us over $140,000 in taxes in the first year alone! Highly professional team.',
    rating: 5,
    initials: 'SJ'
  },
  {
    name: 'Michael Chen',
    location: 'Retiree, CA',
    text: 'Setting up my Fixed Indexed Annuity gave me the security I needed. I get to participate in stock market gains without worrying about losing my nest egg.',
    rating: 5,
    initials: 'MC'
  },
  {
    name: 'The Robertson Family',
    location: 'Homeowners, FL',
    text: 'They helped us set up our Will and Revocable Trust, and refinance our mortgage all under one roof. The convenience and expertise are unmatched.',
    rating: 5,
    initials: 'RF'
  }
]

const STATS = [
  { number: '$1.2B+', label: 'Assets Under Advisement' },
  { number: '15k+', label: 'Families Secured' },
  { number: '99%', label: 'Client Satisfaction' },
  { number: '15+', label: 'Years of Excellence' }
]

export default function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero" aria-label="Introduction">
        <div className="hero__card">
          <div className="hero__content">
            <h1 className="hero__title">Value Services</h1>
            <p className="hero__subtitle">Estate Planning, Kids College Plans <br />And Tax Planning</p>
            <div className="hero__buttons">
              <a href="#services" className="hero__secondary-cta">
                Our Services
              </a>
              <Link to="/contact" className="hero__cta">
                Get Started
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="stats-bar" aria-label="Key Achievements">
        <div className="stats-bar__inner">
          {STATS.map((stat, idx) => (
            <div key={idx} className="stats-bar__item">
              <span className="stats-bar__number">{stat.number}</span>
              <span className="stats-bar__label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services" aria-labelledby="services-heading">
        <div className="services__header">
          <span className="services__tag">Our Expertise</span>
          <h2 id="services-heading" className="services__title">Comprehensive Financial Solutions</h2>
          <p className="services__description">
            From wealth building and tax optimization to protecting your family's estate, we provide end-to-end services.
          </p>
        </div>

        <div className="services__grid">
          {SERVICES.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-card__accent" />
              <div className="service-card__icon-wrap">
                <span className="material-symbols-outlined service-card__icon">{service.icon}</span>
              </div>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__text">{service.description}</p>
              <Link to="/contact" className="service-card__link">
                Learn More
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Quote Banner Section */}
      <section className="quote-banner" aria-label="Client Quote">
        <div className="quote-banner__inner">
          <div className="quote-banner__image-left">
            <img src={advisorImg} alt="Illustration of client on the left" className="quote-banner__img" />
          </div>
          <div className="quote-banner__content">
            <h2 className="quote-banner__heading">
              <span className="highlight">Life</span> Moves <span className="highlight">Fast</span>
            </h2>
            <p className="quote-banner__subheading">
              The Decisions You Make <span className="highlight"> Today </span>Can Protect What <span className="highlight"> Matters Most </span>
            </p>
            <Link to="/contact" className="quote-banner__cta">
              Book a Discovery Call
              <span className="material-symbols-outlined filled" style={{ fontSize: '18px', marginLeft: '6px' }}>play_arrow</span>
            </Link>
          </div>
          <div className="quote-banner__image-right">
            <img src={advisorImg2} alt="Illustration of client on the right" className="quote-banner__img" />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission" aria-labelledby="mission-heading">
        <div className="mission__inner">
          <div className="mission__text">
            <span className="mission__tag">Who We Are</span>
            <h2 id="mission-heading" className="mission__title">Dedicated to Your Financial Success</h2>
            <div className="mission__body">
              <p>
                At Value Services, we integrate estate planning, insurance, retirement, mortgages, and tax consulting under one unified umbrella.
              </p>
              <p>
                Our interdisciplinary team works together to ensure your wealth creation is supported by bulletproof asset protection and advanced tax-saving mechanisms. We believe that true financial security requires a holistic approach.
              </p>
            </div>
            <Link to="/contact" className="mission__cta">
              Read Our Full Story
            </Link>
          </div>
          <div className="mission__images">
            <div className="mission__blob" />
            <div className="mission__img-main">
              <img src={heroBg} alt="Modern financial center architecture" />
            </div>
            <div className="mission__img-overlay">
              <img src={smallImage} alt="Team of wealth advisors in a meeting" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials" aria-labelledby="testimonials-heading">
        <div className="testimonials__header">
          <span className="testimonials__tag">Testimonials</span>
          <h2 id="testimonials-heading" className="testimonials__title">What Our Clients Say</h2>
        </div>

        <div className="testimonials__grid">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="testimonial-card">
              <span className="material-symbols-outlined testimonial-card__quote-icon">format_quote</span>
              <div className="testimonial-card__stars">
                {[...Array(t.rating)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined filled">star</span>
                ))}
              </div>
              <p className="testimonial-card__text">"{t.text}"</p>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar">{t.initials}</div>
                <div>
                  <h4 className="testimonial-card__name">{t.name}</h4>
                  <span className="testimonial-card__location">{t.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
