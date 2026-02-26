const express = require('express');
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const timestamp = new Date().toLocaleString();
    console.log(`[${timestamp}] --- Nueva petición de Login ---`);
    console.log(`[${timestamp}] Usuario del sistema: Oscar`); 
    console.log(`[${timestamp}] Intentando autenticar a: ${username}`);

    if (username === 'admin' && password === '1234') {
        console.log(`[${timestamp}] RESULTADO: Éxito`);
        return res.json({ "success": true });
    }

    console.log(`[${timestamp}] RESULTADO: Fallido (Credenciales incorrectas)`);
    res.status(401).json({ "success": false });
});

app.listen(PORT, () => {
    console.log(`Servidor iniciado por: Oscar`);
    console.log(`Fecha y Hora: ${new Date().toLocaleString()}`);
    console.log(`Escuchando en puerto: ${PORT}`);
});