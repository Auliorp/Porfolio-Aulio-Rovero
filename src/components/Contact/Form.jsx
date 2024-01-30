import { useState } from 'react';

const FormCard = () => {
  const [formData, setFormData] = useState({
    Name: '',
    mail: '',
    Description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://nodejs-portafolio-aulio-rovero.vercel.app/Send-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-1">
          <label htmlFor="Name" className="form-label text-dark">
            Nombre
          </label>
          <input
            type="text"
            name="Name"
            value={formData.Name}
            onChange={handleChange}
            className="form-control"
            id="Name"
            placeholder="Escribe acá tu nombre"
          />
        </div>
        <div className="mb-1">
          <label htmlFor="mail" className="form-label text-dark">
            Correo
          </label>
          <input
            type="email"
            name="mail"
            value={formData.mail}
            onChange={handleChange}
            className="form-control"
            id="mail"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-1">
          <label htmlFor="Description" className="form-label text-dark">
            Descripcion
          </label>
          <textarea
            name="Description"
            value={formData.Description}
            onChange={handleChange}
            className="form-control"
            id="Description"
            placeholder="Escriba aqui su consulta"
            rows="3"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default FormCard;
