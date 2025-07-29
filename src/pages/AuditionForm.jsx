import './AuditionForm.css'

function AuditionForm() {
  return (
    <main className="audition-form">
      <h2>Audition Application</h2>
      <form>
        <label>
          Name
          <input type="text" name="name" required />
        </label>
        <label>
          Email
          <input type="email" name="email" required />
        </label>
        <label>
          Phone
          <input type="tel" name="phone" required />
        </label>
        <label>
          Dance Experience
          <textarea name="experience" rows="4" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </main>
  )
}

export default AuditionForm