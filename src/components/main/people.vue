<template>
  <div class="onePeople">
    <img :src="img" alt="" class="PeopleImg" />
    <p class="name">{{ name }}</p>
    <p class="desc">{{ desc }}</p>
    <div class="nums">
      <div class="num" v-for="(el, index) in nums" :key="index">
        <p class="child-1">{{ el[0] }}</p>
        <p class="child-2">{{ el[1] }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "onePeople",
  props: {
    type: String,
    img: String,
    name: String,
    desc: String,
    nums: Array,
  },
};
</script>

<style lang="scss" scoped>
.child-1 {
  width: 10px;
}

.nums {
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.num {
  .child-2 {
    margin: 7px;
    max-width: 150px;
  }
  .child-1 {
    margin: 0;
    margin-right: 30px;
    font-size: 20px;
    font-weight: 600;
  }

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-left: 10px;
}
.desc {
  font-size: 20px;
  margin: 5px;
  font-weight: 200;
}
.name {
  font-size: 40px;
  margin-top: 10px;
  margin: 5px;
  font-weight: 600;
}
.PeopleImg {
  width: 240px;
  border-radius: 20px;
}

.onePeople {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 20px 20px 30px 20px;
  color: white;

  border: 1px white solid;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;

  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  width: 260px;
  height: 660px;
}

.bottom-circle {
}
</style>
