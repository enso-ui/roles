import { describe, expect, it, vi } from 'vitest';

vi.mock('@enso-ui/enums/src/pinia/enums', () => ({
    enums: () => ({
        enums: {
            permissionTypes: {
                Read: 1,
            },
        },
    }),
}));

vi.mock('@enso-ui/checkbox/bulma', () => ({
    CheckboxManager: {},
}));

vi.mock('@enso-ui/transitions', () => ({
    Fade: {},
}));

import Configure from '../src/bulma/pages/roles/Configure.vue';

describe('Configure', () => {
    it('uses enum store directly', () => {
        expect(Configure.computed.enums.call({}).permissionTypes.Read).toBe(1);
    });
});
