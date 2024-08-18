<template>
  <div>
    <div class="input-group input-group-sm">
      <input
        class="form-control"
        :class="{'is-invalid': invalid}"
        :placeholder="opts.placeholder"
        :pattern="opts.pattern"
        :readonly="opts.readonly"
        dir="ltr"
        :required="validation.indexOf('required') > -1"
        :id="id"
        :name="name + '[url]'"
        v-model="val.url" />
      <div class="input-group-text">
        <div class="type-icon" :class="{active: val.type === 'youtube'}">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 71.412 50">
            <g transform="scale(.58824)">
              <path
                d="M118.9 13.3c-1.4-5.2-5.5-9.3-10.7-10.7C98.7 0 60.7 0 60.7 0s-38 0-47.5 2.5C8.1 3.9 3.9 8.1 2.5 13.3 0 22.8 0 42.5 0 42.5s0 19.8 2.5 29.2C3.9 76.9 8 81 13.2 82.4 22.8 85 60.7 85 60.7 85s38 0 47.5-2.5c5.2-1.4 9.3-5.5 10.7-10.7 2.5-9.5 2.5-29.2 2.5-29.2s.1-19.8-2.5-29.3z"
                id="path7"
                fill="red" />
              <path id="polygon9" fill="#fff" d="M80.2 42.5L48.6 24.3v36.4z" />
            </g>
          </svg>
        </div>

        <div class="type-icon" :class="{active: val.type === 'vimeo'}">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 448 512">
            <path
              fill="#00adef"
              d="M403.2 32H44.8C20.1 32 0 52.1 0 76.8v358.4C0 459.9 20.1 480 44.8 480h358.4c24.7 0 44.8-20.1 44.8-44.8V76.8c0-24.7-20.1-44.8-44.8-44.8zM377 180.8c-1.4 31.5-23.4 74.7-66 129.4-44 57.2-81.3 85.8-111.7 85.8-18.9 0-34.8-17.4-47.9-52.3-25.5-93.3-36.4-148-57.4-148-2.4 0-10.9 5.1-25.4 15.2l-15.2-19.6c37.3-32.8 72.9-69.2 95.2-71.2 25.2-2.4 40.7 14.8 46.5 51.7 20.7 131.2 29.9 151 67.6 91.6 13.5-21.4 20.8-37.7 21.8-48.9 3.5-33.2-25.9-30.9-45.8-22.4 15.9-52.1 46.3-77.4 91.2-76 33.3.9 49 22.5 47.1 64.7z" />
          </svg>
        </div>

        <div class="type-icon" :class="{active: val.type === 'url'}">
          <i class="fas fa-file-video text-info"></i>
        </div>
      </div>
    </div>

    <input type="hidden" :name="name + '[type]'" v-model="val.type" />

    <div class="form-control form-control-sm d-inline-block p-2">
      <div
        v-if="!val.type"
        class="d-flex justify-content-center align-items-center p-5"
        style="background: #e6e6e6; height: 315px">
        <i class="fas fa-video" style="font-size: 5rem"></i>
      </div>

      <iframe
        v-if="val.type === 'youtube'"
        width="100%"
        height="315"
        :src="'https://www.youtube.com/embed/' + embed_val"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>

      <iframe
        v-if="val.type === 'vimeo'"
        width="100%"
        height="315"
        :src="'https://player.vimeo.com/video/' + embed_val"
        title="Vimeo video player"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen></iframe>

      <video v-if="val.type === 'url'" width="315" height="315" controls class="w-100">
        <source :src="val.url" type="video/mp4" />
      </video>
    </div>
  </div>
</template>

<script>
import JasmineBaseField from './BaseField';

export default {
  name: 'VideoField',
  extends: JasmineBaseField,

  data() {
    return {
      embed_val: null,
      opts: Object.assign(
        {
          options: [],
        },
        this.options,
      ),
    };
  },

  methods: {
    parseVal(val) {
      val = typeof val === 'string' ? val : '';
      let m;
      if (val.indexOf('youtu')) {
        m = val.match(/(\/|%3D|v=)(?<id>[0-9A-z-_]{11})([%#?&]|$)/);
        if (m) {
          this.val.type = 'youtube';
          this.embed_val = m.groups.id;
          return;
        }
        m = null;
      }

      if (val.indexOf('vimeo') > -1) {
        m = val.match(
          /(?:http|https)?:?\/?\/?(?:www\.|player\.)?vimeo\.com\/(?:channels\/(?:\w+\/)?|groups\/[^/]*\/videos\/|video\/|)(?<id>\d+)(?:|\/\?)/,
        );
        if (m) {
          this.val.type = 'vimeo';
          this.embed_val = m.groups.id;
          return;
        }
        m = null;
      }

      if (val.length > 12) {
        this.val.type = 'url';
        return;
      }

      this.val.type = '';
    },
  },

  watch: {
    'val.url'(val) {
      this.parseVal(val);
    },
  },

  beforeMount() {
    if (typeof this.val !== 'object') {
      this.val = {url: '', type: ''};
    }

    this.parseVal(this.val.url);
  },
};
</script>

<style lang="scss" scoped>
.type-icon {
  display: inline-block;
  filter: grayscale(1);
  padding: 0 0.2rem;

  &.active {
    filter: grayscale(0);
  }
}
</style>
