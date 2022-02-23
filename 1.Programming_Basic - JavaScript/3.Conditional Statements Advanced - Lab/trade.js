function commision(input) {
  let city = input[0];
  let sales = Number(input[1]);
  let totalCommision = 0;
  let isError = false;

  if (sales < 0) {
    console.log("error");
  } else {
    switch (city) {
      case "Sofia":
        if (sales <= 500) {
          totalCommision = sales * 0.05;
        } else if (sales <= 1000) {
          totalCommision = sales * 0.07;
        } else if (sales <= 10000) {
          totalCommision = sales * 0.08;
        } else {
          totalCommision = sales * 0.12;
        }
        break;
      case "Varna":
        if (sales <= 500) {
          totalCommision = sales * 0.045;
        } else if (sales <= 1000) {
          totalCommision = sales * 0.075;
        } else if (sales <= 10000) {
          totalCommision = sales * 0.1;
        } else {
          totalCommision = sales * 0.13;
        }
        break;
      case "Plovdiv":
        if (sales <= 500) {
          totalCommision = sales * 0.055;
        } else if (sales <= 1000) {
          totalCommision = sales * 0.08;
        } else if (sales <= 10000) {
          totalCommision = sales * 0.12;
        } else {
          totalCommision = sales * 0.145;
        }
        break;
      default:
        isError = true;
        break;
    }

    if (isError) {
      console.log("error");
    } else {
      console.log(totalCommision.toFixed(2));
    }
  }
}
