import { ArrowDownRight, ArrowUpRight } from 'lucide-react'

import SignalSculpture from './SignalSculpture'

export default function Hero() {
  return (
    <section id="home" className="research-hero">
      <div className="research-wrap">
        <p className="research-kicker">AI/ML Researcher · IIIT Tiruchirappalli</p>
        <h1>Vijaya<br />Ragunath S<span aria-hidden="true">.</span></h1>
        <h2>Generative AI &amp; Computer Vision</h2>
        <p className="research-intro">I work on Indian Sign Language translation research at IIIT Tiruchirappalli. My technical interests span deep learning, speech recognition, and local language models.</p>
        <div className="research-actions">
          <a className="research-primary" href="#projects">Explore technical work <ArrowDownRight size={18} /></a>
          <a href="/resume.pdf">View résumé <ArrowUpRight size={16} /></a>
        </div>
      </div>
      <SignalSculpture />
    </section>
  )
}
