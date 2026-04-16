<template>
    <enso-table class="box p-0"
        id="roles"
        @configure-role="configureRole"
        @write-config-file="writeConfigFile"/>
</template>

<script setup>
import { inject } from 'vue';
import { useRouter } from 'vue-router';
import { EnsoTable } from '@enso-ui/tables/bulma';

defineOptions({
    name: 'Index',
});

const router = useRouter();
const routerErrorHandler = inject('routerErrorHandler');
const toastr = inject('toastr');

const configureRole = ({ id }) => router.push({
    name: 'system.roles.configure',
    params: { role: id },
}).catch(routerErrorHandler);

const writeConfigFile = ({ message }) => toastr.success(message);
</script>
