	// upload: (req, res, next) => {
	// 	let form = new formidable.IncomingForm();
		
	// 	form.uploadDir = path.join(__dirname, '../uploads');
		
	// 	form.on('file', (field, file) => {
	// 		fs.rename(file.path, path.join(form.uploadDir, file.name));
	// 	});

	// 	form.on('error', (err) => {
	// 		console.log('An error occured', err);
	// 	});
		
	// 	form.on('end', () => {
	// 		console.log('File upload was successful.')
	// 	});
		
	// 	form.parse(req);
	// }