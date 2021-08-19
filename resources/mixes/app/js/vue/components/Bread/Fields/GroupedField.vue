<i18n>
{
    "he": {
        "Add": "הוספת",
        "Reorder": "סידור"
    }
}
</i18n>
<template>
    <div class="form-row grouped">
        <!-- Loop fields -->
        <div v-for="(field, fi) in fields" :key="field.id+fi"
             class="field p-4 form-group" :class="field.width">
            <!-- Repeatable field -->
            <template v-if="field.repeats > 1">
                <draggable
                    :list="field_value[field.name]"
                    ghost-class="ghost"
                    handle=".dnd-handler"
                >
                    <div class="mb-2">
                        <button class="btn btn-primary" @click="repeatField(field)"
                                :disabled="field_value[field.name].length >= field.repeats"
                                type="button" :title="$t('Add') +' '+ field.label">
                            <i class="fas fa-plus"></i>
                            <span v-text="$t('Add') +' '+ field.label"></span>
                        </button>
                    </div>
                    <div class="d-flex" v-for="(value, vi) in field_value[field.name]" :key="field.id+vi">
                        <div class="form-group flex-fill">
                            <label :for="field.id+vi">
                                {{ field.label }} ({{ vi + 1 }})
                            </label>
                            <component :is="field.component" :id="field.id+vi"
                                       :name="name + '[' + field.name + ']' + '['+vi+']'"
                                       :invalid="!!errors[field.name]" v-model="field_value[field.name][vi]"
                                       :label="field.label" :options="field.options"
                                       :validation="field.validation"
                                       :locale="locale" :is-locale-rtl="isLocaleRtl"
                            ></component>
                        </div>

                        <div style="padding-top: 1.5rem;padding-inline-start: 1.25rem">
                            <button class="btn btn-primary dnd-handler"
                                    type="button" :title="$t('Reorder') +' '+ field.label">
                                <i class="fas fa-arrows-alt"></i>
                            </button>

                            <button class="btn btn-danger" @click="removeRepeatedField(field.name, vi)"
                                    :disabled="field_value[field.name].length === 1"
                                    type="button"
                                    :title="$t('Remove')+' '+ field.label + ' ('+(vi+1)+')'">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                    <div class="mb-5">
                        <button class="btn btn-primary" @click="repeatField(field)"
                                :disabled="field_value[field.name].length >= field.repeats"
                                type="button" :title="$t('Add') +' '+ field.label">
                            <i class="fas fa-plus"></i>
                            <span v-text="$t('Add') +' '+ field.label"></span>
                        </button>
                    </div>
                </draggable>
            </template>

            <!-- Single field -->
            <template v-else>
                <label :for="field.id">
                    {{ field.label }}
                </label>
                <component :is="field.component" :id="field.id" :name="name + '[' + field.name + ']'"
                           :invalid="!!errors[field.name]" v-model="field_value[field.name]"
                           :label="field.label" :options="field.options" :validation="field.validation"
                           :locale="locale" :is-locale-rtl="isLocaleRtl"
                ></component>
                <small v-if="field.description" :id="field.id+ 'Help'" class="form-text text-muted">
                    {{ field.description }}
                </small>
                <span v-if="errors[field.name]" class="invalid-feedback" role="alert">
                    <strong v-text="errors[field.name][0]"></strong>
                </span>
            </template>
        </div>
        <!-- /Loop fields -->
    </div>
</template>

<script>
export default {
    name: "GroupedField",
    extends: JasmineBaseField,
    data() {
        return {
            opts: Object.assign({
                fields: [],
            }, this.options),
        };
    },

    methods: {
        loadValues() {
            let vm = this;

            vm.fields.forEach(field => {
                if (field.repeats > 1) {
                    //Vue.set(vm.values, field.name, vm.old[field.name] || vm.breadable[field.name] || [field.getDefault()]);
                    Vue.set(vm.field_value, field.name,
                        //vm.old[field.name] ||
                        vm.field_value[field.name]
                        || [field.getDefault()]
                    );
                } else {
                    //Vue.set(vm.values, field.name, vm.old[field.name] || vm.breadable[field.name] || field.getDefault());
                }
            });
        },

        repeatField(field) {
            this.field_value[field.name].push(field.getDefault());
        },

        removeRepeatedField(fieldName, i) {
            this.field_value[fieldName].splice(i, 1);
        },
    },

    computed: {
        fields() {
            return this.opts.fields.map(f => {
                f.getDefault = () => {
                    if (typeof f.default === 'object') {
                        return JSON.parse(JSON.stringify(f.default));
                    }
                    return f.default;
                };
                return f;
            });
        },

        errors() {
            return {};
        },
    },

    beforeMount() {
        this.loadValues();
    },

    mounted() {
    }
}
</script>

<style scoped>
.form-row.grouped {
    background-color: #e1f4ff;
    margin: 0;
}
</style>
