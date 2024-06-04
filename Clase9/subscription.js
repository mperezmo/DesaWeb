document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('subscription-form');
  
    // Validaciones de los campos
    const validateField = (field, errorElement, validationFunction) => {
      field.addEventListener('blur', () => {
        const errorMessage = validationFunction(field.value);
        if (errorMessage) {
          errorElement.textContent = errorMessage;
          field.classList.add('is-invalid');
        } else {
          errorElement.textContent = '';
          field.classList.remove('is-invalid');
          field.classList.add('is-valid');
        }
      });
  
      field.addEventListener('focus', () => {
        errorElement.textContent = '';
      });
    };
  
    // Funciones de validación
    const validateNombre = (value) => {
        if (value.length <= 6 || !value.includes(' ')) {
            return 'El nombre completo debe tener más de 6 letras y al menos un espacio.';
          }
          return '';
    };
  
    const validateEmail = (value) => {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(value)) {
        return 'Debe ingresar un email válido.';
      }
      return '';
    };
  
    const validateContrasena = (value) => {
      const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      if (!passwordPattern.test(value)) {
        return 'La contraseña debe tener al menos 8 caracteres, incluyendo letras y números.';
      }
      return '';
    };
  
    const validateEdad = (value) => {
      const age = parseInt(value, 10);
      if (isNaN(age) || age < 18) {
        return 'Debe ser un número entero mayor o igual a 18.';
      }
      return '';
    };
  
    const validateTelefono = (value) => {
      const phonePattern = /^\d{7,}$/;
      if (!phonePattern.test(value)) {
        return 'El teléfono debe tener al menos 7 dígitos y no debe contener espacios, guiones ni paréntesis.';
      }
      return '';
    };
  
    const validateDireccion = (value) => {
      if (value.length < 5 || !/\s/.test(value)) {
        return 'La dirección debe tener al menos 5 caracteres y un espacio en el medio.';
      }
      return '';
    };
  
    const validateCiudad = (value) => {
      if (value.length < 3) {
        return 'La ciudad debe tener al menos 3 caracteres.';
      }
      return '';
    };
  
    const validateCodigoPostal = (value) => {
      if (value.length < 3) {
        return 'El código postal debe tener al menos 3 caracteres.';
      }
      return '';
    };
  
    const validateDni = (value) => {
      const dniPattern = /^\d{7,8}$/;
      if (!dniPattern.test(value)) {
        return 'El DNI debe tener 7 u 8 dígitos.';
      }
      return '';
    };
  
    // Elementos del formulario
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const contrasena = document.getElementById('contrasena');
    const repetirContrasena = document.getElementById('repetir-contrasena');
    const edad = document.getElementById('edad');
    const telefono = document.getElementById('telefono');
    const direccion = document.getElementById('direccion');
    const ciudad = document.getElementById('ciudad');
    const codigoPostal = document.getElementById('codigo-postal');
    const dni = document.getElementById('dni');
    const errorNombre = document.getElementById('error-nombre');
    const errorEmail = document.getElementById('error-email');
    const errorContrasena = document.getElementById('error-contrasena');
    const errorRepetirContrasena = document.getElementById('error-repetir-contrasena');
    const errorEdad = document.getElementById('error-edad');
    const errorTelefono = document.getElementById('error-telefono');
    const errorDireccion = document.getElementById('error-direccion');
    const errorCiudad = document.getElementById('error-ciudad');
    const errorCodigoPostal = document.getElementById('error-codigo-postal');
    const errorDni = document.getElementById('error-dni');
  
    // Aplicar validaciones
    validateField(nombre, errorNombre, validateNombre);
    validateField(email, errorEmail, validateEmail);
    validateField(contrasena, errorContrasena, validateContrasena);
    validateField(edad, errorEdad, validateEdad);
    validateField(telefono, errorTelefono, validateTelefono);
    validateField(direccion, errorDireccion, validateDireccion);
    validateField(ciudad, errorCiudad, validateCiudad);
    validateField(codigoPostal, errorCodigoPostal, validateCodigoPostal);
    validateField(dni, errorDni, validateDni);
  
    // Validación de la repetición de contraseña
    repetirContrasena.addEventListener('blur', () => {
      const errorMessage = contrasena.value !== repetirContrasena.value ? 'Las contraseñas deben coincidir.' : '';
      errorRepetirContrasena.textContent = errorMessage;
      repetirContrasena.classList.toggle('is-invalid', !!errorMessage);
      repetirContrasena.classList.toggle('is-valid', !errorMessage);
    });
  
    repetirContrasena.addEventListener('focus', () => {
      errorRepetirContrasena.textContent = '';
    });
  
    // Actualización del título en tiempo real
    nombre.addEventListener('input', () => {
      document.getElementById('nombre-display').textContent = nombre.value.toUpperCase();
    });
  
    // Manejo del envío del formulario
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (form.checkValidity()) {
        alert('Formulario enviado con éxito!');
      } else {
        alert('Hay errores en el formulario.');
      }
    });
  });
  