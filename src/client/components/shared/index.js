import Section from './section.vue';
import Row from './row.vue';
import Col from './col.vue';
export default {
    install(app, opts) {
        app.component('JSection', Section);
        app.component('JRow', Row);
        app.component('JCol', Col);
    }
};
//# sourceMappingURL=index.js.map