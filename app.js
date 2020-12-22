const value11 = new Vue({
    el: "#app1",
    data: {
        value: "1st"
    },
    methods: {
        changeValue(){
            value12.value="changed"
        }
    }
});

const value12 = new Vue({
    el: "#app2",
    data: {
    value: "2nd"
    }
})
