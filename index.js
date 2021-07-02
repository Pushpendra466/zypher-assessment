fetch('https://run.mocky.io/v3/d53400a3-6126-495e-9d16-0b4414b537b3')
.then(response=>{
    let responseText = response.text();
    return responseText;
})
.then(data =>{
    data = data+'}'; // there is missing } at the end of response, so adding } to convert it in json
    const result = JSON.parse(data);
    console.log(result.clients[0].name);
    let clientsDetail = result.clients
    for(let i =0 ; i <clientsDetail.length ; i++)
   { $('.list').append(`<tr class="text-muted">
    <td>
          <span class="client-id text-primary" ><b>${clientsDetail[i].id}</b> </span>
    </td>
    <td>
          <span class="closing-agent">${clientsDetail[i].name} </span>
    </td>
    <td>
          <span class="company">${clientsDetail[i].company} </span>
    </td>
    <td>
          <span class="order">${clientsDetail[i].orderId} </span>
    </td>
    <td>
          <span class="invoice-paid">$${clientsDetail[i].invoicepaid} </span>
    </td>
    <td>
          <span class="invoice-pending">$${clientsDetail[i].invoicePending} </span>
    </td>
    <td>
    <i class="fas fa-money-check-alt"></i>
    </td>
     </tr>`)}
})
