<script setup lang="ts">
import { loginApi } from '@/apis/auth';

definePage({
  type: 'home',
});

async function handleLogin() {
  const result = await loginApi({ email: '1', password: '10' });
  // eslint-disable-next-line no-console
  console.log('result', result.token);
}

onMounted(() => {
  handleLogin();
});
</script>

<template>
  <wd-button>主要按钮</wd-button>
</template>

<style></style>
