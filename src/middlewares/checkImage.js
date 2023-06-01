function checkImage(req, res, next) {
	if (!req.file) {
		return res
			.status(400)
			.json({ status: 400, message: 'Rasm tanlanmadi!' });
	}
	if (
		req.file.mimetype == 'image/png' ||
		req.file.mimetype == 'image/jpg' ||
		req.file.mimetype == 'image/jpeg'
	) {
		next();
	} else {
		return res.status(400).json({ status: 400, message: 'Faqat rasm yuboring!' });
	}
}

export default checkImage;
