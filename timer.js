new Vue({
    el: '#timer',
    data: {
        left: new Date(2020, 1, 1, 0, 0, 0),
        todo_minutes: 25,
        time_circle: null,
        status_text: '未完成',
        time: '00:00',
    },
    methods: {
        on_start: function () {
            if(this.time_circle != null) clearInterval(this.time_circle);
            this.left = new Date(2020, 1, 1, 0, 0,this.todo_minutes);
            this.status_text = '未完成';
            this.time_circle = setInterval(this.secondPassed, 1000);
        },
        on_pause: function () {

        },
        on_stop: function () {
            new Date(2020, 1, 1, 0, 0, 0);
            this.time = '00:00';
            clearInterval(this.time_circle);
            this.status_text = '完成！'
        },
        secondPassed: function () {
            console.log('嘀嗒');
            console.log(this.left);
            if (this.left.getSeconds() == 0) {
                if (this.left.getMinutes() == 0) {
                    this.on_stop();
                }
                else {
                    this.left.setSeconds(59);
                    this.left.setMinutes(this.left.getMinutes() - 1);
                }
            }
            else {
                this.left.setSeconds(this.left.getSeconds() - 1);
            }
            this.time = this.left.getMinutes().toString().padStart(2, '0') + ':' + this.left.getSeconds().toString().padStart(2, '0');
        },
    },
});

function push () {
    Push.create('完成！');
}