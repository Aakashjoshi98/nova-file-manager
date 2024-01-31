<script setup lang="ts">
import { ExclamationCircleIcon } from '@heroicons/vue/24/outline'
import { computed } from 'vue'
import Button from '@/components/Elements/Button.vue'
import ConfirmModal from '@/components/Modals/ConfirmModal.vue'

interface Props {
  name: string
  contentName: string
  type: string
  submitStatus: string
  passwordValue: string
  onConfirm: () => void
}

defineProps<Props>()

const icon = computed(() => ExclamationCircleIcon)
</script>

<template>
  <ConfirmModal
    :content="__('NovaFileManager.deleteFolderContent')"
    :icon="icon"
    :name="name"
    :title="__('NovaFileManager.deleteFolderTitle')"
    :contentName="contentName"
    :type="type"
    :passwordValue="passwordValue"
    variant="danger"
    attribute="deleteFolder"
  >
    <template v-slot:confirmButton>
      <Button :disabled="submitStatus === 'loading'" class="w-full sm:w-auto" type="submit" variant="primary" @click="onConfirm">
        <span v-if="submitStatus === 'loading'">{{ __('Deleting') }}</span>
        <span v-else>{{ __('Delete') }}</span>
      </Button>
    </template>
    <template v-slot:cancelButton="{ close }">
      <Button class="w-full sm:w-auto" type="button" variant="secondary" @click="close">
        {{ __('Cancel') }}
      </Button>
    </template>
  </ConfirmModal>
</template>
