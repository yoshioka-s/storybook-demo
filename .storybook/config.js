import { configure } from '@storybook/vue'

import Vue from 'vue'
import Vuex from 'vuex' // Vue plugins

// Import your custom components.
import MyButton from '../components/MyButton.vue'

// Install Vue plugins.
Vue.use(Vuex)

// Register custom components.
Vue.component('my-button', MyButton)

function loadStories() {
  // You can require as many stories as you need.
  require('../stories')
}

configure(loadStories, module)