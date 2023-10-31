import React, { useState } from "react";

function UploadForm2() {
  const initialFormData = {
    photo: null,
    name: "",
    description: "",
    category: "",
    quantity: "",
    price: "",
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
    setFormData({ ...initialFormData });

    // Reset the photo input field
    const fileInput = document.querySelector('input[type="file"]');
    fileInput.value = ""; // Clear the selected file
  };

  const handleCancel = () => {
    // Reset the form fields to their initial state
    setFormData({ ...initialFormData });

    // Reset the photo input field
    const fileInput = document.querySelector('input[type="file"]');
    fileInput.value = ""; // Clear the selected file
  };

  return (
    <div>
      <h2>Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Upload Photo:</label>
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
        <div>
          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Quantity:</label>
          <input
            type="text"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="text"
            name="price"
            value={formData.price}
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

export default UploadForm2;
