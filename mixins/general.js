import {ModalsTypeComponentMap} from '../modules/modals.js';


export function getGeneralMixin() {
    return {
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
        }
    }
}

export function defaultInit(app) {
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
