import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const links = [
  { href: 'https://about.withcortex.com', label: 'About' },
  { href: 'https://graphportability.withcortex.com', label: 'Graph Portability' },
  { href: 'https://github.com/stecknologies/withcortex', label: 'GitHub' },
  { href: 'https://twitter.com/withcortex', label: 'Twitter' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})


const Nav = (props) => {
  const darkModeActiveVar = props.darkModeActive ? '#10171d' : '#fff';
  return(
  <nav>
    <ul>
      <li>
        <Link prefetch href="/">
          <Image src="/images/cortex-icon.png" alt="Cortex icon" width="87" height="75" />
        </Link>
      </li>
      <ul className={props.darkModeActive ? 'nav-dark' : 'nav-light'}>
        {links.map(({ key, href, label }) => (
          <li key={key}>
            <Link href={href}>
              <a>{label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
        background-color: ${darkModeActiveVar};
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        text-decoration: none;
        font-size: 13px;
      }
      .nav-dark a{
        color: #dfdfdf;
      }
      .nav-light a{
        color: #353F71;
      }
    `}</style>
  </nav>
)}

export default Nav
