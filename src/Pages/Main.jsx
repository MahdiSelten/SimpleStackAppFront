import React, { useState } from 'react';
import backgroundImg from '../images/Titanicsurvival.png';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    pclass: '',
    sex: '',
    sibsp: '',
    parch: '',
    fare: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          pclass: Number(formData.pclass),
          sex: formData.sex,
          sibsp: Number(formData.sibsp),
          parch: Number(formData.parch),
          fare: Number(formData.fare)
        })
      });

      const data = await response.json();
      navigate("/result", { state: data }); 

    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div style={styles.whole}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.heading}>Passenger Information</h2>



        <label style={styles.label}>
          Pclass:
          <select name="pclass" value={formData.pclass} onChange={handleChange} style={styles.input}>
            <option value="">Select Class</option>
            <option value="1">1st</option>
            <option value="2">2nd</option>
            <option value="3">3rd</option>
          </select>
        </label>

        <label style={styles.label}>
          Sex:
          <select name="sex" value={formData.sex} onChange={handleChange} style={styles.input}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>

        <label style={styles.label}>
          Siblings/Spouses (SibSp):
          <input type="number" name="sibsp" value={formData.sibsp} onChange={handleChange} style={styles.input} />
        </label>

        <label style={styles.label}>
          Parents/Children (Parch):
          <input type="number" name="parch" value={formData.parch} onChange={handleChange} style={styles.input} />
        </label>

        <label style={styles.label}>
          Fare:
          <input type="number" name="fare" value={formData.fare} onChange={handleChange} style={styles.input} />
        </label>

        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
};

const styles = {
  whole: {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px'
  },
  heading: {
    textAlign: 'center',
    marginBottom: '25px',
    fontSize: '2rem',
    color: 'gold',
    borderBottom: '1px solid ivory',
    paddingBottom: '10px'
  },
  label: {
    marginBottom: '15px',
    display: 'flex',
    flexDirection: 'column',
    fontSize: '1.1rem',
    color: 'ivory'
  },
  input: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    backgroundColor: '#f5f5f5',
    color: '#222',
    fontSize: '1rem',
    marginTop: '5px'
  },
  button: {
    marginTop: '25px',
    padding: '12px',
    backgroundImage: 'linear-gradient(to right, gold, #d4af37)',
    color: '#081c32',
    border: 'none',
    fontWeight: 'bold',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1.1rem',
    boxShadow: '0 2px 6px rgba(0,0,0,0.3)'
  }
};

export default Main;
