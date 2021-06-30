import app from './app';

const dotenv = require('dotenv');

dotenv.config();

app.set('port', process.env.APP_PORT || 3333);

app.listen(app.get('port'), () => {
  console.log(`App running at port ${app.get('port')} in ${app.get('env')} mode`);
});
