const express = require('express');
const { faker } = require('@faker-js/faker'); // Actualiza la importación
const app = express();
const port = process.env.PORT || 3001;

class Usuario {
    constructor() {
        this._id = faker.string.uuid(); // Actualiza el método
        this.nombre = faker.name.firstName();
        this.apellido = faker.name.lastName();
        this.correoElectronico = faker.internet.email();
        this.telefono = faker.phone.number(); // Actualiza el método
    }
}

class Empresa {
    constructor() {
        this._id = faker.string.uuid(); // Actualiza el método
        this.nombre = faker.company.name();
        this.direccion = {
            calle: faker.address.streetAddress(),
            ciudad: faker.address.city(),
            estado: faker.address.state(),
            codigoPostal: faker.address.zipCode(),
            pais: faker.address.country()
        };
    }
}

app.get('/api/users/new', (req, res) => {
    const nuevoUsuario = new Usuario();
    res.json({ Usuario: nuevoUsuario });
});

app.get('/api/companies/new', (req, res) => {
    const nuevaEmpresa = new Empresa();
    res.json({ Empresa: nuevaEmpresa });
});

app.get('/api/user/company', (req, res) => {
    const nuevoUsuario = new Usuario();
    const nuevaEmpresa = new Empresa();
    res.json({ Usuario: nuevoUsuario, Empresa: nuevaEmpresa });
});

const server = app.listen(port, () =>
    console.log(`Server is locked and loaded on port http://localhost:${port}`)
);
