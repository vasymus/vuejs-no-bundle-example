export default {
    template: `
        <div>
            <select ref="select" :name="name || id" :id="id" @input="$emit('update:modelValue', $event.target.value)">
                <option
                    v-for="option in options"
                    :key="option.value"
                    :value="option.value"
                    :selected="isSelected(option)"
                >{{ option.label }}</option>
            </select>
        </div>
    `,
    props: {
        options: {
            type: Array,
            default: [],
            validator(value = []) {
                return value.every(item => typeof item.label !== 'undefined' && typeof item.value !== 'undefined');
            },
            required: true,
        },
        id: {
            type: String,
            required: false,
        },
        name: {
            type: String,
            required: false,
        },
        modelValue: {
            type: [String, Number],
            required: false,
            default: '',
        },
    },
    emits: ['update:modelValue'],
    methods: {
        isSelected(option) {
            return `${option.value}` === `${this.modelValue}`;
        },
        bootSelect() {
            jQuery(this.$refs.select).selectmenu();
        },
        refreshSelect() {
            jQuery(this.$refs.select).selectmenu('destroy');
            this.bootSelect();
        }
    },
    watch: {
        options() {
            this.$nextTick(() => {
                this.refreshSelect();
            });
        },
        modelValue() {
            this.$nextTick(() => {
                this.refreshSelect();
            });
        }
    },
    mounted() {
        this.bootSelect();

        jQuery(this.$refs.select).on('selectmenuchange', event => {
            let selectedIndex = event.target.selectedIndex;
            let options = this.options;

            this.$emit('update:modelValue', options[selectedIndex]?.value || '');
        })
    },
    beforeUnmount() {
        jQuery(this.$refs.select).selectmenu('close').selectmenu('destroy');
    },
}
