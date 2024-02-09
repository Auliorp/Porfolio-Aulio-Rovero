import { useState, useEffect } from 'react';
import "../../App.css";

const API_URL= import.meta.env.VITE_ENDPOINT_MAIL

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
  const [loading, setLoading] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false); // Nuevo estado para controlar la visibilidad del pop-up

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === 'Name') {
      validateName(value);
    }

    if (name === 'mail') {
      validateEmail(value);
    }

    if (name === 'Description') {
      validateDescription(value);
    }
  };

  const validateName = (name) => {
    const regex = /^[a-zA-Z ]+$/;
    if (!regex.test(name) || name.length < 1) {
      setNameError('El campo no puede estar vacio y solo acepta letras');
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

    if (formData.Name === '' || formData.mail === '' || formData.Description === '') {
      setFormEmpty(true);
      setTimeout(() => {
        setFormEmpty(false);
      }, 5000);
      return;
    } else {
      setFormEmpty(false);
    }

    validateName(formData.Name);
    validateEmail(formData.mail);
    validateDescription(formData.Description);

    if (!nameError && !mailError && !descriptionError) {
      try {
        setLoading(true);

        const response = await fetch(API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();
        console.log(data);

        setFormData(initialFormData);
        setIsPopupOpen(true); // Mostrar el pop-up de éxito
        setLoading(false);
      } catch (error) {
        console.error('Error al enviar el formulario:', error);
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    if (nameError || mailError || descriptionError || formData.Name === '' || formData.mail === '' || formData.Description === '') {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [nameError, mailError, descriptionError, formData]);

  return (
    <div className='w-75 fs-lg-n  fs-xl-text-form '>
      {isPopupOpen && (
        <div className="modal fade show d-flex align-items-center justify-content-center px-4" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content bg-primary-subtle ">
              <div className="modal-header text-center d-flex justify-content-center" >
                <h2 className="modal-title  text-dark">✅✅¡Éxito!✅✅</h2>
               
              </div>
              <div className="modal-body text-dark text-center">
                <h5>Los datos se han enviado correctamente.</h5>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={() => setIsPopupOpen(false)}>Aceptar</button>
              </div>
            </div>
          </div>
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
        <button type="submit" className={`btn btn-primary fs-xl-button mt-2 ${!formValid ? 'btn-secondary' : ''}`} disabled={!formValid || loading}>
          {loading ? 'Enviando...' : 'Enviar'}
        </button>
      </form>
    </div>
  );
};

export default FormCard;
