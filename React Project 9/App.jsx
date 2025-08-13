import React, { useState } from 'react'

function App() {
  const initial = {
    fullName: '',
    email: '',
    gender: '',
    interests: [],
    country: '',
    bio: '',
    agree: false
  }

  const [form, setForm] = useState(initial)
  const [submitted, setSubmitted] = useState(null)

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target

    if (name === 'interests') {
      setForm((prev) => {
        const next = new Set(prev.interests)
        if (checked) next.add(value)
        else next.delete(value)
        return { ...prev, interests: Array.from(next) }
      })
    } else if (type === 'checkbox') {
      setForm((prev) => ({ ...prev, [name]: checked }))
    } else {
      setForm((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Very basic client-side check
    if (!form.fullName || !form.email || !form.gender || !form.country || !form.agree) {
      alert('Please fill all required fields and accept the terms.')
      return
    }
    setSubmitted(form)
  }

  const handleReset = () => {
    setForm(initial)
    setSubmitted(null)
  }

  return (
    <div className="App">
      <h1>React Form</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="fullName">Full Name *</label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Enter your full name"
            value={form.fullName}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email *</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="example@mail.com"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label>Gender *</label>
          <div style={{ textAlign: 'left' }}>
            <input
              id="male"
              type="radio"
              name="gender"
              value="Male"
              checked={form.gender === 'Male'}
              onChange={handleChange}
              required
            />
            <label htmlFor="male" style={{ display: 'inline', marginLeft: 6 }}>Male</label>

            <input
              id="female"
              type="radio"
              name="gender"
              value="Female"
              checked={form.gender === 'Female'}
              onChange={handleChange}
              required
              style={{ marginLeft: 12 }}
            />
            <label htmlFor="female" style={{ display: 'inline', marginLeft: 6 }}>Female</label>

            <input
              id="other"
              type="radio"
              name="gender"
              value="Other"
              checked={form.gender === 'Other'}
              onChange={handleChange}
              required
              style={{ marginLeft: 12 }}
            />
            <label htmlFor="other" style={{ display: 'inline', marginLeft: 6 }}>Other</label>
          </div>

          <label>Interests</label>
          <div style={{ textAlign: 'left' }}>
            <input
              id="sports"
              type="checkbox"
              name="interests"
              value="Sports"
              checked={form.interests.includes('Sports')}
              onChange={handleChange}
            />
            <label htmlFor="sports" style={{ display: 'inline', marginLeft: 6 }}>Sports</label>

            <input
              id="music"
              type="checkbox"
              name="interests"
              value="Music"
              checked={form.interests.includes('Music')}
              onChange={handleChange}
              style={{ marginLeft: 12 }}
            />
            <label htmlFor="music" style={{ display: 'inline', marginLeft: 6 }}>Music</label>

            <input
              id="travel"
              type="checkbox"
              name="interests"
              value="Travel"
              checked={form.interests.includes('Travel')}
              onChange={handleChange}
              style={{ marginLeft: 12 }}
            />
            <label htmlFor="travel" style={{ display: 'inline', marginLeft: 6 }}>Travel</label>
          </div>

          <label htmlFor="country">Country *</label>
          <select
            id="country"
            name="country"
            value={form.country}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select your country</option>
            <option value="India">India</option>
            <option value="United States">United States</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
          </select>

          <label htmlFor="bio">Bio</label>
          <textarea
            id="bio"
            name="bio"
            placeholder="Tell us something about yourself..."
            value={form.bio}
            onChange={handleChange}
          />

          <div style={{ textAlign: 'left', marginTop: 10 }}>
            <input
              id="agree"
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
              required
            />
            <label htmlFor="agree" style={{ display: 'inline', marginLeft: 6 }}>
              I agree to the Terms and Privacy Policy *
            </label>
          </div>

          <div>
            <button type="button" onClick={handleReset} aria-label="Reset form">Reset</button>
            <button type="submit" aria-label="Submit form">Submit</button>
          </div>
        </fieldset>
      </form>

      {submitted && (
        <div style={{ textAlign: 'left', marginTop: 20 }}>
          <h2 style={{ color: '#327c35', textAlign: 'left' }}>Submitted Data</h2>
          <pre
            style={{
              background: '#f7f7f7',
              padding: 12,
              borderRadius: 8,
              overflowX: 'auto'
            }}
          >
            {JSON.stringify(submitted, null, 2)}
          </pre>
        </div>
      )}
    </div>
  )
}

export default App
