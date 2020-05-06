<template>
    <input type="text" class="form-control" :class="{'is-invalid': invalid}"
           :required="validation.indexOf('required')"
           :id="id" :name="name" v-model="field_value">
</template>

<script>
    export default {
        name: "InputField",
        extends: JasmineBaseField,
    }
</script>

<style scoped>

</style>
