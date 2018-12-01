<template>
  <button :class="classes"><slot /></button>
</template>

<script>
export default {
  name: 'MyButton',
  props: {
    type: {
      type: String,
      default: 'info'
    },
    rounded: {
      type: Boolean,
      default: false
    },
    shadow: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    classes () {
      const classes = {
        'my-button': true,
        rounded: this.rounded,
        shadow: this.shadow
      }
      classes[this.type] = true
      return classes
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/variables";

.my-button {
  font-size: $button-font-size;
  text-align: center;
  height: auto;
  display: inline-block;
  padding: 15px 0;
  text-decoration: none;
  color: #FFFFFF;
  border-radius: 7px;
  transition: all .4s ease;
  width: 270px;
  border-bottom: solid 4px;
  cursor: pointer;
  &:hover {
    transition: all .4s ease;
  }

  &.danger {
    background-color: $warning-color;
    border-color: $warning-color;
    &:hover {
      background: $warning-hover-color;
      border-color: $warning-hover-color;
    }
  }

  &.info {
    background-color: $info-color;
    border-color: $info-color;
    &:hover {
      background: $info-hover-color;
      border-color: $info-hover-color;
    }
  }

  &.rounded {
    border-radius: 23px;
  }

  &.shadow {
    &:hover {
      padding: 17px 0 13px;
    }
    &.danger {
      border-bottom-color: $warning-shadow-color;
      &:hover {
        border-bottom-color: $warning-hover-color;
      }
    }
    &.info {
      border-bottom-color: $info-shadow-color;
      &:hover {
        border-bottom-color: $info-hover-color;
      }
    }
  }
}
</style>
