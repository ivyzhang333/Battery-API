const batteryLevel = document.querySelector(".batteryLevel");
const batteryCharging = document.querySelector(".batteryCharging");
const batteryChargingTime = document.querySelector(".batteryChargingTime");
const batteryDisChargingTime = document.querySelector(
  ".batteryDisChargingTime"
);

//battery api
const battery = () => {
  if ("getBattery" in navigator) {
    //need to get battery object, navigator is a global object
    navigator.getBattery().then(battery => {
      //global function
      function updateAllBatteryDetails() {
        updateChargingInfo();
        updateLevelChage();
        updateDischargingTimeInfo();
        updateChargingTimeInfo();
      }
      updateAllBatteryDetails();

      //to handle battery charging change
      battery.addEventListener("chargingchange", () => {
        updateChargingInfo();
      });

      function updateChargingInfo() {
        const isCharging = battery.charging ? "Yes" : "No";
        batteryCharging.innerHTML = isCharging;
      }

      //to handle battery charging time change
      battery.addEventListener("chargingtimechange", () => {
        updateChargingTimeInfo();
      });

      function updateChargingTimeInfo() {
        batteryChargingTime.innerHTML = battery.chargingTime + " seconds";
      }

      //battery discharging time change
      battery.addEventListener("dischargingchange", () => {
        updateDischargingTimeInfo();
      });

      function updateDischargingTimeInfo() {
        batteryDisChargingTime.innerHTML = battery.dischargingTime + " seconds";
      }

      //battery level change
      battery.addEventListener("levelchange", () => {
        updateLevelChage;
      });

      function updateLevelChage() {
        const level = battery.level * 100 + "%";
        batteryLevel.innerHTML = level;
      }

      //battery status
    });
  }
};

battery();
