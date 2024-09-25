import { sendEmail } from '@hooks/mailto'
global.fetch = jest.fn()

describe('sendEmail', () => {
  const mockData = {
    data: {
      contact: {
        email: 'example@example.com',
        phone: '123456789'
      },
      products: [{ name: 'Producto 1' }]
    }
  }

  const incompleteData = {
    data: {
      contact: {
        phone: '123456789'
      }
    }
  }

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('envía el correo correctamente', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ message: 'Correo enviado' })
    })

    const response = await sendEmail(mockData)

    expect(fetch).toHaveBeenCalledWith('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(mockData)
    })

    expect(response).toEqual({ message: 'Correo enviado' })
  })

  it('lanza un error si la respuesta no es exitosa', async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
      json: async () => ({ error: 'Error en la API' })
    })

    await expect(sendEmail(mockData)).rejects.toThrow(
      'No se pudo enviar el correo'
    )
  })

  it('lanza un error si los datos no tienen el formato correcto', async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
      json: async () => ({ error: 'Datos incompletos o incorrectos' })
    })

    await expect(sendEmail(incompleteData)).rejects.toThrow(
      'No se pudo enviar el correo'
    )

    expect(fetch).toHaveBeenCalledWith('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(incompleteData)
    })
  })
})
