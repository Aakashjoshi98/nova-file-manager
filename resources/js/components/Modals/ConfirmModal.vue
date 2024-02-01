<script setup lang="ts">
import { DialogPanel, DialogTitle } from '@headlessui/vue'
import { Component, computed } from 'vue'
import { watchEffect, ref, getCurrentInstance } from 'vue'
import { useErrors } from '@/hooks'
import BaseModal from './BaseModal.vue'

const variants = {
  danger: {
    iconBackground: 'bg-red-100 dark:bg-red-800/30',
    iconColor: 'text-red-600 dark:text-red-500',
  },
}
const instance = getCurrentInstance()
interface Props {
  name: string
  attribute: string
  title: string
  content: string
  icon: Component
  variant: keyof typeof variants
  contentName: string
  type: string
  passwordValue: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'danger',
})

const localPasswordValue = ref(props.passwordValue)

watchEffect(() => {
  instance.emit('updatePasswordValue', localPasswordValue.value)
})
const { invalid, errors } = useErrors(props.attribute)
// const passwordValue = ref('') // New ref for password
// STATE
const iconColorClass = computed(() => (props.variant ? variants[props.variant].iconColor : ''))
const iconBackgroundClass = computed(() => (props.variant ? variants[props.variant].iconBackground : ''))
</script>

<template>
  <BaseModal as="template" class="nova-file-manager" :name="name" v-slot="{ close }">
    <DialogPanel
      class="relative bg-gray-100 dark:bg-gray-900 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full sm:p-6"
    >
      <div class="sm:flex sm:items-start">
        <div
          :class="`${iconBackgroundClass} mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full sm:mx-0 sm:h-10 sm:w-10`"
        >
          <component :is="icon" :class="`${iconColorClass} h-6 w-6`" aria-hidden="true" />
        </div>
        <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
          <DialogTitle
            as="h1"
            class="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100"
            v-if="type == 'folder'"
          >
            {{ __('Remove folder') }}: {{ contentName }}
          </DialogTitle>
          <DialogTitle as="h1" class="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100" v-else>
            {{ __('Remove File') }}: {{ contentName }}
          </DialogTitle>
          <DialogTitle as="h3" class="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
            {{ title }}
          </DialogTitle>
          <div class="mt-2">
            <p class="text-sm text-gray-500 dark:text-gray-400">
              {{ content }}
            </p>
          </div>
          <!-- Password Input -->
          <div
            :class="[
              'mt-2 w-full border rounded-md space-y-2 px-3 py-2 bg-gray-100 dark:bg-gray-900 shadow-sm focus-within:ring-1 focus-within:ring-blue-600 focus-within:border-blue-600',
              !invalid ? 'border-gray-400 dark:border-gray-700' : 'border-red-400 dark:border-red-700',
            ]"
          >
            <label class="block text-xs font-medium text-gray-700 dark:text-gray-200" for="password">
              {{ __('Password') }}
            </label>
            <input
              id="password"
              v-model="localPasswordValue"
              :placeholder="__('Type your password here')"
              class="block w-full border-0 p-0 bg-gray-100 dark:bg-gray-900 placeholder-gray-400 sm:text-sm text-black dark:text-white focus:outline-none focus:ring-0"
              name="password"
              autocomplete="current-password"
              type="password"
            />
          </div>
          <template v-if="invalid">
            <p v-for="(error, index) in errors" :key="`confirm_modal_error_${index}`" class="mt-2 text-sm text-red-600">
              {{ error }}
            </p>
          </template>
        </div>
      </div>
      <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse sm:gap-x-2 space-y-3 sm:space-y-0">
        <slot name="confirmButton" />
        <slot name="cancelButton" :close="close" />
      </div>
    </DialogPanel>
  </BaseModal>
</template>
