<script setup lang="ts">
import { ref, watchEffect } from 'vue'
interface TypeMap {
  [key: string]: string
}

const props = defineProps({
  type: {
    type: String,
    requird: false,
    default: '',
  },
  bgColor: {
    type: String,
    requird: false,
    default: '#326cd6',
  },
})
// define the default state type
const typeMap = ref<TypeMap>({
  success: '#4FAD59',
  error: '#FC4D44',
  warning: '#FB8C00',
  primary: '#326cd6',
})
const indicatorColor = ref<string>('#326cd6')
watchEffect(() => {
  if (props.type)
    indicatorColor.value = typeMap.value[props.type]

  else
    indicatorColor.value = props.bgColor
})
</script>

<template>
  <span class="indicator" />
</template>

<style>
  .indicator {
    display: inline-block;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: v-bind('indicatorColor');
    animation: indicator 2s ease-in-out infinite;
  }
  @keyframes indicator {
    0%   { box-shadow: 0 0 0 0 v-bind('indicatorColor') }
    70%  { box-shadow: 0 0 0 8px rgba(216, 226, 233, 0) }
    100% { box-shadow: 0 0 0 0 rgba(216, 226, 233, 0) }
  }
</style>

