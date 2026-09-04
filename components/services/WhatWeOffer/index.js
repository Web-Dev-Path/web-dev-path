import { useEffect, useId, useState } from 'react';
import Pill from '@/components/services/Pill';
import Container from '@/components/containers/Container';
import ServiceDialog from '@/components/services/ServiceDialog';
import { services } from '@/utils/services';
import { useAutoScroll } from '@/hooks/useAutoScroll';
import { useIntersect } from '@/hooks/useIntersect';
import { combineClasses } from '@/utils/classnames';
import styles from './WhatWeOffer.module.scss';

const ROW_COUNT = 3;
const rowIndexes = Array.from({ length: ROW_COUNT }, (_, index) => index);
const REVEAL_TRANSITION_MS = 1000;

function getRowDirection(rowIndex) {
  return rowIndex % 2 === 0 ? 'left' : 'right';
}

function PillRow({ pills, direction, enabled, onSelect }) {
  const { viewportRef, groupRef, pause, resume } = useAutoScroll({
    direction,
    enabled,
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
  const [setSectionNode, entry] = useIntersect({});
  const [revealed, setRevealed] = useState(false);
  const [marqueeEnabled, setMarqueeEnabled] = useState(false);

  useEffect(() => {
    if (entry.isIntersecting && !revealed) {
      setRevealed(true);
    }
  }, [entry.isIntersecting, revealed]);

  useEffect(() => {
    if (!revealed) return undefined;

    const timeoutId = setTimeout(
      () => setMarqueeEnabled(true),
      REVEAL_TRANSITION_MS,
    );
    return () => clearTimeout(timeoutId);
  }, [revealed]);

  const contentClass = combineClasses(
    styles.content,
    revealed ? 'revealed' : null,
    styles,
  );
  const leftDecorationClass = combineClasses(
    styles.leftDecoration,
    revealed ? 'revealed' : null,
    styles,
  );
  const rightDecorationClass = combineClasses(
    styles.rightDecoration,
    revealed ? 'revealed' : null,
    styles,
  );

  return (
    <section className={styles.whatWeOffer} ref={setSectionNode}>
      <Container>
        <div className={contentClass}>
          <h2 className={styles.heading}>What We Offer</h2>
          <p className={styles.body}>
            We deliver <strong>high-end digital solutions</strong> — from{' '}
            <strong>design and development</strong> to{' '}
            <strong>project management and strategy</strong> — tailored to your
            goals and budget, with no compromise on quality.
          </p>
        </div>
        <div className={styles.pillRowsWrapper}>
          <img
            src='/images/svg/open-angle-bracket.svg'
            alt=''
            className={leftDecorationClass}
          />
          <div className={rightDecorationClass} aria-hidden='true'>
            <img src='/images/svg/slash.svg' alt='' className={styles.slash} />
            <img
              src='/images/svg/close-angle-bracket.svg'
              alt=''
              className={styles.angleBracket}
            />
          </div>
          <div className={styles.pillRows}>
            {rowIndexes.map(rowIndex => (
              <PillRow
                key={rowIndex}
                pills={services}
                direction={getRowDirection(rowIndex)}
                enabled={marqueeEnabled}
                onSelect={setActiveService}
              />
            ))}
          </div>
          <ServiceDialog
            open={activeService !== null}
            onClose={() => setActiveService(null)}
            titleId={titleId}
            label={activeService?.label}
            description={activeService?.description}
            variant={activeService?.variant}
          />
        </div>
      </Container>
    </section>
  );
}
