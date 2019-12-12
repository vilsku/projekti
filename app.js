
/*'use strict';
const express = require('express');
const app = express();
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });
const port = 3000;
const imgRoutes = require('./routes/imgRoutes');


app.use('/', imgRoutes);


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
*/
'use strict';
const express = require('express');
const app = express();
const port = 3000;
const imgRoute = require('./routes/imgRoutes');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static('uploads'));
app.use("/img", imgRoute.router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));