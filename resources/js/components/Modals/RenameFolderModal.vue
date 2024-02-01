<script setup lang="ts">
import axios from 'axios'
import { onMounted, ref } from 'vue'
import Button from '@/components/Elements/Button.vue'
import InputModal from '@/components/Modals/InputModal.vue'
import { OPERATIONS } from '@/constants'
import { useErrors } from '@/hooks'

interface Props {
  name: string
  onSubmit: (value: string) => void
  from: string
  loading?: boolean
}

const props = defineProps<Props>()

const { invalid, errors } = useErrors(OPERATIONS.RENAME_FOLDER)

// STATE
let nameValue = ref(null as string | null) // Rename value to nameValue for folder name
let passwordValue = ref('') // New ref for password
let submitStatus = ref('idle')
// HOOKS
onMounted(() => (nameValue.value = props.from))
const clearPassword = () => {
  passwordValue.value = '' // Clear the password field
}
// ACTIONS
const submit = () => {
  submitStatus.value = 'loading'
  if (!passwordValue.value.trim()) {
    Nova.error('Please enter a password.', { type: 'error' })
    submitStatus.value = 'error'
    return
  }
  if (nameValue.value && passwordValue.value) {
    let data = {}
    data.password = passwordValue.value
    if (nameValue.value.length == 0) {
      Nova.error('Name is requied', { type: 'error' })
      submitStatus.value = 'error'
      return false
    }
    axios.post('/nova-vendor/nova-file-manager/validatePassword', data).then(response => {
      if (response.data == true) {
        submitStatus.value = 'success'
        props.onSubmit(nameValue.value)
      } else {
        submitStatus.value = 'error'
        Nova.error('Your password is incorrect. Please enter valid password', { type: 'error' })
      }
    })
  }
}
</script>

<template>
  <InputModal :name="name" :on-submit="submit" :title="__('NovaFileManager.renameFolderTitle')" @close="clearPassword">
    <template v-slot:inputs>
      <div>
        <!-- Folder Name Input -->
        <div
          :class="[
            'mb-6 w-full border rounded-md space-y-2 px-3 py-2 bg-gray-100 dark:bg-gray-900 shadow-sm focus-within:ring-1 focus-within:ring-blue-600 focus-within:border-blue-600',
            !invalid ? 'border-gray-400 dark:border-gray-700' : 'border-red-400 dark:border-red-700',
          ]"
        >
          <label class="block text-xs font-medium text-gray-700 dark:text-gray-200" for="name">
            {{ __('Folder Name') }}
          </label>
          <input
            id="name"
            v-model="nameValue"
            :placeholder="__('Type your folder name here')"
            class="block w-full border-0 p-0 bg-gray-100 dark:bg-gray-900 placeholder-gray-400 sm:text-sm text-black dark:text-white focus:outline-none focus:ring-0"
            name="name"
            type="text"
            autocomplete="folder-name"
          />
        </div>

        <!-- Password Input -->
        <div
          :class="[
            'w-full border rounded-md space-y-2 px-3 py-2 bg-gray-100 dark:bg-gray-900 shadow-sm focus-within:ring-1 focus-within:ring-blue-600 focus-within:border-blue-600',
            !invalid ? 'border-gray-400 dark:border-gray-700' : 'border-red-400 dark:border-red-700',
          ]"
        >
          <label class="block text-xs font-medium text-gray-700 dark:text-gray-200" for="password">
            {{ __('Password') }}
          </label>
          <input
            id="password"
            v-model="passwordValue"
            :placeholder="__('Type your password here')"
            class="block w-full border-0 p-0 bg-gray-100 dark:bg-gray-900 placeholder-gray-400 sm:text-sm text-black dark:text-white focus:outline-none focus:ring-0"
            name="password"
            autocomplete="current-password"
            type="password"
          />
        </div>

        <!-- Display validation errors for both inputs -->
        <template v-if="invalid">
          <!-- Errors for Folder Name -->
          <ul
            v-for="(field, index) in errors"
            :key="`rename_folder_modal_field_${index}`"
            class="mt-2 text-sm text-red-600"
          >
            <li v-for="(error, errorIndex) in field" :key="`rename_folder_modal_field_${index}_error_${errorIndex}`">
              {{ error }}
            </li>
          </ul>

          <!-- Errors for Password -->
          <ul class="mt-2 text-sm text-red-600">
            <li v-if="!passwordValue">Please enter a password.</li>
          </ul>
        </template>
      </div>
    </template>

    <template v-slot:submitButton>
      <Button :disabled="submitStatus === 'loading'" class="w-full sm:w-auto" type="submit" variant="primary">
        <span v-if="submitStatus === 'loading'">{{ __('Renaming') }}</span>
        <span v-else>{{ __('Rename') }}</span>
      </Button>
    </template>
    <template v-slot:cancelButton="{ close }">
      <Button class="w-full sm:w-auto" type="button" variant="secondary" @click="close">
        {{ __('Cancel') }}
      </Button>
    </template>
  </InputModal>
</template>
