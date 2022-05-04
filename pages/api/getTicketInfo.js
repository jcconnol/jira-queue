
// async function formatTicketData(data){
//     var ticketList = JSON.parse(data).tickets;
//     var ticketDataList = [];
    
//     for(var i=0; i < ticketList.length; i++){
//         var ticket = ticketList[i]

//         var headers = {
//         headers: {
//             "Authorization": "Basic amNjb25ub2w0QGdtYWlsLmNvbTpmTGREUXVqem9IeGJxd0xUeENEejkwRDA="
//         }, 
//         method: 'GET'
//         }

//         var endpoint = "https://jcconnol4.atlassian.net/rest/api/2/issue/" + ticket

//         var requestData = await fetch(endpoint, headers);

//         var jsonResp = await requestData.json();
//         var avatarImage = jsonResp.fields.project.avatarUrls["32x32"];
//         var summary = jsonResp.fields.summary;
//         var name = jsonResp.fields.name;
//         var key = jsonResp.key;

//         var ticketData = {
//         "avatarImage":avatarImage,
//         "summary":summary,
//         "name": name,
//         "key": key
//         }

//         ticketDataList.push(ticketData)            
//     }

//     return ticketDataList;
// }

// module.exports = { formatTicketData };