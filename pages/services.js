import { useId, useState } from 'react';
import WhatWeOffer from '@/components/services/WhatWeOffer';
import Dialog from '@/components/overlays/Dialog';

export default function Services() {
  const [open, setOpen] = useState(false);
  const titleId = useId();

  return (
    <>
      <WhatWeOffer />
      <button type='button' onClick={() => setOpen(true)}>
        Open test dialog
      </button>
      <Dialog open={open} onClose={() => setOpen(false)} titleId={titleId}>
        <h2 id={titleId}>Test dialog</h2>
        <p>This is a throwaway dialog to verify the Dialog primitive.</p>
        <button type='button' onClick={() => setOpen(false)}>
          Close
        </button>
      </Dialog>
    </>
  );
}
