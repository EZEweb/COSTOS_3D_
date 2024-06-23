function calculateCost() {
    const materialCost = parseFloat(document.getElementById('material-cost').value);
    const materialWeight = parseFloat(document.getElementById('material-weight').value);
    const printTime = parseFloat(document.getElementById('print-time').value);
    const hourlyRate = parseFloat(document.getElementById('hourly-rate').value);
    const electricityCost = parseFloat(document.getElementById('electricity-cost').value);
    const exchangeRate = parseFloat(document.getElementById('exchange-rate').value);
    const profitMargin = parseFloat(document.getElementById('profit-margin').value);

    const materialTotal = (materialCost / 1000) * materialWeight;
    const printingCost = printTime * hourlyRate;
    const electricityTotal = printTime * (electricityCost / 1000) * 100;

    const totalCostARS = materialTotal + printingCost + electricityTotal;
    const totalCostUSD = totalCostARS / exchangeRate;

    const finalCostARS = totalCostARS * (1 + profitMargin / 100);
    const finalCostUSD = totalCostUSD * (1 + profitMargin / 100);

    document.getElementById('cost-ars').textContent = `Costo en Pesos Argentinos: $${totalCostARS.toFixed(2)}`;
    document.getElementById('cost-usd').textContent = `Costo en Dólares: $${totalCostUSD.toFixed(2)}`;
    document.getElementById('final-cost-ars').textContent = `Costo Final en Pesos Argentinos (con ganancia): $${finalCostARS.toFixed(2)}`;
    document.getElementById('final-cost-usd').textContent = `Costo Final en Dólares (con ganancia): $${finalCostUSD.toFixed(2)}`;
}
