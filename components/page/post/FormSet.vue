<template>
  <div class="form-set">
    <label class="label">
      {{ label }}
    </label>
    <input
      v-model="input"
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
    }
  },
  data() {
    return {
      input: ''
    }
  },
  methods: {
    onChangeInput() {
      this.commitChange(this.input)
    },
    commitChange(input) {
      this.$emit('input', input)
    }
  }
}
</script>
