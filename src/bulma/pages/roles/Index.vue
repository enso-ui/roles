<template>
    <enso-table class="box p-0"
        id="roles"
        @configure-role="$router.push({
            name: 'system.roles.configure',
            params: { role: $event.id },
        }).catch(routerErrorHandler)"
        @write-config-file="toastr.success($event.message)"/>
</template>

<script>
import { EnsoTable } from '@enso-ui/tables/bulma';

export default {
    name: 'Index',

    components: { EnsoTable },

    inject: ['routerErrorHandler', 'toastr'],
};
</script>
