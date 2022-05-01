// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

//TODO retrieve ticket info
//TODO save ticket info to file
//TODO delete ticket from file
  
export default function userHandler(req, res) {
  const {
    query: { id, name },
    method,
  } = req

  switch (method) {
    case 'GET':
      // Get ticket from file
      var fakeData = [
        'TRUSTED-1830',
        'TRUSTED-99929',
        'TRUSTED-99929',
        'TRUSTED-99',
        'TRUSTED-99929'
      ];

      res.status(200).json({
        "tickets": fakeData
      })
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