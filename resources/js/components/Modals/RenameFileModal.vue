<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Button from '@/components/Elements/Button.vue'
import InputModal from '@/components/Modals/InputModal.vue'
import { OPERATIONS } from '@/constants'
import { useErrors } from '@/hooks'
import axios from 'axios'

interface Props {
  name: string
  onSubmit: (value: string) => void
  from: string
}

const props = defineProps<Props>()

const { invalid, errors } = useErrors(OPERATIONS.RENAME_FILE)

// STATE
const nameValue = ref(null as string | null | undefined)
const passwordValue = ref('') // New ref for password
// HOOKS
onMounted(() => (nameValue.value = props.from))

// ACTIONS
const submit = () => {
  if (nameValue.value && passwordValue.value) {
    let data = {};
    data.password = passwordValue.value;
    
    axios.post('/nova-vendor/nova-file-manager/validatePassword', data).then((response) => {
        if(response.data == true){
          props.onSubmit(nameValue.value)          
        } else {
          Nova.error("Your password is incorrect. Please enter valid password", {type: 'error',})
        }
    });
    
  }
}
</script>

<template>
  <InputModal :name="name" :on-submit="submit" :title="__('NovaFileManager.renameFileTitle')">
    <template v-slot:inputs>
      <div>
        <div
          :class="[
            'mb-6 w-full border rounded-md space-y-2 px-3 py-2 bg-gray-100 dark:bg-gray-900 shadow-sm focus-within:ring-1 focus-within:ring-blue-600 focus-within:border-blue-600',
            !invalid ? 'border-gray-400 dark:border-gray-700' : 'border-red-400 dark:border-red-700',
          ]"
        >
          <label class="block text-xs font-medium text-gray-700 dark:text-gray-200" for="name">
            {{ __('Name') }}
          </label>
          <input
            id="name"
            v-model="nameValue"
            :placeholder="__('Name')"
            class="block w-full border-0 p-0 bg-gray-100 dark:bg-gray-900 placeholder-gray-400 sm:text-sm text-black dark:text-white focus:outline-none focus:ring-0"
            name="name"
            type="text"
            autocomplete="file-name"
          />
        </div>
        <div
          :class="[
            'w-full border rounded-md space-y-2 px-3 py-2 bg-gray-100 dark:bg-gray-900 shadow-sm focus-within:ring-1 focus-within:ring-blue-600 focus-within:border-blue-600',
            !invalid ? 'border-gray-400 dark:border-gray-700' : 'border-red-400 dark:border-red-700',
          ]"
        >
          <label class="block text-xs font-medium text-gray-700 dark:text-gray-200" for="name">
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
        <template v-if="invalid">
          <p
            v-for="(error, index) in errors"
            :key="`rename_file_modal_error_${index}`"
            class="mt-2 text-sm text-red-600"
          >
            {{ error }}
          </p>
          <ul class="mt-2 text-sm text-red-600">
            <li v-if="!passwordValue">Please enter a password.</li>
          </ul>
        </template>
      </div>
    </template>
    <template v-slot:submitButton>
      <Button :disabled="value === from" class="w-full sm:w-auto" type="submit" variant="primary">
        {{ __('Submit') }}
      </Button>
    </template>
    <template v-slot:cancelButton="{ close }">
      <Button class="w-full sm:w-auto" type="button" variant="secondary" @click="close">
        {{ __('Cancel') }}
      </Button>
    </template>
  </InputModal>
</template>
