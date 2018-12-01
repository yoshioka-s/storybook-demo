import Vue from 'vue'

import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'

import MyButton from '../components/atoms/MyButton.vue'

storiesOf('atoms/MyButton', module)
  .addDecorator(VueInfoAddon)
  .add('type: info', () => ({
    components: { MyButton },
    template: '<my-button type="info">info</my-button>'
  }))
  .add('type: danger', () => ({
    components: { MyButton },
    template: '<my-button type="danger">Danger</my-button>'
  }))
  .add('rouded: true', () => ({
    components: { MyButton },
    template: '<my-button :rounded="true">rounded</my-button>'
  }))
  .add('shadow: false', () => ({
    components: { MyButton },
    template: '<my-button :shadow="false">without shadow</my-button>'
  }))
