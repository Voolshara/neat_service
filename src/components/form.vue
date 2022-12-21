<template>
  <div class="formContainer">
    <p class="FormHeader">Оставить заявку</p>
    <div v-if="is_send" class="textOnSend">
      <div class="text animate__animated animate__fadeIn">Заявка оставлена</div>
    </div>
    <div v-else class="form">
      <div class="label">
        Имя
        <div v-if="errorName" class="error animate__animated animate__fadeIn">
          Пустое поле
        </div>
      </div>

      <input class="formInput" v-model="form.name" placeholder="Ваше имя" />

      <div class="label">
        Телефон
        <div
          v-if="errorPhoneOrEmail"
          class="error animate__animated animate__fadeIn"
        >
          Пустое поле
        </div>
      </div>
      <input class="formInput" v-model="form.phone" placeholder="Ваш телефон" />

      <div class="label">
        Почта
        <div
          v-if="errorPhoneOrEmail"
          class="error animate__animated animate__fadeIn"
        >
          Пустое поле
        </div>
      </div>
      <input
        class="formInput"
        v-model="form.email"
        placeholder="info@neatech.ru"
      />

      <div class="label">
        Текст вопроса
        <div
          v-if="errorText === 1"
          class="error animate__animated animate__fadeIn"
        >
          Пустое поле
        </div>
        <div
          v-if="errorText === 2"
          class="error animate__animated animate__fadeIn"
        >
          Текст привысил 300 символов
        </div>
      </div>
      <textarea
        class="formInput textarea"
        v-model="form.text"
        placeholder="Ваше обращение"
      />
      <button type="button" v-on:click="send()" class="btn">Отправить</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormContact",
  data() {
    return {
      form: {
        name: "",
        phone: "",
        email: "",
        text: "",
      },
      is_send: false,
      errorName: 0,
      errorPhoneOrEmail: 0,
      errorText: 0,
    };
  },
  methods: {
    send() {
      let no_error = true;
      if (this.form.name === "") {
        this.errorName = 1;
        no_error = false;
      } else this.errorName = 0;

      if (this.form.phone === "" && this.form.email === "") {
        this.errorPhoneOrEmail = 1;
        no_error = false;
      } else this.errorPhoneOrEmail = 0;

      if (this.form.text === "") {
        this.errorText = 1;
        no_error = false;
      } else if (this.form.text.length > 300) {
        this.errorText = 2;
        no_error = false;
      } else this.errorText = 0;

      if (no_error) {
        console.log("qu");
        fetch("http://engine.neatech.ru/send_contact", {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, *cors, same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Private-Network": true,
          },
          redirect: "follow", // manual, *follow, error
          referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          body: JSON.stringify(this.form), // body data type must match "Content-Type" header
        })
          .then((response) => response.json())
          .then(() => {
            this.is_send = true;
          })
          .catch((error) => {
            console.error("Error:", error);
            return null;
          });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.textOnSend {
  .text {
    position: relative;
    top: -100px;
  }

  font-size: 30px;
  height: 720px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.form {
  display: grid;
  gap: 40px;
  grid-template-columns: auto auto;
  font-size: 25px;
  position: relative;
  left: -70px;

  .btn {
    border: 3px solid white;
    background-color: black;
    color: white;
    width: 280px;
    height: 80px;
    border-radius: 30px;

    font-size: 25px;

    position: relative;
    left: 310px;
  }

  .btn:hover {
    border: 3px solid white;
    background-color: white;
    color: black;
  }

  .label {
    text-align: right;

    .error {
      margin-left: 10px;
      margin-bottom: 1px;
      font-size: 20px;
      color: var(--color-red);
    }
  }
  .formInput {
    border: 3px solid white;
    background-color: black;
    color: white;
    border-radius: 20px;
    font-size: 25px;
    line-height: 15px;
    width: 600px;

    padding: 5px 9px 5px 30px;
  }

  .formInput:focus {
    border: 3px solid white;
    color: white;
    background-color: black;
  }

  .textarea {
    height: 200px;
    line-height: 30px;
    padding: 25px 9px 5px 30px;
  }
}

.FormHeader {
  font-size: 40px;
  margin-bottom: 100px;
}

.formContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: white;
  background-color: black;

  margin-bottom: 200px;
}

@media screen and (max-width: 768px) {
  .textOnSend {
    .text {
      top: -30px;
    }
  }
  .form {
    justify-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    left: 0;

    gap: 5px;
    width: 335px;

    .formInput {
      width: 300px;
      font-size: 22px;
    }
    .label {
      align-self: flex-start;
      margin: 10px;
      text-align: center;
      width: 100%;

      display: flex;
      flex-direction: row;
      align-items: flex-end;
      justify-content: space-between;

      .formContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        color: white;
        background-color: black;
      }

      font-size: 20px;
    }

    .error {
      margin-left: 10px;
      margin-bottom: 1px;
      font-size: 14px;
      color: var(--color-red);
    }

    .textarea {
      height: 100px;
    }

    .btn {
      margin-top: 10px;
      left: 0;
    }
  }

  .FormHeader {
    margin-bottom: 10px;
  }

  .formContainer {
    padding-bottom: 100px;
  }
}
</style>
