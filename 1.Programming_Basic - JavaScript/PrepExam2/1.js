function agency(input) {
  let nameCompany = input[0];
  let countAdultTickets = Number(input[1]);
  let countKidTickets = Number(input[2]);
  let netPriceAdult = Number(input[3]);
  let priceService = Number(input[4]);

  let netKidTicket = netPriceAdult * 0.3;
  let priceServiceAdultTicket = netPriceAdult + priceService;
  let priceKidServiceTicket = netKidTicket + priceService;

  let priceAllTickets =
    countKidTickets * priceKidServiceTicket +
    countAdultTickets * priceServiceAdultTicket;
  let profit = priceAllTickets * 0.2;
  console.log(
    `The profit of your agency from ${nameCompany} tickets is ${profit.toFixed(2)} lv.`
  );
}

// agency(["WizzAir", 15, 5, 120, 40]);
agency(["Ryanair", 60, 23, 158.96, 39.12]);
