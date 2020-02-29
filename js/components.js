Vue.component('score-blob', {
  props: ['color', 'score', 'text'],
  template: `
    <div class="score-blob noselect" v-bind:style="color" v-bind:class="{ 'extreme-score': score > 50 || score < -50 }">
      <span>{{ text }}</span>
    </div>
  `
});