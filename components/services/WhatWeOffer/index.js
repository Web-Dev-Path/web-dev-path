import Pill from '@/components/services/Pill';
import Container from '@/components/containers/Container';
import { useAutoScroll } from './useAutoScroll';
import styles from './WhatWeOffer.module.scss';

const rowDirections = ['left', 'right', 'left'];

function PillRow({ pills, direction }) {
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
            <Pill key={pill.id} label={pill.label} variant={pill.variant} />
          ))}
        </div>
        <div className={styles.pillGroup} aria-hidden='true'>
          {pills.map(pill => (
            <Pill
              key={`${pill.id}-duplicate`}
              label={pill.label}
              variant={pill.variant}
              tabIndex={-1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const offerPills = [
  { id: 'web-development', label: 'Web Development', variant: 'primary' },
  {
    id: 'product-project-management',
    label: 'Product & Project Management',
    variant: 'secondary',
  },
  { id: 'design', label: 'Design', variant: 'primary' },
  {
    id: 'startup-nonprofit-tech-support',
    label: 'Startup & Nonprofit Tech Support',
    variant: 'secondary',
  },
  {
    id: 'optimization-growth',
    label: 'Optimization & Growth',
    variant: 'primary',
  },
];

export default function WhatWeOffer() {
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
            <PillRow key={rowIndex} pills={offerPills} direction={direction} />
          ))}
        </div>
      </Container>
    </section>
  );
}
