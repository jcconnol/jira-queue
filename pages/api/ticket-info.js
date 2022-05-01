// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

//TODO retrieve ticket info
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

        console.log(data)
        var dataOutput = data;
        console.log(dataOutput);
        res.status(200).json(dataOutput);
        return data;
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