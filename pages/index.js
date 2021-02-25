import posthog from 'posthog-js'
import React, {useEffect} from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import withDarkMode, {useDarkMode}  from 'next-dark-mode'

function Home(){

    const {
      darkModeActive,    // boolean - whether the dark mode is active or not
    } = useDarkMode();

    useEffect(() => {
      posthog.init('HAWIKOJJRBHkoVjAEHJGdEiHvBXVZri3m-rzS9hbN2I', { api_host: 'https://app.posthog.com' });
    }, [])

  return(
  <div className={darkModeActive ? 'dark' : 'light'}>
    <Head title="Cortex Manifesto" />
    <Nav darkModeActive={darkModeActive} />

    <div className="hero">
      <h1 className="title">Cortex Manifesto</h1>
      <small>Published on Feb. 23rd, 2021</small>
      <p className="description">
      Cortex is a value-based technology organization. We want to reassemble tools to democratize knowledge and creation. All of the work that we do is led by a guiding thesis: 
      <b> we can re-purpose pre-existing tools to solve the easiest problems without starting from scratch.</b>
      </p>
      <p>We post this manifesto to hold ourselves and our community accountable to our values and our vision.<br/>
      We hold these truths to be self-evident:</p>
      <ol>
        <li>Personal data and identity should be portable and secure across the Internet</li>
        <li>A tool should solve a concrete purpose, and can be gamified to make the experience more joyful, not corruptly persuasive</li>
        <li>Tools should help us perform multiple actions without compromising our focus.</li>
        <li>Access to knowledge and creation should be free and unfiltered, <i>forever</i>.</li>
        <li>Tech should give us the space and relational information we need to explore and understand.</li>
        <li>Structuring thoughts and actions into trails help us make quicker associations and smarter decisions.</li>
        <li>Our mental and physical wellbeing are crucial to the quality of our lives and our work. </li>
        <li>Organizations should strive to act as pro-bono government agencies.</li>
        <li>A connection with nature helps us better identify what is essential.</li>
        <li>If we can re-purpose pre-existing tools to solve the easiest problems without starting from scratch, then we will enter a golden age we haven't seen since the likes of ancient Roam.</li>
      </ol>
    </div>
    <style jsx>{`
      .hero {
        width: 60%;
        text-align: center;
        margin: auto;
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
      .li{
        margin-bottom: 2.5%
      }
      .light {
        background-color: #fff;
        color: #353F71;
      } 
      .dark {
        background-color: #10171d;
        color: #dfdfdf;
      }
    `}</style>
  </div>
  )}

export default withDarkMode(Home)
