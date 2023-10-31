import React, { useState } from "react";

function UploadForm() {
  const initialFormData = {
    photo: null,
    name: "",
    description: "",
  };

  const [formData, setFormData] = useState({ ...initialFormData });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const newValue = type === "file" ? e.target.files[0] : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
    setFormData({
      photo: null,
      name: "",
      description: "",
    });
    const fileInput = document.querySelector('input[type="file"]');
    fileInput.value = ""; // Clear the selected file
  };

  const handleCancel = () => {
    // Reset the form fields to their initial state
    setFormData({ ...initialFormData });

    // Create a new input element to replace the old one and clear the selected file
    const fileInput = document.querySelector('input[type="file"]');
    const newFileInput = document.createElement("input");
    newFileInput.type = "file";
    newFileInput.name = "photo";
    newFileInput.onChange = handleChange;

    fileInput.parentNode.replaceChild(newFileInput, fileInput);
  };

  return (
    <div>
      <h2>New Shop</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Upload Logo:</label>
          <input type="file" name="photo" onChange={handleChange} />
        </div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default UploadForm;
