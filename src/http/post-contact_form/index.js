let tiny = require('tiny-json-http')
let arc = require('@architect/functions')

let sendContactForm = async function (req) {
  let body = arc.http.helpers.bodyParser(req)
  let { name, email, subject, message } = body
  console.log(name, email, subject, message)

  let url = 'https://api.trycourier.app/send'
  
  let headers = {
    "authorization": `Bearer ${process.env.COURIER_AUTH_TOKEN}`,
    "content-type": "application/json",
  }
  
  let data = {
    event: `${process.env.COURIER_NOTIFICATION_ID}`,
    recipient: 'pchinjr',
    profile: {
      slack: {
        access_token: `${process.env.SLACK_TOKEN}`,
        email: 'pchinjr@gmail.com'
      }
    },
    data: {
      name: 'Paul Chin Jr.',
      apt_date: 'June 26',
      apt_time: '8:44 PM',
      support_phone: '555-555-5555',
      support_url: 'https://docs.trycourier.com'
    }
  }
  
  let response =  await tiny.post( {url, data, headers} )

  console.log(response)
  
  return {
    location: '/'
  }
}

exports.handler = arc.http.async(sendContactForm)