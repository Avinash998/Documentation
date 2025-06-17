let obj1={
  "transfers": {
    "pending": [
      {
        "transferId": "02606d78-1b56-496a-95e8-2bb338d2a8f3",
        "ticketId": "04B31249-C1D7-5DC1-75FB-019759D81BF9",
        "sku": "SKU123"
      }
    ],
    "accepted": [
      {
        "transferId": "30392dbe-81b7-4687-a92b-22e6aab5f63a",
        "ticketId": "B01FBBDA-77C7-77F8-4379-0197592AB877",
        "sku": "SKU456"
      }
    ],
    "rejected": [
      {
        "transferId": "32e0a426-504e-4660-bab1-a44122b3f70b",
        "ticketId": "04B31249-C1D7-5DC1-75FB-019759D81BF9",
        "sku": "SKU123"
      }
    ],
    "canceled": [
      {
        "transferId": "f67fb7af-1012-4fb5-a5f9-bbd923e50d55",
        "ticketId": "B01FBBDA-77C7-77F8-4379-0197592AB877",
        "sku": "SKU456"
      },
      {
        "transferId": "878b7ba8-443f-4893-80e2-45bbdc8169de",
        "ticketId": "B01FBBDA-77C7-77F8-4379-0197592AB877",
        "sku": "SKU789"
      }
    ],
    "expired": [],
    "consumed": []
  }
}


function uniqueSqu(obj){
    let objMap = []
    if(obj && obj.transfers){
        for(let key in obj.transfers){
             for(let i=0; i<obj.transfers[key].length; i++){
                if(obj.transfers[key][i] && obj.transfers[key][i]['sku']){
                    objMap.push(obj.transfers[key][i]['sku'])
                }
             }
        }
    }
    let objSet = new Set(objMap);
    return [... objSet];
}
console.log(uniqueSqu(obj1))