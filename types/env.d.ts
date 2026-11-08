declare module '*.css';
declare module '*?raw' {
  const content: string;
  export default content;
}
declare module '*.svg' {
  import type {FunctionalComponent, SVGAttributes} from 'vue';
  const component: FunctionalComponent<SVGAttributes>;
  export default component;
}
