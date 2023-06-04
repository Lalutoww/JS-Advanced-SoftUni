function attachEventsListeners() {
  //Collect elemenents
  const convertBtn = document.getElementById("convert");
  const inputValue = document.getElementById("inputDistance");
  const outputValue = document.getElementById("outputDistance");
  const inputUnits = document.getElementById("inputUnits");
  const outputUnits = document.getElementById("outputUnits");
  //Define dictionary
  const distanceDict = {
    km: 1000,
    m: 1,
    cm: 0.01,
    mm: 0.001,
    mi: 1609.34,
    yrd: 0.9144,
    ft: 0.3048,
    in: 0.0254,
  };

  convertBtn.addEventListener("click", convertHandler);

  function convertHandler() {
    const convertFrom = inputUnits.value;
    const convertTo = outputUnits.value;

    const valueInMeters = inputValue.value * distanceDict[convertFrom];
    const convertedValue = valueInMeters / distanceDict[convertTo];
    outputValue.value = convertedValue;
  }
}
