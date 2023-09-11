const express = require('express');
const moment = require("moment");

const app = express();

// middleware
app.use(express.json());

app.listen(3000)



app.get('/api', (req, res) => 
{
    const slack_name = req.query.slack_name;
  const track = req.query.track;

    
    const slackDetails ={
        'slack_name': slack_name,
       "current_day": moment().format("dddd"),
       utc_time: moment.utc().format("YYYY-MM-DDTHH:mm:ss[Z]"),
        'track': track,
        'github_file-url': 'https://github.com/SirArlex/HNG/blob/main/app.js',
        'github-repo_url': "https://github.com/SirArlex/HNG",
        'status_code' : 200

    }
    res.status(200).json(slackDetails)
});



