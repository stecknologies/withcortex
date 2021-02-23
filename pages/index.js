import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'

const Home = () => (
  <div>
    <Head title="Home" />
    <Nav />

    <div className="hero">
      <h1 className="title">Cortex Manifesto</h1>
      <p className="description">
      Cortex is a value-based technology organization. We want to reassemble tools to democratize knowledge and creation. All of the work that we do is led by a guiding thesis: 
      <span>we can re-purpose pre-existing tools to solve the easiest problems without starting from scratch.</span>
      </p>
      <p>We post this manifesto to hold ourselves and our community accountable to our values and our vision.<br/>
      We hold these truths to be self-evident:</p>
      <ul>
        <li>Personal data and identity should be portable and secure across the Internet</li>
        <li>A tool should solve a concrete purpose, and can be gamified to make the experience more joyful, not corruptly persuasive</li>
        <li>Tools should help us perform multiple actions without compromising our focus.</li>
        <li>Access to knowledge and creation should be free and unfiltered, <i>forever</i>.</li>
        <li>Tech should give us the space and relational information we need to explore and understand.</li>
        <li>Structuring thoughts and actions into trails help us make quicker associations and smarter decisions.</li>
        <li>Our mental and physical wellbeing are crucial to the quality of our lives and our work. </li>
        <li>Organizations should strive to act as pro-bono government agencies.(talk about community)</li>
        <li>A connection with nature helps us better identify what is essential.</li>
        <li>If we can re-purpose pre-existing tools to solve the easiest problems without starting from scratch, then we will enter a golden age we haven't seen since the likes of ancient Roam.</li>
      </ul>
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </div>
)

export default Home
