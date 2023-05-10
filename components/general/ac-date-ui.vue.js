export default {
    template: `
        <div>
            <input 
                ref="date"
                type="text"
                :name="name || id"
                :id="id"
                :value="modelValue"
                @input="$emit('update:modelValue', $event.target.value)"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
        </div>
    `,
    props: {
        modelValue: {
            type: [String],
            required: false,
            default: '',
        },
        id: {
            type: String,
            required: false,
        },
        name: {
            type: String,
            required: false,
        },
    },
    emits: ['update:modelValue'],

    mounted() {
        jQuery(this.$refs.date).wrap('<div class="date-wrapper"></div>');
        jQuery('<span class="date-clear">')
            .click(() => {
                jQuery(this.$refs.date)
                    .val('')
                    .change();
            })
            .insertAfter(jQuery(this.$refs.date));

        jQuery(this.$refs.date)
            .attr('readonly', 'readonly')
            .datepicker({
                dateFormat: 'yy-mm-dd',
                changeMonth: true,
                changeYear: true,
            });

        jQuery(this.$refs.date).on('change', (event) => {
            this.$emit('update:modelValue', event.target.value || '');
        });
    },
    beforeUnmount() {
        jQuery(this.$refs.date).datepicker('hide').datepicker('destroy');
    },
    watch: {
        modelValue(value) {
            this.$nextTick(() => {
                jQuery(this.$refs.date).datepicker('setDate', value);
            });
        }
    },
}
