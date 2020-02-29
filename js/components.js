Vue.component('score-blob', {
  props: ['color', 'score', 'text'],
  template: `
    <div class="score-blob noselect" v-bind:style="color" v-bind:class="{ 'extreme-score': score >= 60 || score <= -60 }">
      <span>{{ text }}</span>
    </div>
  `
});