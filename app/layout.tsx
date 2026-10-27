import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: {default:'James Sunday Akam — Senior AI/ML Engineer',template:'%s — James Sunday Akam'},
  description:'Production AI systems across LLMs, RAG, agents, backend engineering, cloud infrastructure, evaluation, and reliability.'
};

const nav=[['/projects','Projects'],['/experience','Experience'],['/open-source','Open Source'],['/engineering','Engineering'],['/about','About']];
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><header className="site-header"><Link className="wordmark" href="/">JSA<span>.</span></Link><nav aria-label="Primary navigation">{nav.map(([href,label])=><Link href={href} key={href}>{label}</Link>)}</nav><Link className="header-contact" href="/contact">Contact</Link></header>{children}<footer><div><strong>James Sunday Akam</strong><span>Senior AI/ML Engineer</span></div><div className="footer-links"><Link href="/projects">Projects</Link><Link href="/resume">Resume</Link><a href="https://github.com/James-Sunday">GitHub ↗</a></div><small>Production AI systems · Abuja, Nigeria</small></footer></body></html>}
