'use client';

import { useState } from 'react';
import Nav from '@/components/Nav/Nav';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Process from '@/components/Process/Process';
import Showcase from '@/components/Showcase/Showcase';
import Directions from '@/components/Directions/Directions';
import Benefits from '@/components/Benefits/Benefits';
import CTA from '@/components/CTA/CTA';
import Footer from '@/components/Footer/Footer';
import ContactModal from '@/components/ContactModal/ContactModal';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Nav onContactClick={() => setModalOpen(true)} />
      <Hero onContactClick={() => setModalOpen(true)} />
      <About />
      <Process />
      <Benefits />
      <Showcase />
      <Directions />
      <CTA onContactClick={() => setModalOpen(true)} />
      <Footer />
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}