// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

//TODO save ticket info to file
//TODO delete ticket from file
const fs = require('fs')
const ticketData = require('./getTicketInfo')
// exports.handler =  async (event) => {

export default async function userHandler(req, res) {
  const {
    query: { id, name },
    method,
  } = req

  switch (method) {
    case 'GET':
      var ticketDataList;
      await fs.readFile('./pages/api/ticketList.json', 'utf8', async function (err,data) {
        if (err) {
          console.log(err)
          return ['Error reading tickets'];
        }

        ticketDataList = await ticketData.formatTicketData(data);
        res.status(200).json(ticketDataList);
      });

      break
    case 'POST':
      // Update, add or delete ticket
      var ticketList = req.body.ticketList;
      await fs.writeFile('./pages/api/ticketList.json', ticketList, async function (err,data) {
        if (err) {
          console.log(err)
          res.status(500).text("Error writing ticket data");
        }

        res.status(200).json(ticketDataList);
      });

      break
    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }

  // return {
  //   statusCode: 200,
  //   body: JSON.stringify(ticketDataList),
  //   headers: {
  //       "Access-Control-Allow-Origin": "*",
  //   }
  // };
}
