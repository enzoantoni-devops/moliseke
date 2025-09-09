import React from 'react'

const logos = [
  { src: '/logos/aws.svg', alt: 'AWS logo' },
  { src: '/logos/azure.svg', alt: 'Azure logo' },
  { src: '/logos/google-workspace.svg', alt: 'Google Workspace logo' },
  { src: '/logos/office365.svg', alt: 'Office 365 logo' }
]

export default function ProviderLogos() {
  return (
    <div style={{display:'flex',flexWrap:'wrap',gap:24,justifyContent:'center',alignItems:'center',padding:'24px 0'}}>
      {logos.map(logo => (
        <img key={logo.src} src={logo.src} alt={logo.alt} style={{height:40,objectFit:'contain'}} />
      ))}
    </div>
  )
}
