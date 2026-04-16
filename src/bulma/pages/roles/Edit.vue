<template>
    <div class="columns is-centered">
        <div class="column is-three-quarters-desktop is-full-touch">
            <enso-form class="box"
                @ready="handleReady"
                ref="form">
                <template #actions-left
                    v-if="ready">
                     <action tag="a"
                        :button="{
                            class: 'is-dark',
                            icon: faSliders,
                            label: 'Configure',
                        }"
                        @click="configure"/>
                     <action tag="a"
                        :button="{
                            class: 'is-dark',
                            icon: faFloppyDisk,
                            label: 'File',
                        }"
                        @click="writeConfig"/>
                </template>
            </enso-form>
        </div>
    </div>
</template>

<script setup>
import { inject, ref } from 'vue';
import { useRouter } from 'vue-router';
import { faFloppyDisk, faSliders } from '@fortawesome/free-solid-svg-icons';
import { EnsoForm, Action } from '@enso-ui/forms/bulma';

const errorHandler = inject('errorHandler');
const http = inject('http');
const i18n = inject('i18n');
const route = inject('route');
const routerErrorHandler = inject('routerErrorHandler');
const toastr = inject('toastr');

const router = useRouter();
const form = ref(null);
const ready = ref(false);

const handleReady = () => {
    ready.value = true;
};

const configure = () => router.push({
    name: 'system.roles.configure',
    params: { role: form.value.routeParam('role') },
}).catch(routerErrorHandler);

const writeConfig = () => {
    http.post(route(
        'system.roles.permissions.write',
        form.value.routeParam('role'),
    )).then(({ data }) => toastr.success(data.message))
        .catch(errorHandler);
};
</script>
