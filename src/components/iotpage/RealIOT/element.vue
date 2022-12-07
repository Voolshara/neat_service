<template>
  <div class="card">
    <img class="cardImg" :src="imgLink" alt="No Img" />
    <p class="cardLabel">{{ label }}</p>
    <!-- <p class="cardDesc">{{ desc }}</p> -->
  </div>
</template>

<script>
export default {
  name: "IOTProjectEl",
  props: {
    imgLink: String,
    label: String,
    desc: String,
  },
};
</script>

<style lang="scss" scoped>
.cardLabel {
  font-size: 30px;
  font-weight: 400;
  margin: 20px 0 0 0;
}

.cardDesc {
  font-weight: 200;
}

@media screen and (max-width: 700px) {
  .cardDesc {
    font-size: 14px;
  }
}

.cardImg,
.cardLabel,
.cardDesc {
  width: 350px;
}

@media screen and (max-width: 700px) {
  .cardImg,
  .cardLabel,
  .cardDesc {
    width: 260px;
  }
}

.card {
  padding: 30px;
  border: 1px solid rgba($color: #000000, $alpha: 0.2);
  box-shadow: 12px 12px 2px 1px rgba(227, 6, 19, 0.15);
  transition: all 0.2s ease-in-out;
}

.card:hover {
  transform: scale(1.15);
}
</style>
