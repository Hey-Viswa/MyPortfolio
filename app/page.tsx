import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Head from 'next/head'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import ContactMe from '@/components/ContactMe'

function IndexPage() {
  return (
    <div>
      <Head>
        <title>Biswaranjan&apos;s Portfilio</title>
      </Head>
      {/* Header */}
      <Header />
      {/* Hero */}
      <Hero/>
      {/* About */}
      <About/>
      {/* Experience */}
      <Experience/>
      {/* Skills */}
      <Skills/>
      {/* Projects */}
      <Projects/>
      {/* Contact Me */}
      <ContactMe/>
    </div>
  )
}

export default IndexPage