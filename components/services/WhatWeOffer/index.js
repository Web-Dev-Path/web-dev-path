import { useId, useState } from 'react';
import Pill from '@/components/services/Pill';
import Container from '@/components/containers/Container';
import ServiceDialog from '@/components/services/ServiceDialog';
import { services } from '@/utils/services';
import { useAutoScroll } from './useAutoScroll';
import styles from './WhatWeOffer.module.scss';

const rowDirections = ['left', 'right', 'left'];

function PillRow({ pills, direction, onSelect }) {
  const { viewportRef, groupRef, pause, resume } = useAutoScroll({
    direction,
  });

  return (
    <div
      className={styles.pillRowViewport}
      ref={viewportRef}
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocus={pause}
      onBlur={resume}
    >
      <div className={styles.pillTrack}>
        <div className={styles.pillGroup} ref={groupRef}>
          {pills.map(pill => (
            <Pill
              key={pill.id}
              label={pill.label}
              variant={pill.variant}
              onClick={() => onSelect(pill)}
            />
          ))}
        </div>
        <div className={styles.pillGroup} aria-hidden='true'>
          {pills.map(pill => (
            <Pill
              key={`${pill.id}-duplicate`}
              label={pill.label}
              variant={pill.variant}
              tabIndex={-1}
              onClick={() => onSelect(pill)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function WhatWeOffer() {
  const [activeService, setActiveService] = useState(null);
  const titleId = useId();

  return (
    <section className={styles.whatWeOffer}>
      <Container>
        <h2 className={styles.heading}>What We Offer</h2>
        <p className={styles.body}>
          We deliver <strong>high-end digital solutions</strong> — from{' '}
          <strong>design and development</strong> to{' '}
          <strong>project management and strategy</strong> — tailored to your
          goals and budget, with no compromise on quality.
        </p>
        <div className={styles.pillRows}>
          {rowDirections.map((direction, rowIndex) => (
            <PillRow
              key={rowIndex}
              pills={services}
              direction={direction}
              onSelect={setActiveService}
            />
          ))}
        </div>
      </Container>
      <ServiceDialog
        open={activeService !== null}
        onClose={() => setActiveService(null)}
        titleId={titleId}
        label={activeService?.label}
        description={activeService?.description}
        variant={activeService?.variant}
      />
    </section>
  );
}
