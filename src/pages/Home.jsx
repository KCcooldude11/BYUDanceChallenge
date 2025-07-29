import './Home.css';

function Home() {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Welcome to BYU Dance</h1>
          <p>Where creativity meets performance</p>
          <a href="/about" className="cta">Explore Programs</a>
        </div>
      </section>
    </main>
  );
}

export default Home;