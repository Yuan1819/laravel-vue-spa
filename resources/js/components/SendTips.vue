<template>
  <div class="tips">
    <div class="">
      <div class="btn md primary" @click="showModal">
        Send Me The Tips
      </div>
      <Modals v-if='modals' @close="showModal">
        <div slot='body'>
          <div class="body__step">
            <span>Step 1 of 2</span>
            <div class="body__step--divider">
              <!-- <div class="divider__step"></div> -->
              <div class="divider__step--half"></div>
            </div>
          </div>
          <h3>
            Enter Your Email To Get <span style="color:green;font-weight:bold;">FREE</span> <br>
            iPhone Photography Email Tips:
          </h3>
          <div class="body__email">
            <div class="group">
              <input type="text" name="email" v-model="email" :class="{'text--warning': errors.length, 'border--warning': errors.length}" required>
              <span class="highlight"></span>
              <span class="bar"></span>
              <label v-if="!errors.length">Please enter your email here</label>
              <label class="text--warning" v-if="errors.length" v-for="(error, i) in errors" :key="i">{{ error }}</label>
            </div>
          </div>
          <input class="btn md primary" v-if="!showLoader" type="submit" @click="submitForm" value="Send Me The Tips »" />
          <div class="loader" v-if="showLoader">
            <svg id="loader-1" x="0px" y="0px"
               width="40px" height="40px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
            <path fill="#000" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">
              <animateTransform attributeType="xml"
                attributeName="transform"
                type="rotate"
                from="0 25 25"
                to="360 25 25"
                dur="0.6s"
                repeatCount="indefinite"/>
              </path>
            </svg>
          </div>
        </div>
      </Modals>
    </div>
  </div>
</template>

<script>
import Modals from './Modals'

export default {
  components: {
    Modals
  },
  data() {
    return {
      modals: false,
      showLoader: false,
      errors: [],
      email: null
    }
  },
  methods: {
  	showModal() {
			this.modals = !this.modals
    },
    submitForm(e) {
      this.errors = [];

      if (!this.email) {
        this.errors.push('Please enter a valid email address.');
      } else if (!this.validEmail(this.email)) {
        this.errors.push('Please enter a valid email address.');
      } else {
        this.showLoader = true
        this.postData()
      }

      if (!this.errors.length) {
        return true;
      }

      e.preventDefault();
    },
    validEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    postData() {
      setTimeout(() => {
        this.modals = false
        this.showLoader = false
        this.email = null
      }, 2000);
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
