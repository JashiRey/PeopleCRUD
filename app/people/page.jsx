'use client'
import React, { useState, useRef} from 'react';


export default function Page() {
  const nombre = useRef(null);
  const apellido = useRef(null);
  const edad = useRef(null);
  const email = useRef(null);
  const telefono = useRef(null);
  const color = useRef(null);
  const modalRef = useRef(null);
  const nombre_agg = useRef();
  const apellido_agg = useRef();
  const edad_agg = useRef();
  const email_agg = useRef();
  const telefono_agg = useRef();
  const color_agg = useRef();
  const [personas, setPersonas] = useState([]);
  const [mostrarPersonas, setMostrarPersonas] = useState(false);
  const [personaSeleccionada, setPersonaSeleccionada] = useState(null);
  
  const evaluarArray = () => personas.length === 0;

  const guardarCambios = () => {
    if (isNaN(nombre_agg.current.value) === false || isNaN(apellido_agg.current.value) === false) {
      return alert('Name and last name cannot be numbers and must be filled');
    }
    if (nombre_agg.current.value.length < 3 || apellido_agg.current.value.length < 3) {
      return alert('Name and last name must be at least 3 characters long');
    }
    if (edad_agg.current.value < 0 || edad_agg.current.value === '') {
      return alert('Age cannot be less than 0 and must contain a number');
    }
    if (isNaN(edad_agg.current.value)) {
      return alert('Age must be a number');
    }
    if (email_agg.current.value.indexOf('@') === -1 || email_agg.current.value.indexOf('.') === -1) {
      return alert('Email is not valid. It must contain an @ and a .');
    }
    if (telefono_agg.current.value.length < 10) {
      return alert('Phone must be at least 10 digits long');
    }
    if (telefono_agg.current.value.length > 10) {
      return alert('Phone cannot be more than 10 digits long');
    }
    if (isNaN(telefono_agg.current.value)) {
      return alert('Phone must be a number');
    }
    if (nombre_agg.current.value === '' || apellido_agg.current.value === '' || edad_agg.current.value === '' || email_agg.current.value === '' || telefono_agg.current.value === '') {
      return alert('Please fill in all fields');
    }

    
    const personaModificada = {
      id: personaSeleccionada.id,
      nombre: nombre.current.value,
      apellido: apellido.current.value,
      edad: edad.current.value,
      email: email.current.value,
      telefono: telefono.current.value,
      color: color.current.value
    };
  
    const nuevasPersonas = personas.map(p =>
      p.id === personaSeleccionada.id ? personaModificada : p
    );
    setPersonas(nuevasPersonas);

    modalRef.current.close();
  };

  return (
    <main className="flex flex-col gap-4 bg-black h-screen items-center justify-center"
    style={{
      backgroundImage: "url(/images/bg-2.jpg)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}>
    <h1 className="text-white text-3xl">CRUD OF PEOPLE</h1>
    <div className="flex flex-col gap-4">
    {/* Add */}
      <div>
        <button className="btn btn-primary glass w-full" onClick={()=>document.getElementById('modal_add').showModal()}>Add People</button>
        <dialog id="modal_add" className="modal">
        <div className="modal-box bg-neutral">
          <h3 className="font-bold text-lg text-white">Add People</h3>
          <form method='dialog' className="flex flex-col">    
              <label htmlFor="nombre" className='label text-white'>Name:</label>
              <input type="text" ref={nombre_agg} name="nombre" placeholder="Name" required className="input "/>
              <label htmlFor="apellido" className='label text-white'>Last Name:</label>
              <input type="text" ref={apellido_agg} name="apellido" placeholder="Last Name" required  className='input'/>            
              <label htmlFor="edad" className='label text-white'>Age:</label>
              <input type="number" ref={edad_agg} name="edad" placeholder="Age" required className='input'/>            
              <label htmlFor="email" className='label text-white'>Email:</label>
              <input type="email" ref={email_agg} name="email" placeholder="Email" required className='input'/>                        
              <label htmlFor="telefono" className='label text-white'>Phone:</label>
              <input type="tel" ref={telefono_agg} name="telefono" placeholder="Phone" required className='input'/>  
              <label htmlFor="color" className='label text-white'>Color</label>
              <input type="color" ref={color_agg} name="color" placeholder="Color" required className='input w-full bg-transparent'/>          
          <div className='flex gap-4 justify-end mt-3'>
          <button className="btn btn-success btn-outline glass" 
          type='button'
          onClick={ () => {
            if (isNaN(nombre_agg.current.value) === false || isNaN(apellido_agg.current.value) === false) {
              return alert('Name and last name cannot be numbers and must be filled');
            }
            if (nombre_agg.current.value.length < 3 || apellido_agg.current.value.length < 3) {
              return alert('Name and last name must be at least 3 characters long');
            }
            if (edad_agg.current.value < 0 || edad_agg.current.value === '') {
              return alert('Age cannot be less than 0 and must contain a number');
            }
            if (isNaN(edad_agg.current.value)) {
              return alert('Age must be a number');
            }
            if (email_agg.current.value.indexOf('@') === -1 || email_agg.current.value.indexOf('.') === -1) {
              return alert('Email is not valid. It must contain an @ and a .');
            }
            if (telefono_agg.current.value.length < 10) {
              return alert('Phone must be at least 10 digits long');
            }
            if (telefono_agg.current.value.length > 10) {
              return alert('Phone cannot be more than 10 digits long');
            }
            if (isNaN(telefono_agg.current.value)) {
              return alert('Phone must be a number');
            }
            if (nombre_agg.current.value === '' || apellido_agg.current.value === '' || edad_agg.current.value === '' || email_agg.current.value === '' || telefono_agg.current.value === '') {
              return alert('Please fill in all fields');
            }
            
            const newPerson = {
              id: personas.length + 1,
              nombre: nombre_agg.current.value,
              apellido: apellido_agg.current.value,
              edad: edad_agg.current.value,
              email: email_agg.current.value,
              telefono: telefono_agg.current.value,
              color: color_agg.current.value
            }
            setPersonas([...personas, newPerson]);

            nombre_agg.current.value = '';
            apellido_agg.current.value = '';
            edad_agg.current.value = '';
            email_agg.current.value = '';
            telefono_agg.current.value = '';
            color_agg.current.value = '#000000';

            document.getElementById('modal_add').close();
          }}>
            Add </button> 
              <button
                type='button'
                className="btn btn-outline btn-error glass"
                onClick={() => document.getElementById('modal_add').close()}
                >Close
              </button>
              </div>
            </form>
          </div>
        </dialog>
      </div>

      {/* Read */}
      <div>
        <button className="btn btn-primary glass w-full" onClick={() => {
          if (evaluarArray()) {
            alert('There are no people to read');
          } else {
            document.getElementById('modal_read').showModal();
          }
          }}>
          Read People
        </button>
        <dialog id="modal_read" className="modal">
        <div className="modal-box bg-neutral">
          <h3 className="font-bold text-lg text-white">Read People</h3>
          <div className="flex flex-col gap-4">
            {mostrarPersonas &&(
              personas.map((persona, index) => (
                <div key={index} className="flex flex-col gap-2 mt-3"
                style={{
                  backgroundImage: `linear-gradient(to left, ${persona.color}, transparent)`,
                  border: '1px solid',
                  borderColor: persona.color,
                  padding: '10px',
                  borderRadius: '5px'
                }}>
                <span className="text-white">ID: {persona.id}</span>
                <span className="text-white">Name: {persona.nombre}</span>
                <span className="text-white">Last Name: {persona.apellido}</span>
                <span className="text-white">Age: {persona.edad}</span>
                <span className="text-white">Email: {persona.email}</span>
                <span className="text-white">Phone: {persona.telefono}</span>
                <span className="text-white">Color: {persona.color}</span>
              </div>
            ))
          )}
          </div>
          <div className="modal-action">
            <form method="dialog" className='flex gap-3'>
              <div className='btn btn-outline btn-success glass' onClick={() => setMostrarPersonas(true)}>Read</div>
              <button className="btn btn-outline btn-error glass" onClick={() => setMostrarPersonas(false)}>Close</button>
              
            </form>
          </div>
        </div>
        </dialog>
        
      </div>

      {/* Update */}
      <div>
        <button className="btn btn-primary glass w-full" onClick={() => {
          if (evaluarArray()) {
            alert('There are no people to update');
          } else {
            document.getElementById('modal_update').showModal();
          }
          }}>
          Update People
        </button>
        <dialog id="modal_update" className="modal">
        <div className="modal-box bg-neutral">
          <h3 className="font-bold text-lg text-white">Update People</h3>
          {mostrarPersonas &&(
              personas.map((persona, index) => (
              <div key={index} className="flex flex-col gap-2 mt-3"
              style={{
                backgroundImage: `linear-gradient(to left, ${persona.color}, transparent)`,
                border: '1px solid',
                borderColor: persona.color,
                padding: '10px',
                borderRadius: '5px'
              }}>
                <span className="text-white">ID: {persona.id}</span>
                <span className="text-white">Name: {persona.nombre}</span>
                <span className="text-white">Last Name: {persona.apellido}</span>
                <span className="text-white">Age: {persona.edad}</span>
                <span className="text-white">Email: {persona.email}</span>
                <span className="text-white">Phone: {persona.telefono}</span>
                <span className="text-white">Color: {persona.color}</span>
                <div className="flex gap-2">
            </div>
                  <button className="btn btn-outline btn-success glass" onClick={() => {
                    modalRef.current.showModal();
                    setPersonaSeleccionada(persona);
                    nombre.current.value = persona.nombre;
                    apellido.current.value = persona.apellido;
                    edad.current.value = persona.edad;
                    email.current.value = persona.email;
                    telefono.current.value = persona.telefono;
                    color.current.value = persona.color;
                    }}>Update</button>
                  </div>
            ))
          )}
          
          <div className="modal-action">
            <form method="dialog" className='flex gap-3'>
              <div className="btn btn-success btn-outline glass" onClick={() => setMostrarPersonas(true)} >Read</div> 
              <button className="btn btn-outline btn-error glass" onClick={() => {setMostrarPersonas(false)}}>Close</button>
            </form>
          </div>
        </div>
        </dialog>
      </div>
      
      {/* Update Modal */}
      <div className='flex flex-col-reverse'>
      <div>
        <div>
          <dialog ref={modalRef} className="modal">
              <div className="modal-box bg-neutral">
                <h3 className="font-bold text-lg text-white">Modify People</h3>
                  <form action="" className="flex flex-col">
                    <label htmlFor="nombre" className='label text-white'>Name:</label>
                    <input type="text" ref={nombre} name="nombre" placeholder="Name" className="input" />
                    <label htmlFor="apellido" className='label text-white'>Last Name:</label>
                    <input type="text" ref={apellido} name="apellido" placeholder="Last Name"  className='input' />
                    <label htmlFor="edad" className='label text-white'>Age:</label>
                    <input type="number" ref={edad} name="edad" placeholder="Age"  className='input' />
                    <label htmlFor="email" className='label text-white'>Email:</label>
                    <input type="email" ref={email} name="email" placeholder="Email"  className='input' />
                    <label htmlFor="telefono" className='label text-white'>Phone:</label>
                    <input type="tel" ref={telefono} name="telefono" placeholder="Phone"  className='input' />
                    <label htmlFor="color" className='label text-white'>Color</label>
                    <input type="color" ref={color} name="color" placeholder="Color"  className='input w-full bg-transparent' />
                  </form>
                <div className="modal-action">
                  <form method="dialog" className='flex gap-3'>
                    <div className="btn btn-success btn-outline glass" onClick={guardarCambios}>Save changes</div>
                    <button className="btn btn-outline btn-error glass">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
            </div>
      </div>

      {/* Delete */}
<div>
  <button
    className="btn btn-primary glass w-full"
    onClick={() => {
      if (evaluarArray()) {
        alert('There are no people to delete');
      } else {
        document.getElementById('modal_delete').showModal();
      }
    }}
  >
    Delete People
  </button>
  <dialog id="modal_delete" className="modal">
    <div className="modal-box bg-neutral">
      <h3 className="font-bold text-lg text-white">Delete People</h3>
      {mostrarPersonas &&
        personas.map((persona, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 mt-3"
            style={{
              backgroundImage: `linear-gradient(to left, ${persona.color}, transparent)`,
              border: '1px solid',
              borderColor: persona.color,
              padding: '10px',
              borderRadius: '5px',
            }}
          >
            <span className="text-white">ID: {persona.id}</span>
            <span className="text-white">Name: {persona.nombre}</span>
            <span className="text-white">Last Name: {persona.apellido}</span>
            <span className="text-white">Age: {persona.edad}</span>
            <span className="text-white">Email: {persona.email}</span>
            <span className="text-white">Phone: {persona.telefono}</span>
            <span className="text-white">Color: {persona.color}</span>
            <div className="flex gap-2"></div>
            <button
              className="btn btn-outline btn-error glass"
              onClick={() => {
                setPersonas(personas.filter((p) => p.id !== persona.id))
              }}
            >
              Delete
            </button>
          </div>
        ))}
      <div className="modal-action">
        <form method="dialog" className="flex gap-3">
            <div
              className="btn btn-success btn-outline glass"
            onClick={() => setMostrarPersonas(true)}
          >
            Read
          </div>
          <button
            className="btn btn-outline btn-error glass"
            onClick={() => {
              setMostrarPersonas(false);
            }}
          >
            Close
          </button>
        </form>
      </div>
    </div>
  </dialog>
</div>
</div>
</div>
    <a href="/"><button className='btn btn-wide bg-primary-content relative top-20'>Back</button></a>    
    </main>
  );
}