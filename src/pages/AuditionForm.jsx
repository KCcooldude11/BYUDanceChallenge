// src/pages/AuditionForm.jsx
import React, { useState } from 'react' 
import './AuditionForm.css'

export default function AuditionForm() {
    const [submitted, setSubmitted] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <main className="audition-form thank-you">
        <p className="thank-you-message">✅ Thank you for submitting your application!</p>
      </main>
    )
  }
  return (
    <main className="audition-form">
      <h1>Dance Audition Application</h1>
      <form className="form-grid" onSubmit={handleSubmit}>  {/* ← attach handler */}
        <div className="form-group">
          <label htmlFor="fullName">
            Full Name<span>*</span>
          </label>
          <input id="fullName" name="fullName" type="text" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">
            Email<span>*</span>
          </label>
          <input id="email" name="email" type="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="phone">
            Phone Number<span>*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(555) 123‑4567"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="dob">Date of Birth</label>
          <input id="dob" name="dob" type="date" />
        </div>

        <div className="form-group">
          <label htmlFor="program">
            Applying For<span>*</span>
          </label>
          <select id="program" name="program" required>
            <option value="">Select a program…</option>
            <option>Contemporary</option>
            <option>Ballroom</option>
            <option>Cultural</option>
            <option>Ballet</option>
            <option>Music &amp; Theatre</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="experience">Years of Dance Experience</label>
          <input
            id="experience"
            name="experience"
            type="number"
            min="0"
            max="50"
            placeholder="e.g. 5"
          />
        </div>

        <div className="form-group">
          <label htmlFor="auditionDate">
            Preferred Audition Date &amp; Time
          </label>
          <input
            id="auditionDate"
            name="auditionDate"
            type="datetime-local"
          />
        </div>

        <div className="form-group full-width">
          <label htmlFor="headshot">Upload Headshot (optional)</label>
          <input
            id="headshot"
            name="headshot"
            type="file"
            accept="image/*"
          />
        </div>

        <label>
          Audition Tape<span>*</span>
          <input type="file" name="tape" accept="video/*" required />
        </label>

        <details className="field-details">
          <summary>What to include in your audition tape</summary>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus vitae mauris at nibh convallis aliquet. Donec
            rutrum nisi vitae felis tincidunt, in dictum velit tempus.
          </p>
        </details>

        <div className="form-group full-width">
          <label htmlFor="notes">Additional Notes</label>
          <textarea
            id="notes"
            name="notes"
            rows="4"
            placeholder="Anything else you’d like us to know…"
          />
        </div>

        <div className="form-actions full-width">
          <button type="submit">Submit Application</button>
        </div>
      </form>
    </main>
  )
}
