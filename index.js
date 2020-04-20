var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');

var transport = {
	host: process.env.REACT_APP_TRANSPORT_HOST, ////  SMTP host of provider
	port: process.env.REACT_APP_TRANSPORT_PORT,
	auth: {
		user: process.env.REACT_APP_MAIL_USER,
		pass: process.env.REACT_APP_MAIL_PASS,
	},
};

var transporter = nodemailer.createTransport(transport);

transporter.verify((error) => {
	if (error) {
		console.log(error);
	} else {
		console.log('Server is ready to take messages');
	}
});

router.post('/send', (req, res, next) => {
	var name = req.body.name;
	var email = req.body.email;
	var subject = req.body.subject;
	var message = req.body.message;
	var content = `name: ${name} \n email: ${email} \n  subject:${subject} \n message: ${message} `;
	var mail = {
		from: name,
		to: process.env.REACT_APP_MY_EMAIL,
		subject: subject,
		text: content,
	};
	transporter.sendMail(mail, (err, data) => {
		if (err) {
			res.json({
				status: 'fail',
			});
		} else {
			res.json({
				status: 'success',
			});
		}
	});
});

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);
app.listen(3002);
