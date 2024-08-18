import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import prettier from 'eslint-config-prettier';

export default [
    {files: ['**/*.{js,mjs,cjs,vue}']},
    {languageOptions: {globals: {
        ...globals.browser,
        ...globals.node,
    }}},
    pluginJs.configs.recommended,
    ...pluginVue.configs['flat/essential'],
    prettier,
    {
        rules: {
            'vue/multi-word-component-names': 'off',
            'vue/no-unused-vars': 'off',
            'no-unused-vars': 'off',
        },
    },
];