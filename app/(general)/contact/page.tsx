import type { Metadata } from 'next';
import React from 'react'


// Es necesario especificar el tipo "Metadata" para tener al autocompletado
export const metadata: Metadata = {
 title: 'Contact pageeee',
 description: 'SEO Contact pageeee',
};

const ContactPage = () => {
  return (
    <>
        <span className='text-5xl'>Contact page</span>
    </>
  )
}

export default ContactPage