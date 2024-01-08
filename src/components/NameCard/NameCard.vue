<template>
  <div>
    <span>hello world</span>
  </div>
</template>

<script>

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    displayPrefix: {
      type: Boolean,
      default: false,
    },
    gender: {
      type: String,
      required: false,
      default: null,
    },
  },
};
</script>
