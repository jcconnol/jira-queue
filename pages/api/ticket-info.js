// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

//TODO save ticket info to file
//TODO delete ticket from file
const fs = require('fs')

export default async function userHandler(req, res) {
  const {
    query: { id, name },
    method,
  } = req

  switch (method) {
    case 'GET':
      await fs.readFile('./pages/api/ticketList.json', 'utf8', async function (err,data) {
        if (err) {
          console.log(err)
          return ['Error reading tickets'];
        }

        var ticketList = JSON.parse(data).tickets;
        var ticketDataList = [];
        
        for(var i=0; i < ticketList.length; i++){
          var ticket = ticketList[i]

          var headers = {
            headers: {
              "Authorization": "Basic amNjb25ub2w0QGdtYWlsLmNvbTpmTGREUXVqem9IeGJxd0xUeENEejkwRDA="
            }, 
            method: 'GET'
          }

          var endpoint = "https://jcconnol4.atlassian.net/rest/api/2/issue/" + ticket

          var requestData = await fetch(endpoint, headers);

          var jsonResp = await requestData.json();
          var avatarImage = jsonResp.fields.project.avatarUrls["32x32"];
          var summary = jsonResp.fields.summary;
          var name = jsonResp.fields.name;
          var key = jsonResp.key;

          var ticketData = {
            "avatarImage":avatarImage,
            "summary":summary,
            "name": name,
            "key": key
          }

          ticketDataList.push(ticketData)            
        }

        res.status(200).json(ticketDataList);
      });

      break
    case 'POST':
      // Update, add or delete ticket
      res.status(200).json({ id, name: name || `User ${id}` })
      break
    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}