<script>
export default {
  data() {
    return {
      userData: null,
      checkBox: false,
      liked: false,
      likedClass: "",
      updated: false,
      updatedClass: "",
      inputData: {
        inputName: null,
        inputEmail: null,
        inputPhone: null,
        inputWebsite: null,
      },
    };
  },
  components: {},
  props: {
    data: {
      type: Object,
      required: true,
    },
    userName: String,
  },
  created() {
    this.userData = this.data;
  },
  watch: {},
  methods: {
    checkbox() {
      this.checkBox = true;
      if (this.checkBox) {
        this.$emit("child-checkbox", {
          id: this.userData.id,
          isLiked: this.liked,
        });
        this.likedClass = "notLiked";
      }
    },
    getImgUrl() {
      return `https://api.dicebear.com/9.x/pixel-art/svg/${this.userName}.svg?options[mood][]=happy`;
    },
    likedUser() {
      if (this.liked) {
        this.likedClass = "notLiked";
        this.liked = false;
      } else {
        this.likedClass = "liked";
        this.liked = true;
      }
    },
    closePopUp() {
      if (this.updated) {
        this.updated = false;
        this.updatedClass = "";
      } else {
        this.updated = true;
        this.updatedClass = "visibility";
      }
    },
    updateUser() {
      this.data.name = this.$refs.inputName.value;
      this.data.email = this.$refs.inputEmail.value;
      this.data.phone = this.$refs.inputPhone.value;
      this.data.website = this.$refs.inputWebsite.value;
      this.closePopUp();
    },
  },
};
</script>

<template>
  <div id="user">
    <div class="cart">
      <div class="image">
        <img :src="getImgUrl()" alt="username" />
      </div>
      <div class="user-info">
        <h3>{{ data.name }}</h3>
        <div class="email info-body">
          <svg
            viewBox="64 64 896 896"
            class=""
            data-icon="mail"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"
            ></path>
          </svg>
          <p>{{ data.email }}</p>
        </div>
        <div class="phone info-body">
          <svg
            viewBox="64 64 896 896"
            class=""
            data-icon="phone"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M877.1 238.7L770.6 132.3c-13-13-30.4-20.3-48.8-20.3s-35.8 7.2-48.8 20.3L558.3 246.8c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l89.6 89.7a405.46 405.46 0 0 1-86.4 127.3c-36.7 36.9-79.6 66-127.2 86.6l-89.6-89.7c-13-13-30.4-20.3-48.8-20.3a68.2 68.2 0 0 0-48.8 20.3L132.3 673c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l106.4 106.4c22.2 22.2 52.8 34.9 84.2 34.9 6.5 0 12.8-.5 19.2-1.6 132.4-21.8 263.8-92.3 369.9-198.3C818 606 888.4 474.6 910.4 342.1c6.3-37.6-6.3-76.3-33.3-103.4zm-37.6 91.5c-19.5 117.9-82.9 235.5-178.4 331s-213 158.9-330.9 178.4c-14.8 2.5-30-2.5-40.8-13.2L184.9 721.9 295.7 611l119.8 120 .9.9 21.6-8a481.29 481.29 0 0 0 285.7-285.8l8-21.6-120.8-120.7 110.8-110.9 104.5 104.5c10.8 10.8 15.8 26 13.3 40.8z"
            ></path>
          </svg>
          <p>{{ data.phone }}</p>
        </div>
        <div class="site info-body">
          <svg
            viewBox="64 64 896 896"
            class=""
            data-icon="global"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M854.4 800.9c.2-.3.5-.6.7-.9C920.6 722.1 960 621.7 960 512s-39.4-210.1-104.8-288c-.2-.3-.5-.5-.7-.8-1.1-1.3-2.1-2.5-3.2-3.7-.4-.5-.8-.9-1.2-1.4l-4.1-4.7-.1-.1c-1.5-1.7-3.1-3.4-4.6-5.1l-.1-.1c-3.2-3.4-6.4-6.8-9.7-10.1l-.1-.1-4.8-4.8-.3-.3c-1.5-1.5-3-2.9-4.5-4.3-.5-.5-1-1-1.6-1.5-1-1-2-1.9-3-2.8-.3-.3-.7-.6-1-1C736.4 109.2 629.5 64 512 64s-224.4 45.2-304.3 119.2c-.3.3-.7.6-1 1-1 .9-2 1.9-3 2.9-.5.5-1 1-1.6 1.5-1.5 1.4-3 2.9-4.5 4.3l-.3.3-4.8 4.8-.1.1c-3.3 3.3-6.5 6.7-9.7 10.1l-.1.1c-1.6 1.7-3.1 3.4-4.6 5.1l-.1.1c-1.4 1.5-2.8 3.1-4.1 4.7-.4.5-.8.9-1.2 1.4-1.1 1.2-2.1 2.5-3.2 3.7-.2.3-.5.5-.7.8C103.4 301.9 64 402.3 64 512s39.4 210.1 104.8 288c.2.3.5.6.7.9l3.1 3.7c.4.5.8.9 1.2 1.4l4.1 4.7c0 .1.1.1.1.2 1.5 1.7 3 3.4 4.6 5l.1.1c3.2 3.4 6.4 6.8 9.6 10.1l.1.1c1.6 1.6 3.1 3.2 4.7 4.7l.3.3c3.3 3.3 6.7 6.5 10.1 9.6 80.1 74 187 119.2 304.5 119.2s224.4-45.2 304.3-119.2a300 300 0 0 0 10-9.6l.3-.3c1.6-1.6 3.2-3.1 4.7-4.7l.1-.1c3.3-3.3 6.5-6.7 9.6-10.1l.1-.1c1.5-1.7 3.1-3.3 4.6-5 0-.1.1-.1.1-.2 1.4-1.5 2.8-3.1 4.1-4.7.4-.5.8-.9 1.2-1.4a99 99 0 0 0 3.3-3.7zm4.1-142.6c-13.8 32.6-32 62.8-54.2 90.2a444.07 444.07 0 0 0-81.5-55.9c11.6-46.9 18.8-98.4 20.7-152.6H887c-3 40.9-12.6 80.6-28.5 118.3zM887 484H743.5c-1.9-54.2-9.1-105.7-20.7-152.6 29.3-15.6 56.6-34.4 81.5-55.9A373.86 373.86 0 0 1 887 484zM658.3 165.5c39.7 16.8 75.8 40 107.6 69.2a394.72 394.72 0 0 1-59.4 41.8c-15.7-45-35.8-84.1-59.2-115.4 3.7 1.4 7.4 2.9 11 4.4zm-90.6 700.6c-9.2 7.2-18.4 12.7-27.7 16.4V697a389.1 389.1 0 0 1 115.7 26.2c-8.3 24.6-17.9 47.3-29 67.8-17.4 32.4-37.8 58.3-59 75.1zm59-633.1c11 20.6 20.7 43.3 29 67.8A389.1 389.1 0 0 1 540 327V141.6c9.2 3.7 18.5 9.1 27.7 16.4 21.2 16.7 41.6 42.6 59 75zM540 640.9V540h147.5c-1.6 44.2-7.1 87.1-16.3 127.8l-.3 1.2A445.02 445.02 0 0 0 540 640.9zm0-156.9V383.1c45.8-2.8 89.8-12.5 130.9-28.1l.3 1.2c9.2 40.7 14.7 83.5 16.3 127.8H540zm-56 56v100.9c-45.8 2.8-89.8 12.5-130.9 28.1l-.3-1.2c-9.2-40.7-14.7-83.5-16.3-127.8H484zm-147.5-56c1.6-44.2 7.1-87.1 16.3-127.8l.3-1.2c41.1 15.6 85 25.3 130.9 28.1V484H336.5zM484 697v185.4c-9.2-3.7-18.5-9.1-27.7-16.4-21.2-16.7-41.7-42.7-59.1-75.1-11-20.6-20.7-43.3-29-67.8 37.2-14.6 75.9-23.3 115.8-26.1zm0-370a389.1 389.1 0 0 1-115.7-26.2c8.3-24.6 17.9-47.3 29-67.8 17.4-32.4 37.8-58.4 59.1-75.1 9.2-7.2 18.4-12.7 27.7-16.4V327zM365.7 165.5c3.7-1.5 7.3-3 11-4.4-23.4 31.3-43.5 70.4-59.2 115.4-21-12-40.9-26-59.4-41.8 31.8-29.2 67.9-52.4 107.6-69.2zM165.5 365.7c13.8-32.6 32-62.8 54.2-90.2 24.9 21.5 52.2 40.3 81.5 55.9-11.6 46.9-18.8 98.4-20.7 152.6H137c3-40.9 12.6-80.6 28.5-118.3zM137 540h143.5c1.9 54.2 9.1 105.7 20.7 152.6a444.07 444.07 0 0 0-81.5 55.9A373.86 373.86 0 0 1 137 540zm228.7 318.5c-39.7-16.8-75.8-40-107.6-69.2 18.5-15.8 38.4-29.7 59.4-41.8 15.7 45 35.8 84.1 59.2 115.4-3.7-1.4-7.4-2.9-11-4.4zm292.6 0c-3.7 1.5-7.3 3-11 4.4 23.4-31.3 43.5-70.4 59.2-115.4 21 12 40.9 26 59.4 41.8a373.81 373.81 0 0 1-107.6 69.2z"
            ></path>
          </svg>
          <p>{{ data.website }}</p>
        </div>
      </div>
      <div class="buttons">
        <ul>
          <li>
            <svg
              @click="likedUser"
              :class="likedClass"
              viewBox="64 64 896 896"
              class=""
              data-icon="heart"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
              id="like"
            >
              <path
                d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"
              ></path>
            </svg>
          </li>
          <li id="li-border">
            <svg
              @click="closePopUp"
              viewBox="64 64 896 896"
              data-icon="edit"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"
              ></path>
            </svg>
          </li>
          <li>
            <svg
              @click="checkbox"
              viewBox="64 64 896 896"
              class=""
              data-icon="delete"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z"
              ></path>
            </svg>
          </li>
        </ul>
      </div>
    </div>
    <div class="hidden-cart" :class="updatedClass">
      <div class="header">
        <h4>Basic Modal</h4>
        <svg
          @click="closePopUp"
          viewBox="64 64 896 896"
          class=""
          data-icon="close"
          width="1em"
          height="1em"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"
          ></path>
        </svg>
      </div>
      <form action="#" name="updateForm">
        <div class="name input">
          <label for="name">Name</label>
          <input
            required
            name="name"
            minlength="2"
            maxlength="20"
            :value="data.name"
            :v-model="inputData.inputName"
            ref="inputName"
          />
        </div>
        <div class="email input">
          <label for="email">Email</label>
          <input
            name="email"
            type="email"
            required
            :value="data.email"
            :v-model="inputData.inputEmail"
            ref="inputEmail"
          />
        </div>
        <div class="phone input">
          <label for="phone">Phone</label>
          <input
            type="tel"
            name="phone"
            required
            :value="data.phone"
            id="phone"
            :v-model="inputData.inputPhone"
            ref="inputPhone"
          />
        </div>
        <div class="website input">
          <label for="website">Website</label>
          <input
            required
            name="website"
            :value="data.website"
            :v-model="inputData.inputWebsite"
            ref="inputWebsite"
          />
        </div>
        <div class="buttons">
          <button type="button" class="cancel" @click="closePopUp">
            Cancel
          </button>
          <button type="button" class="ok" @click="updateUser()">Ok</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
#user {
  .cart {
    border-radius: 5px;
    height: 404.636px;
    // max-width: 338.656px;
    margin: 15px;
    border: 1px solid #e8e8e8;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    .image {
      background-color: #f5f5f5;
      cursor: pointer;

      img {
        width: 200px;
        height: 200px;
      }
    }
    .user-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      padding: 24px;

      h3 {
        margin-top: 0;
        cursor: pointer;
        margin-bottom: 0.5em;
        color: rgba(0, 0, 0, 0.85);
        font-weight: 500;
        font-size: 1.17em;
        margin-bottom: 8.19px;
      }

      .info-body {
        display: flex;
        svg {
          color: rgba(0, 0, 0, 0.65);
          width: 18px;
          height: 18px;
          cursor: pointer;
          cursor: pointer;
        }
        p {
          margin: 0 0 5px 10px;
          // color: rgba(0, 0, 0, 0.65);
          font-size: 14px;
          line-height: 21px;
        }
      }
    }

    .buttons {
      ul {
        display: flex;
        justify-content: space-around;
        align-items: center;
        background: #fafafa;
        border-top: 1px solid #e8e8e8;

        li {
          flex: 1;
          margin: 12px 0px;
          // color: rgba(0, 0, 0, 0.45);
          svg {
            cursor: pointer;
            font-size: 18px;
          }
          svg#like {
            fill: red;
            color: red;
          }
          svg.liked {
            background-color: red;
            border-radius: 50%;
            padding: 0.4rem;
            transition: 1s background-color, 1s padding, 1s color;
          }
          svg.notLiked {
            background-color: white;
            border-radius: 50%;
            transition: 1s background-color, 1s padding, 1s color;
          }
          svg:hover {
            fill: blue;
          }
          svg:active {
            fill: red;
          }
        }

        li#li-border {
          border-left: 1px solid rgb(232, 232, 232);
          border-right: 1px solid rgb(232, 232, 232);
        }
      }
    }
  }

  .hidden-cart {
    display: none;
    visibility: hidden;
    position: absolute;
    z-index: 1;
    margin: auto;
    // left: calc(50vw - 100px);
    // top: calc(50vh - 100px);
  }

  .visibility {
    visibility: visible;
    position: fixed;
    top: 20vh;
    left: 30vw;
    right: 30vw;
    z-index: 1;
    margin: 0 auto;
    border-color: #000;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
    transform-origin: 57.7778px 297.778px;
    box-sizing: border-box;
    line-height: 1.5;
    list-style: none;
    font-feature-settings: "tnum", "tnum";
    padding: 0 0 24px;
    padding-bottom: 24px;

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
      border-bottom: 1px solid;
      border-radius: 4px 4px 0 0;
      border-bottom: 1px solid #e8e8e8;
      h4 {
        font-weight: 500;
        font-size: 1rem;
        color: rgba(0, 0, 0, 0.85);
        line-height: 22px;
      }
      svg {
        cursor: pointer;
      }
    }
    form {
      padding: 24px;
      display: flex;
      flex-direction: column;
      border-bottom: 1px solid #e8e8e8;
      // align-items: center;
      // justify-content: space-around;
      div.input {
        margin-bottom: 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        label {
          margin-left: 1rem;
          width: 10rem;
          color: rgba(0, 0, 0, 0.85);
          font-size: 14px;
        }
        input {
          box-sizing: border-box;
          margin: 0;
          font-variant: tabular-nums;
          font-variant-ligatures: normal;
          font-variant-caps: normal;
          font-variant-numeric: tabular-nums;
          font-variant-east-asian: normal;
          list-style: none;
          -webkit-font-feature-settings: "tnum";
          font-feature-settings: "tnum", "tnum";
          position: relative;
          display: inline-block;
          width: 100%;
          height: 32px;
          padding: 4px 11px;
          color: rgba(0, 0, 0, 0.65);
          font-size: 14px;
          line-height: 1.5;
          background-color: #fff;
          background-image: none;
          border: 1px solid #d9d9d9;
          border-radius: 4px;
          transition: all 0.3s;
        }
      }
      .buttons {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        button.cancel {
          line-height: 1.499;
          position: relative;
          display: inline-block;
          font-weight: 400;
          white-space: nowrap;
          text-align: center;
          background-image: none;
          box-shadow: 0 2px 0 rgb(0 0 0 / 2%);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
          user-select: none;
          touch-action: manipulation;
          height: 32px;
          padding: 0 15px;
          font-size: 14px;
          border-radius: 4px;
          color: rgba(0, 0, 0, 0.65);
          background-color: #fff;
          border: 1px solid #d9d9d9;
        }
        .cancel:hover {
          color: #1890ff;
          border-color: #1890ff;
        }
        button.ok {
          background-color: #1890ff;
          margin-left: 8px;
          line-height: 1.499;
          position: relative;
          display: inline-block;
          font-weight: 400;
          white-space: nowrap;
          text-align: center;
          background-image: none;
          box-shadow: 0 2px 0 rgb(0 0 0 / 2%);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
          user-select: none;
          touch-action: manipulation;
          height: 32px;
          padding: 0 15px;
          font-size: 14px;
          border-radius: 4px;
          color: #fff;
          border: 1px solid #d9d9d9;
        }
      }
    }
  }
}
</style>