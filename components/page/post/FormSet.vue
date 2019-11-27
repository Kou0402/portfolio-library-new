<template>
  <div class="form-set">
    <label class="label">
      {{ label }}
    </label>
    <input v-model="value" type="text" class="form" @input="emitInput" />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: false,
      default: ''
    },
    initialValue: {
      type: String,
      required: false,
      default: ''
    },
    name: {
      type: String,
      required: true,
      default: ''
    }
  },
  data() {
    return {
      value: ''
    }
  },
  watch: {
    initialValue() {
      this.value = this.initialValue
    }
  },
  methods: {
    setInitialValue() {
      this.value = this.initialValue
    },
    emitInput() {
      const valueSet = {
        value: this.value,
        name: this.name
      }
      this.$emit('emitedInput', valueSet)
    }
  }
}
</script>
