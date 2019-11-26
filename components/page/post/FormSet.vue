<template>
  <div class="form-set">
    <label class="label">
      {{ label }}
    </label>
    <input
      v-model="value"
      type="text"
      :name="name"
      class="form"
      @input="onChangeInput"
    />
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    initialValue: {
      type: String,
      required: false,
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
    onChangeInput() {
      this.commitChange(this.value)
    },
    commitChange(value) {
      this.$emit('input', value)
    }
  }
}
</script>
