import express, { Request, Response } from 'express';
import path from 'path';

const app = express();
const PORT = 3000;

// Define o diretório para arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rota para a página inicial
app.get('/', (req: Request, res: Response) => {
    // Define o caminho absoluto para o arquivo HTML
    const filePath = path.join(__dirname, 'public', 'index.html');
    // Envia o arquivo HTML como resposta
    res.sendFile(filePath);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
