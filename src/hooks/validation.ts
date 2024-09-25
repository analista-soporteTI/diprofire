import * as yup from 'yup'

export const validationProducts = yup.object().shape({
  name: yup.string().required('¿Con quién tenemos el gusto de hablar?'),
  email: yup
    .string()
    .email('Correo electrónico no válido')
    .required('Sin tu email no podemos contactarte'),
  enterprise: yup.string()
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
