const app = new Vue({
    el: '#app',
    data: {
       message: 'Helo Vue',
       tasks: [
         {text: 'Пойти погулять', done: true},
         {text: 'Закончить проект на React', done: false},
         {text: 'Выучить новую техналогию', done: false}
       ]
    },
    methods: {
      addTask() {
        if (this.message === '') {
          return
        }else {
            this.tasks.push({text: this.message, done: false})
            this.message = ''
        }
      }, 
      count() {
        return this.tasks.filter(task => !task.done).length
      },
      deleteAll() {
        this.tasks.splice(0, this.tasks.length)
      }
    }
  })