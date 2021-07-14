<i18n>
{
    "he": {
        "Add": "הוספת",
        "Reorder": "סידור"
    }
}
</i18n>

<template>
    <div class="bread-edit row" :class="{'writing-rtl': isLocaleRtl}">

        <!-- Loop columns -->
        <div v-for="(column, classId) in manifest" :key="classId"
             :class="classId">

            <!-- Loop groups -->
            <div v-for="(fields, gTitle) in column" :key="gTitle"
                 class="card mb-4">
                <div v-if="gTitle[0] !== '_'" class="card-header">
                    <h4 class="mb-0">{{ gTitle }}</h4>
                </div>
                <div class="card-body">
                    <div class="form-row">
                        <!-- Loop fields -->
                        <div v-for="(field, fi) in fields" :key="fi"
                             class="field p-1 form-group" :class="field.width">

                            <!-- Repeatable field -->
                            <template v-if="field.repeats > 1">
                                <draggable
                                    :list="values[field.name]"
                                    ghost-class="ghost"
                                    handle=".dnd-handler"
                                >
                                    <div class="mb-2">
                                        <button class="btn btn-primary" @click="repeatField(field)"
                                                :disabled="values[field.name].length >= field.repeats"
                                                type="button" :title="$t('Add') +' '+ field.label">
                                            <i class="fas fa-plus"></i>
                                            <span v-text="$t('Add') +' '+ field.label"></span>
                                        </button>
                                    </div>
                                    <div class="d-flex" v-for="(value, vi) in values[field.name]" :key="field.id+vi">
                                        <div class="form-group flex-fill">
                                            <label :for="field.id+vi">
                                                {{ field.label }} ({{ vi + 1 }})
                                            </label>
                                            <component :is="field.component" :id="field.id+vi"
                                                       :name="field.name + '['+vi+']'"
                                                       :invalid="!!errors[field.name]" v-model="values[field.name][vi]"
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
                                                    :disabled="values[field.name].length === 1"
                                                    type="button"
                                                    :title="$t('Remove')+' '+ field.label + ' ('+(vi+1)+')'">
                                                <i class="fas fa-trash"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="mb-5">
                                        <button class="btn btn-primary" @click="repeatField(field)"
                                                :disabled="values[field.name].length >= field.repeats"
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
                                <component :is="field.component" :id="field.id" :name="field.name"
                                           :invalid="!!errors[field.name]" v-model="values[field.name]"
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
                </div>
            </div>
            <!-- /Loop groups -->

        </div>
        <!-- /Loop columns -->

    </div>
</template>

<script>
export default {
    name: "BreadEdit",
    props: {
        locale: {
            required: true,
            type: String,
        },
        manifest: {
            required: true,
            type: Object,
        },
        breadable: {
            required: true,
            type: Object,
        },
        breadableKeyName: {
            required: true,
            type: String,
        },
        errors: {
            required: true,
            type: Object,
        },
        old: {
            required: true,
            type: Object,
        },
    },

    data() {
        return {
            values: {},
        };
    },

    methods: {
        loadValues() {
            let vm = this;

            vm.fields.forEach(field => {
                let field_value = vm.old[field.name] || vm.breadable[field.name] || (
                    field.repeats > 1 ? [field.getDefault()] : field.getDefault()
                );

                Vue.set(vm.values, field.name, field_value);
            });
        },

        repeatField(field) {
            this.values[field.name].push(field.getDefault());
        },

        removeRepeatedField(fieldName, i) {
            this.values[fieldName].splice(i, 1);
        },
    },

    computed: {
        fields() {
            let vm = this;

            let fields = [];

            Object.keys(vm.manifest).forEach((col, ci) => {
                Object.keys(vm.manifest[col]).forEach((group, gi) => {
                    vm.manifest[col][group].forEach(f => {
                        f.getDefault = () => {
                            if (typeof f.default === 'object') {
                                return JSON.parse(JSON.stringify(f.default));
                            }
                            return f.default;
                        };
                        fields.push(f);
                    });
                });
            });

            return fields;
        },

        isLocaleRtl() {
            return ['ar', 'he', 'iw'].indexOf(this.locale) > -1;
        },
    },

    created() {
        this.loadValues();
    },

    mounted() {
    }
}
</script>

<style scoped lang="scss">
@import "../../../../sass/variables";

.bread-edit ::v-deep {
    input,
    select,
    textarea {
        direction: ltr;
    }
}

.bread-edit.writing-rtl ::v-deep {
    input,
    select,
    textarea {
        direction: rtl;
    }
}

.field {
    //background-color: #f3f3f3;

    margin-bottom: 0.25rem;
}
</style>
