/**
 * TODO: temporary decision until implement webpack / vite bundle
 *
 * @return {Promise<void>}
 */
export async function importAndRegisterComposables() {
    const useFocusTrapImport = await import('./useFocusTrap.js');
    const useFocusTrap = useFocusTrapImport.default;

    window.VUE_TEMP_COMPOSABLES = {
        useFocusTrap,
    };
}
