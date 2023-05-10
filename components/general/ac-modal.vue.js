import useFocusTrap from '../../composables/useFocusTrap.js'


export default {
    template: `
        <div>
            <teleport to="body">
                <div
                    @keydown.esc.prevent.stop="close"
                    role="dialog"
                    aria-modal="true"
                    :aria-labelledby="id"
                    class="fixed inset-0 overflow-y-auto"
                    :style="{zIndex: zIndex}"
                    ref="trapRef"
                >
                    <!-- Overlay -->
                    <div class="fixed inset-0 bg-black bg-opacity-50"></div>
    
                    <!-- Panel -->
                    <div @click="close" class="relative flex min-h-screen items-center justify-center p-16px">
                        <div @click.stop="" class="relative w-full max-w-2xl overflow-y-auto rounded-8px bg-white p-30px shadow-lg">
                            <div class="modal-header">
                                <slot name="title">
                                    <h2 v-if="title" class="cmsm-title" :id="id">{{title}}</h2>
                                </slot>
                            </div>
                            <div class="modal-content">
                                <slot></slot>
                            </div>
                            <div class="modal-footer box-footer flex items-center justify-space-between pt-32px">
                                <slot name="footer">
                                    <ac-modal-close-button @close="close" :type="type"></ac-modal-close-button>
                                </slot>
                            </div>
                        </div>
                    </div>
                </div>
            </teleport>
        </div>
    `,
    setup() {
        const {trapRef} = useFocusTrap();

        return {
            trapRef,
        }
    },
    props: {
        type: {
            type: String,
            required: true,
        },
        zIndex: {
            type: [String, Number],
            required: false,
            default: 10,
        },
        title: String,
    },
    data() {
        return {
            id: null
        }
    },
    methods: {
        close() {
            this.$emit('close', this.type);
        },
    },
    mounted() {
        this.id = `id-${Math.random().toString(16).slice(2)}`;
        document.documentElement.classList.add('overflow-hidden', 'pr-0');
    },
    beforeUnmount() {
        document.documentElement.classList.remove('overflow-hidden', 'pr-0')
    }
}
