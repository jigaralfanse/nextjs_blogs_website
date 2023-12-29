import classes from './hero.module.css'
import Image from 'next/image';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/site/max.png" alt='Alfanse' width={300} height={300} />
      </div>

      <h1>Hi,I'm Alfanse</h1>
      <p>I blog about Development - especially about Front-End frameworks like angular and react</p>
    </section>
  );
}

export default Hero;
