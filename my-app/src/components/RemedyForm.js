// src/components/RemedyForm.js
import React, { useState } from 'react';

function RemedyForm() {
  const [formData, setFormData] = useState({
    age: '',
    sex: '',
    weight: '',
    height: '',
    symptoms: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    
    setFormData({
      age: '',
      sex: '',
      weight: '',
      height: '',
      symptoms: '',
    });
  };

  return (
    <div className='big-container'>
    <div className="form-container">
      <h2>Ayurvedic Remedy Request</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            Age:
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Sex:
            <select
              name="sex"
              value={formData.sex}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>
        </div>
        <div className="form-group">
          <label>
            Weight (in kg):
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Height (in cm):
            <input
              type="number"
              name="height"
              value={formData.height}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Symptoms:
            <textarea
              name="symptoms"
              value={formData.symptoms}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
}

export default RemedyForm;
