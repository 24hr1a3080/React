import { useState } from "react";

function Application() {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    gender: "",
    dob: "",
    skills: []  
  });

  const [image, setImage] = useState(null);

  const change = (e) => {
    const { name, value } = e.target;
    setInfo({
      ...info,
      [name]: value
    });
  };

  const skillchange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setInfo({
        ...info,
        skills: [...info.skills, value]
      });
    } else {
      setInfo({
        ...info,
        skills: info.skills.filter((skill) => skill !== value)
      });
    }
  };

  const uploadimg = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!info.name || !info.email || !info.gender || !info.dob) {
      alert("Please fill all details");
      return;
    }
    console.log("Students");
    console.log(info);
    console.log(image);
    alert("Registered");
  };

  return (
    <>
      <div>
        <h1>Registration Form</h1>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input type="text" name="name" value={info.name} onChange={change} />

          <label>Email:</label>
          <input type="email" name="email" value={info.email} onChange={change} />

          <label>Gender:</label>
          <input type="text" name="gender" value={info.gender} onChange={change} />

          <label>Date of Birth:</label>
          <input type="date" name="dob" value={info.dob} onChange={change} />

          <label>Skills:</label>
          <div>
            <input type="checkbox" value="Java" onChange={skillchange} /> Java
            <input type="checkbox" value="Python" onChange={skillchange} /> Python
            <input type="checkbox" value="React" onChange={skillchange} /> React
          </div>

          <label>Upload Image:</label>
          <input type="file" onChange={uploadimg} />

          <button type="submit">Register</button>
        </form>
      </div>
        <p>Name:{info.name}</p><br />
        <p>Name:{info.email}</p><br />
        <p>Name:{info.info.dob}</p><br />
        <p>Name:{info.gender}</p><br />
        <p>image && (
            <div>
                <img
                src={URL.createObjectURL(image)} alt="DP"width="150"/>
            </div>
          )</p>


    </>
  );
}

export default Application;