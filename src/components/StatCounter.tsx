import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

interface StatCounterProps {
  number: string;
  suffix: string;
  label: string;
}

const StatCounter: React.FC<StatCounterProps> = ({ number, suffix, label }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
        {inView ? <CountUp end={parseInt(number)} duration={2.5} /> : '0'}
        {suffix}
      </div>
      <div className="text-muted-foreground text-sm">
        {label}
      </div>
    </div>
  );
};

export default StatCounter;
