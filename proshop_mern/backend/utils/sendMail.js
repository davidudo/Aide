import dotenv from 'dotenv'
import mailgun from 'mailgun-js'

dotenv.config()

const API_KEY = process.env.MAILGUN_API_KEY
const DOMAIN = process.env.MAILGUN_DOMAIN

const mg = mailgun({ apiKey: API_KEY, domain: DOMAIN })
 
function sendMail (sender_email, receiver_email,
    email_subject, email_body) {
 
    const data = {
        "from": sender_email,
        "to": receiver_email,
        "subject": email_subject,
        "html": email_body
    }
 
    mg.messages().send(data, (error, body) => {
        if (error) console.log(error)
        else console.log(body);
    })
}

export default sendMail
