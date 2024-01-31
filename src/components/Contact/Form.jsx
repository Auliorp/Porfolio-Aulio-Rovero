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
    <div className='w-75'>
      <form onSubmit={handleSubmit}>
        <div className="mb-1">
          <label htmlFor="Name" className="form-label text-dark ">
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

/* <p class="text-start">Start aligned text on all viewport sizes.</p>
<p class="text-center">Center aligned text on all viewport sizes.</p>
<p class="text-end">End aligned text on all viewport sizes.</p>

<p class="text-sm-end">End aligned text on viewports sized SM (small) or wider.</p>
<p class="text-md-end">End aligned text on viewports sized MD (medium) or wider.</p>
<p class="text-lg-end">End aligned text on viewports sized LG (large) or wider.</p>
<p class="text-xl-end">End aligned text on viewports sized XL (extra large) or wider.</p>
<p class="text-xxl-end">End aligned text on viewports sized XXL (extra extra large) or wider.</p> */