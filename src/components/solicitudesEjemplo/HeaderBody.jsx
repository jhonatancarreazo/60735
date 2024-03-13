


const apiUrl = '/api/products';

const requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Server': 'Node.js',
    'Date': 'Sat, 01 Jan 2023 12:00:00 GMT'
  },
  body: JSON.stringify({
    products: [
      {
        id: 1,
        name: 'Producto A',
        price: 29.99,
        category: 'Electrónicos'
      },
      {
        id: 2,
        name: 'Producto B',
        price: 19.99,
        category: 'Ropa'
      },
      {
        id: 3,
        name: 'Producto C',
        price: 49.99,
        category: 'Hogar'
      }
    ]
  }) 
};

fetch(apiUrl, requestOptions)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error en la solicitud:', error);
  });
