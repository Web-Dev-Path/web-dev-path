import Pill from '@/components/services/Pill';
import Container from '@/components/containers/Container';
import styles from './WhatWeOffer.module.scss';

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
          {[0, 1, 2].map(rowIndex => (
            <div className={styles.pillRow} key={rowIndex}>
              {offerPills.map(pill => (
                <Pill key={pill.id} label={pill.label} variant={pill.variant} />
              ))}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
