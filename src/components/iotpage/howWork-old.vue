<template>
  <div class="howWork">
    <p class="labelIoT">Как это работает ?</p>
    <div class="IotScheme">
      <p class="label">Датчики</p>
      <p class="label">БАЗОВАЯ СТАНЦИЯ</p>
      <p class="label">СЕРВЕР СЕТИ</p>
      <p class="label">ПРОГРАМНОЕ ОБЕСПЕЧЕНИЕ</p>
      <div class="lvl lvl1">
        <img src="@/assets/iot/factory.png" alt="" />
        <img src="@/assets/iot/garbage.png" alt="" />
        <img src="@/assets/iot/hospital.png" alt="" />
        <img src="@/assets/iot/parking.png" alt="" />
      </div>

      <div class="lvl lvl2">
        <img src="@/assets/iot/antenna.png" alt="" />
      </div>

      <div class="lvl lvl3">
        <img src="@/assets/iot/cloud-network.png" alt="" />
      </div>

      <div class="lvl lvl4">
        <img src="@/assets/iot/analytics.png" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.IotScheme {
  .lvl {
    display: grid;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      width: 100px;
    }
  }
  display: grid;
  grid-template-rows: 50px 400px;
  grid-template-columns: auto auto auto auto;
}

.howWork {
  .IoTScheme {
    width: 1000px;
    height: 700px;
  }

  .labelIoT {
    font-size: 40px;
    margin-top: 40px;
    margin-bottom: 0px;
  }

  display: flex;

  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
