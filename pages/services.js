import { useId, useState } from 'react';
import WhatWeOffer from '@/components/services/WhatWeOffer';
import ServiceDialog from '@/components/services/ServiceDialog';

export default function Services() {
  const [primaryOpen, setPrimaryOpen] = useState(false);
  const [secondaryOpen, setSecondaryOpen] = useState(false);
  const primaryTitleId = useId();
  const secondaryTitleId = useId();

  return (
    <>
      <WhatWeOffer />
      <button type='button' onClick={() => setPrimaryOpen(true)}>
        Open primary test dialog
      </button>
      <button type='button' onClick={() => setSecondaryOpen(true)}>
        Open secondary test dialog
      </button>
      <ServiceDialog
        open={primaryOpen}
        onClose={() => setPrimaryOpen(false)}
        titleId={primaryTitleId}
        variant='primary'
        label='Web Development'
        description='This is placeholder dialog content for testing the primary variant.'
      />
      <ServiceDialog
        open={secondaryOpen}
        onClose={() => setSecondaryOpen(false)}
        titleId={secondaryTitleId}
        variant='secondary'
        label='Product & Project Management'
        description='This is placeholder dialog content for testing the secondary variant.'
      />
    </>
  );
}
