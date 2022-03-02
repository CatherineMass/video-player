import router from './routes/routes';
import { app } from './routes/routes';

app.use('/', router);

app.listen(5000, () => {
	console.log('App is listening at http://localhost:5000...');  
});
