"use client"
import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes';
import HeroSection from './HeroSection'
import InsuranceSection from './InsuranceSection'
import WhyAiMental from './WhyAiMental'
import StaticsSection from './StaticsSection'
import BlogSection from './BlogSection'
import FAQSection from './FAQSection'
import CommentsSection from './CommentsSection'


const Index = () => {

  // send dark mode situation to child components to render dark components
	const { theme, setTheme } = useTheme();
  return (
    <div>
        <HeroSection  theme={theme}/>
        <InsuranceSection  theme={theme} />
        <WhyAiMental/>
        <StaticsSection theme={theme} />
        <BlogSection/>
        <CommentsSection />
        <FAQSection theme={theme}/>
    </div>
  )
}

export default Index