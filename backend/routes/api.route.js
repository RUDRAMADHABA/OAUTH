const router = require('express').Router();
const { Router } = require('express');
const {google} = require('googleapis')
const GOOGLE_CLIENT_ID = '510506561601-im52nlrnf6b40h962bc3orbu2uiirsia.apps.googleusercontent.com'
const GOOGLE_CLIENT_SECRET = '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'
const REFRESH_TOKEN = '' // will be different for browser you can put yours
// WRITING CREDS HERE AS OF NOW

const oauth2client = new google.auth.OAuth2(

)
router.get('/', async (req, res, next) => {
  res.send({ message: 'Ok api is working 🚀' });
});

router.post('/create-tokens', async (req, res, next) => {

  try{
    const {code} = req.body
    const {tokens} = await oauth2client.getToken(code )
    res.send (tokens) 
  } catch ( error) {
    next(error)
  }

});

Router.post('/create-event', async (req, res, next) => {
  try {
    const {summary, description, location, startDateTime, endDateTime} =  
    req.body
    oauth2Client.setCredentials({refresh_token: REFRESH_TOKEN})
    const calendar = google.calendar('v3')
    const response = await calendar.events.insert({
      auth: oauth2client,
      calendarId: 'primary',
      requestBody: {
        summary: summary,
        description: description,
        location: location,
        colorId: '6',
        start: {
          dateTime: new Data(startDateTime),
        },
        end: {
          dateTime: new Data(endDateTime),
        },
      },
    })
  } catch (error) {
    next (error)
  }
})

module.exports = router;


// color ID :
// 1 Blue 
// 2 green 
// 3 purple 
// 4 red 
// 5 yellow 
// 6 orange 
// 7 turquoise 
// 8 gray 
// 9 boldblue
// 10 bold green