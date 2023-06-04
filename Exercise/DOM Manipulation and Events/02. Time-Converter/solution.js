function attachEventsListeners() {
  //Define values
  const RATIOS = {
    days: 1,
    hours: 24,
    minutes: 1440,
    seconds: 86400,
  };

  //Helper function to convert all values
  function convert(value, unit) {
    const inDays = value / RATIOS[unit]; //value = input; Ratios[unit] => Ratios[hours] = 24; Ratios[days] = 1

    return {
      days: inDays,
      hours: inDays * RATIOS.hours,
      minutes: inDays * RATIOS.minutes,
      seconds: inDays * RATIOS.seconds,
    };
  }

  //Get all inputs
  const days = document.getElementById("days");
  const hours = document.getElementById("hours");
  const minutes = document.getElementById("minutes");
  const seconds = document.getElementById("seconds");

  //Add eventListener on main element
  document.querySelector("main").addEventListener("click", onConvert);

  //Define functions
  function onConvert(event) {
    // if the target has tagname input and is a button then:
    if (event.target.tagName == "INPUT" && event.target.type == "button") {
      //get input
      const input =
        event.target.parentElement.querySelector('input[type="text"]'); // input with attribute type=text

      //get time
      const time = convert(Number(input.value), input.id); // function returns object with all values
      //Update values with new ones
      days.value = time.days;
      hours.value = time.hours;
      minutes.value = time.minutes;
      seconds.value = time.seconds;
    }
  }
}
