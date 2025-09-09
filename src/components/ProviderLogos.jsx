import React from 'react';

export default function ProviderLogos() {
  const providers = [
    {
      name: 'Amazon Web Services',
      src: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
      alt: 'Amazon Web Services logo'
    },
    {
      name: 'Microsoft Azure',
      src: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg',
      alt: 'Microsoft Azure logo'
    },
    {
      name: 'Google Cloud',
      src: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg',
      alt: 'Google Cloud logo'
    },
    {
      name: 'Google Workspace',
      src: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Google_Workspace_Logo.svg',
      alt: 'Google Workspace logo'
    },
    {
      name: 'Office 365',
      src: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Office365.png',
      alt: 'Office 365 logo'
    }
  ];

  return (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
      {providers.map(p => (
        <img key={p.name} src={p.src} alt={p.alt} style={{ height: 32 }} />
      ))}
    </div>
  );
}
