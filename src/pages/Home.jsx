import './Home.css'

function Home() {
  return (
    <main className="home">
      <section className="hero">
        <h2>Welcome to BYU Dance</h2>
        <p>Discover creativity, passion, and performance.</p>
      </section>
      <section className="links">
        <div className="link-card">
          <h3>About Us</h3>
          <p>Meet our dedicated faculty and learn about our programs.</p>
        </div>
        <div className="link-card">
          <h3>Audition</h3>
          <p>Start your journey to join the BYU Dance family.</p>
        </div>
      </section>
    </main>
  )
}

export default Home