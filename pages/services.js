import Pill from '@/components/services/Pill';

export default function Services() {
  return (
    <div style={{ display: 'flex', gap: '1rem', padding: '2rem' }}>
      <Pill label='Web Development' variant='primary' />
      <Pill label='Product & Project Management' variant='secondary' />
      <Pill label='Design' variant='primary' />
    </div>
  );
}
