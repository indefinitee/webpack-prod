const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

server.get('/echo', (req, res) => {
    res.jsonp(req.query);
});

server.use(jsonServer.bodyParser);
server.use(async (req, res, next) => {
    await new Promise((res) => {
        setTimeout(res, 800);
    });
    // Continue to JSON Server router
    next();
});

server.use((req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(403).json({ message: 'AUTH ERROR' });
    }

    next();
});

server.post('/login', (req, res) => {
    const { username, password } = req.body;
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
    const { users = [] } = db;

    const userFromBd = users.find((u) => u.username === username && u.password === password);

    if (userFromBd) {
        return res.json({ userFromBd });
    }

    return res.status(403).json({ message: 'AUTH ERROR' });
});

server.listen(8000, () => {
    console.log('JSON Server is running');
});
