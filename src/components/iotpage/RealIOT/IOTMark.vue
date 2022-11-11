<template>
  <div class="MarkLabel">
    <div class="markPartsContainer">
      <img class="markpart1" src="@/assets/IotPage/mark-1.png" alt="" />
      <div class="markpart2">
        <p class="marktext">{{ label }}</p>
        <img src="@/assets/IotPage/mark-2.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MarkToIOT",
  props: {
    label: String,
  },
};
</script>

<style lang="scss" scoped>
.markpart2,
.check {
  position: absolute;
  top: 0;
  display: none;
  z-index: 3;
}

.marktext {
  position: absolute;
  top: 80px;
  left: 80px;
  z-index: 2;
  font-weight: 400;
  background-color: rgba($color: #000000, $alpha: 0.3);
  border-radius: 10px;
  padding: 5px;
}

.markpart1 {
  position: absolute;
  top: 4px;
  z-index: 4;
}

.markpart1:hover + .markpart2 {
  display: block !important;
}

.markPartsContainer {
  position: relative;
}

.MarkLabel {
  position: absolute;
  color: white;
}
</style>
