import type { NextPage } from 'next'
import styles from '@/styles/Home.module.css'
import YakumanBoard from '@/components/yakuman-board';
import Leaderboard from '@/components/leaderboard';
import { useCallback, useEffect, useRef, useState } from 'react';

const Home: NextPage = () => {
  const [sectionNumber, setSectionNumber] = useState(0);
  const [lastTop, setLastTop] = useState(0);
  const titleRef = useRef<HTMLDivElement>(null);
  const numberOfSections = 2;

  // handle mobile vh issue
  // ref: https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
  useEffect(() => {
    const setVh = () =>
      document.documentElement.style.setProperty(
        '--vh',
        `${window.innerHeight * 0.01}px`
      );

    setVh();
    window.addEventListener('resize', setVh, false);

    return () => window.removeEventListener('resize', setVh, false);
  }, []);

  const onScroll = useCallback((e: Event) => {
    if (!titleRef.current) {
      return;
    }

    e.preventDefault();
    e.stopPropagation();

    const titleContainer = titleRef.current;
    const mainContainer = e.target as HTMLDivElement;
    const currentTop = mainContainer.scrollTop;
    const currentViewHeight = window.innerHeight;
    let sectionDiff = 0;


    if (lastTop > currentTop &&
      sectionNumber > 0 &&
      currentTop < sectionNumber * currentViewHeight) {
      sectionDiff = -1;
    }

    if (lastTop < currentTop &&
      sectionNumber < numberOfSections - 1 &&
      currentTop > sectionNumber * currentViewHeight) {
      sectionDiff = 1;
    }

    if (sectionDiff) {
      titleContainer.style.transform = `translateY(-${(sectionNumber + sectionDiff) * 3}rem)`;
      mainContainer.scrollTo({
        top: (sectionNumber + sectionDiff) * currentViewHeight,
        behavior: 'smooth'
      });
      setSectionNumber(sectionNumber + sectionDiff);
    }

    setLastTop(currentTop);
  }, [titleRef, sectionNumber, lastTop]);

  useEffect(() => {
    const container = document.querySelector('main');
    if (!container) {
      return;
    }

    const attachScrollEvent = () => container.addEventListener('scroll', onScroll, false);
    const removeScrollEvent = () => container.removeEventListener('scroll', onScroll, false);

    container.addEventListener('scroll', onScroll, false);
    container.addEventListener('touchstart', removeScrollEvent, false);
    container.addEventListener('touchend', attachScrollEvent, false);

    return () => {
      container.removeEventListener('scroll', onScroll, false);
      container.removeEventListener('touchstart', removeScrollEvent, false);
      container.removeEventListener('touchend', attachScrollEvent, false);
    };
  }, [onScroll]);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1 ref={titleRef}>
          4인 동장 & 4인 반장 <br />
          역만
        </h1>
      </div>
      <Leaderboard />
      <YakumanBoard />
    </div>
  )
}

export default Home
