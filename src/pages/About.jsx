import './About.css'

function About() {
  return (
    <main className="about">
      <h2>Our Faculty</h2>
      <div className="faculty-list">
        <div className="faculty-card">
          <img src="/faculty/faculty1.jpg" alt="Faculty 1" />
          <h3>Faculty Member One</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="faculty-card">
          <img src="/faculty/faculty2.jpg" alt="Faculty 2" />
          <h3>Faculty Member Two</h3>
          <p>Vestibulum ante ipsum primis in faucibus orci luctus et.</p>
        </div>
        <div className="faculty-card">
          <img src="/faculty/faculty3.jpg" alt="Faculty 3" />
          <h3>Faculty Member Three</h3>
          <p>Integer ut ligula id massa tempor fringilla.</p>
        </div>
      </div>
    </main>
  )
}

export default About