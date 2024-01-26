const FormCard = () => {
  return (
    <div>
        <div className="mb-1">
          <label 
           htmlFor="Name" 
           className="form-label text-dark">Nombre
          </label>
              <input 
               type="text" 
               className="form-control" 
               id="Name" 
               placeholder="Escribe acá tu nombre" />
        </div>
        <div className="mb-1">
          <label 
           htmlFor="mail"            
           className="form-label text-dark">Correo
          </label>
              <input 
              type="email" 
              className="form-control" 
              id="mail" 
               placeholder="name@example.com" />
        </div>
        <div className="mb-1">
          <label 
           htmlFor="Description" 
           className="form-label text-dark">Descripcion
          </label>
            <textarea className="form-control" 
              id="Description" 
              placeholder="Escriba aqui su consulta" 
              rows="3">
            </textarea>
        </div>
  </div>
  )
}

export default FormCard;