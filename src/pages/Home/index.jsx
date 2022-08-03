import features from '../../data/features';
import Feature from '../../components/Feature';

function Home() {
  return (
    <main id='Home'>
      <div className='hero'>
        <section className='hero-content'>
          <h2 className='sr-only'>Promoted Content</h2>
          <p className='subtitle'>No fees.</p>
          <p className='subtitle'>No minimum deposit.</p>
          <p className='subtitle'>High interest rates.</p>
          <p className='text'>Open a savings account with Argent Bank today!</p>
        </section>
      </div>
      <section className='features'>
        <h2 className='sr-only'>Features</h2>
        {features.map((feature) => (
          <Feature
            key={`feature-${feature.name}`}
            icon={feature.icon}
            name={feature.name}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </section>
    </main>
  );
}

export default Home;
