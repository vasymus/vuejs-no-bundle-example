export async function getGeneralMixin() {
    const {ModalsTypeComponentMap} = await import('../modules/modals.js');
    const {getCaseSensitiveInnerHtml} = await import('../utils.js');

    return {
        template: getCaseSensitiveInnerHtml(document.getElementById('app')),
        data() {
            return {
                _modalTypes: {},
            }
        },
        computed: {
            modalTypes() {
                return Object.values(this._modalTypes);
            }
        },
        methods: {
            openModal(modalType, props = {}) {
                this._modalTypes[modalType] = {
                    type: modalType,
                    props,
                };
            },
            closeModal(modalType) {
                delete this._modalTypes[modalType];
            },
            getModalComponent(modalType) {
                if (typeof ModalsTypeComponentMap[modalType] === 'undefined') {
                    return null;
                }

                return ModalsTypeComponentMap[modalType];
            },
        },
        async mounted() {
            await importNotVueJsLocalScripts();
        }
    }
}

export async function defaultInit(app) {
    const {importAndRegisterComposables} = await import('../composables/utils.js');

    await importAndRegisterComposables();

    registerGlobalComponents(app);
    registerModalsComponents(app);
}

export function registerGlobalComponents(app) {
    app.component(
        'ac-select-ui',
        Vue.defineAsyncComponent(() => import('../components/general/ac-select-ui.vue.js'))
    );
    app.component(
        'ac-date-ui',
        Vue.defineAsyncComponent(() => import('../components/general/ac-date-ui.vue.js'))
    );
    app.component(
        'ac-modal',
        Vue.defineAsyncComponent(() => import('../components/general/ac-modal.vue.js'))
    );
    app.component(
        'ac-modal-close-button',
        Vue.defineAsyncComponent(() => import('../components/general/ac-modal-close-button.vue.js'))
    );
}

export function registerModalsComponents(app) {
    app.component(
        'modal-test',
        Vue.defineAsyncComponent(() => import('../components/modals/modal-test.vue.js'))
    );
}
