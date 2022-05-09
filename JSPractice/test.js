const nodemailer = require('nodemailer');
const email = ({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "249f067631942b",
        pass: "7396772a279a04"
    }
});

const send = async (option) => {
    nodemailer.createTransport(email).sendMail(option, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log(info);
            return info.response;
        }
    });
};

let email_data = {
    from: 'sienne04@naver.com',
    to: 'sienne04@naver.com',
    subject: '테스트 메일입니다',
    text: 'nodejs 한시간만에 끝내보자'
}

send(email_data);

