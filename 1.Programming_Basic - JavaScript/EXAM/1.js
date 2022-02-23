function mining(input) {
  let gpuPrice = Number(input[0]);
  let adapterPrice = Number(input[1]);
  let useElectricGpuPerDay = Number(input[2]);
  let profit = Number(input[3]);

  let totalPriceGpus = gpuPrice * 13;
  let totalPriceAdaptors = adapterPrice * 13;
  let wasteMoney = totalPriceGpus + totalPriceAdaptors + 1000;

  let profitByGpu = profit - useElectricGpuPerDay;
  let totalProfit = profitByGpu * 13;

  console.log(wasteMoney);
  console.log(Math.ceil(wasteMoney / totalProfit));
}

mining([700, 15, 0.2, 2]);
