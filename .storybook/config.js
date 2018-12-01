import { configure } from '@storybook/vue'

import Vue from 'vue'
import Vuex from 'vuex' // Vue plugins

// Install Vue plugins.
Vue.use(Vuex)

function loadStories() {
  // You can require as many stories as you need.
  require('../stories')
}

configure(loadStories, module)