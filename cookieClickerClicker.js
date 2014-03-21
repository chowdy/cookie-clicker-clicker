// Click on the cookie.
clicky = function(interval) {
  cookie = $("#bigCookie");
  setInterval(function() {cookie.click(); }, interval)
}

// Click on the golden cookies.
goldenClicky = function(interval) {
  setInterval(function() {$("#goldenCookie").click(); },
    interval)
}

// Buy products
prodAndUpgradeClicky = function(interval) {

  getSortedProductsList = function() {

    // Grab product prices
    products = [];
    $("#products").children().each(function(index,element) {
      $prod = $(element);
      price = parseInt($($prod.find(".price")[0]).text().replace(/\,/g,""));
      products.push({product: $prod, price: price});
    });

    // Sort products by price
    return products.sort(function(a,b){return a.price-b.price});
  }

  tryToBuyUpgrades = function() {
    $("#upgrades").children().each(function(index,element) {
      element.click();
    });
  }

  doWork = function() {
    tryToBuyUpgrades();
    cheapestProduct = getSortedProductsList()[0].product.click();
  }

  setInterval(doWork, interval);
}

// Do everything
everythingClicky = function() {
  clicky(10);
  goldenClicky(500);
  prodAndUpgradeClicky(500);
}

everythingClicky();
