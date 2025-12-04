<template>
  <div>
    <label class="text-gray-700 font-semibold mb-1 block">
      {{ label }}
    </label>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    label: String
  }
};
</script>
