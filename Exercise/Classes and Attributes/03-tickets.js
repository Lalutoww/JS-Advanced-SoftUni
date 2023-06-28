function tickets(ticketsArr, criteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    const splitedArrOfStr = ticketsArr.map((x)=>x.split('|'));
    const ticketLists = splitedArrOfStr.map(
        ([d, p, s]) => new Ticket(d, Number(p), s)
      );
      const sortedArr = ticketLists.sort((a, b) => {
        return typeof a[criteria] === "number"
          ? a[criteria] - b[criteria]
          : a[criteria].localeCompare(b[criteria]);
      });
    
    return sortedArr;
}
// console.log(
//     tickets(
//       [
//         "Philadelphia|94.20|available",
//         "New York City|95.99|available",
//         "New York City|95.99|sold",
//         "Boston|126.20|departed",
//       ],
//       "destination"
//     )
//   );
  // Output
  //      [ Ticket { destination: 'Boston',
  //       price: 126.20,
  //       status: 'departed' },
  
  //       Ticket { destination: 'New York City',
  //       price: 95.99,
  //       status: 'available' },
  
  //       Ticket { destination: 'New York City',
  //       price: 95.99,
  //       status: 'sold' },
  
  //       Ticket { destination: 'Philadelphia',
  //       price: 94.20,
  //       status: 'available' } ]
  
  console.table(
    tickets(
      [
        "Philadelphia|94.20|available",
        "New York City|95.99|available",
        "New York City|95.99|sold",
        "Boston|126.20|departed",
      ],
      "status"
    )
  );
  // Output
  //      [ Ticket { destination: 'Philadelphia',
  //       price: 94.20,
  //       status: 'available' },
  
  //      Ticket { destination: 'New York City',
  //      price: 95.99,
  //      status: 'available' },
  
  //      Ticket { destination: 'Boston',
  //      price: 126.20,
  //      status: 'departed' },
  
  //      Ticket { destination: 'New York City',
  //      price: 95.99,
  //      status: 'sold' } ]
