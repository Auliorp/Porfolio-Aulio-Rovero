import { useState, useEffect } from 'react';
import "../../App.css";

const FormCard = () => {
  const initialFormData = {
    Name: '',
    mail: '',
    Description: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [nameError, setNameError] = useState('');
  const [mailError, setMailError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');
  const [formValid, setFormValid] = useState(false);
  const [formEmpty, setFormEmpty] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Validar el nombre
    if (name === 'Name') {
      validateName(value);
    }

    // Validar el correo electrónico
    if (name === 'mail') {
      validateEmail(value);
    }

    // Validar la descripción
    if (name === 'Description') {
      validateDescription(value);
    }
  };

  const validateName = (name) => {
    const regex = /^[a-zA-Z ]+$/;
    if (!regex.test(name) || name.length < 3) {
      setNameError('El campo debe ser mayor a 3 caracteres y solo permite letras.');
    } else {
      setNameError('');
    }
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      setMailError('El campo solo acepta correos electrónicos válidos.');
    } else {
      setMailError('');
    }
  };

  const validateDescription = (description) => {
    if (description.length < 5 || description.length > 500) {
      setDescriptionError('Debe agregar un texto en 5 a 500 caracteres.');
    } else {
      setDescriptionError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar si algún campo está vacío
    if (formData.Name === '' || formData.mail === '' || formData.Description === '') {
      setFormEmpty(true);
      setTimeout(() => {
        setFormEmpty(false);
      }, 5000);
      return;
    } else {
      setFormEmpty(false);
    }

    // Validar el nombre, correo electrónico y descripción antes de enviar
    validateName(formData.Name);
    validateEmail(formData.mail);
    validateDescription(formData.Description);

    if (!nameError && !mailError && !descriptionError) {
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

        // Reiniciar el formulario
        setFormData(initialFormData);
        // Mostrar mensaje de éxito
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 5000);
      } catch (error) {
        console.error('Error al enviar el formulario:', error);
      }
    }
  };

  useEffect(() => {
    // Verificar si hay errores de validación
    if (nameError || mailError || descriptionError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [nameError, mailError, descriptionError]);

  return (
    <div className='w-75 fs-lg-n  fs-xl-text-form '>
      {showSuccessMessage && (
        <div className="alert alert-success text-center" role="alert">
          ¡Los datos se han enviado correctamente!
        </div>
      )}
      {formEmpty && (
        <div className="alert alert-danger text-center" role="alert">
          Por favor complete todos los campos del formulario para enviar el mensaje.
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-1 ">
          <label htmlFor="Name" className="form-label text-dark ">
            Nombre
          </label>
          <input
            type="text"
            name="Name"
            value={formData.Name}
            onChange={handleChange}
            className={`form-control ${nameError ? 'is-invalid' : ''}`}
            id="Name"
            placeholder="Escribe acá tu nombre"
          />
          {nameError && <div className="invalid-feedback">{nameError}</div>}
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
            className={`form-control ${mailError ? 'is-invalid' : ''}`}
            id="mail"
            placeholder="name@example.com"
          />
          {mailError && <div className="invalid-feedback">{mailError}</div>}
        </div>
        <div className="mb-1">
          <label htmlFor="Description" className="form-label text-dark ">
            Descripcion
          </label>
          <textarea
            name="Description"
            value={formData.Description}
            onChange={handleChange}
            className={`form-control ${descriptionError ? 'is-invalid' : ''}`}
            id="Description"
            placeholder="Escriba aqui su consulta"
            rows="3"
          ></textarea>
          {descriptionError && <div className="invalid-feedback">{descriptionError}</div>}
        </div>
        <button type="submit" className="btn btn-primary fs-xl-button mt-2" disabled={!formValid}>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default FormCard;
