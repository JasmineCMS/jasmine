import { LinkComponentBaseProps } from '@inertiajs/core';
import { Component, DefineComponent } from 'vue';
export interface InertiaLinkProps extends LinkComponentBaseProps {
    as?: string | Component;
    onClick?: (event: MouseEvent) => void;
}
type InertiaLink = DefineComponent<InertiaLinkProps>;
declare const Link: InertiaLink;
export default Link;
