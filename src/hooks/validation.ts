import * as yup from 'yup'

export const validationProducts = yup.object().shape({
  email: yup
    .string()
    .email('Correo electrónico no válido')
    .required('Sin tu email no podemos contactarte'),
  phone: yup
    .string()
    .required('El número de teléfono es obligatorio')
    .matches(
      /^[0-9]+$/,
      'El teléfono solo puede contener números (sin espacios)'
    )
    .min(8, 'El teléfono debe tener al menos 8 dígitos')
})

export const validationContact = yup.object({
  email: yup
    .string()
    .email('Formato de email inválido')
    .required('Necesitamos tu email para responderte'),
  name: yup.string().required('¿Con quién tenemos el gusto de hablar?'),
  phone: yup.string(),
  company: yup.string(),
  subject: yup.string().required('¿Qué tema te gustaría tratar?'),
  message: yup.string().required('No nos dejes sin saber qué necesitas')
})
