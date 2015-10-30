import * as BackboneHoodie from './backbone-hoodie.js';

(function () {
    'use strict';

    Backbone.connect('http://localhost:6005');

    var Task = Backbone.Model.extend({
        // models must have a type. maps to type in hoodie store.
        type: 'task',
        defaults: {
            name: 'New Task'
        }
    });


    var TaskCollection = Backbone.Collection.extend({
        // if a collection has a model, the adapter will keep the collection
        // up to date with all the models in the local store, as well as remote events
        model: Task
    });

    var task = new Task({
        name: 'laundry'
    });

// task will be saved into the hoodie store
    console.log(JSON.stringify(Backbone));
    task.save();

    var tasks = new TaskCollection();

// upon initialization, tasks will fetch() all Task models from the datastore.
// it'll find t and insert t in tasks.

    var task2 = new Task({
        name: 'groceries'
    });

    task2.save();
// task2 will be saved into the hoodie store
// and will also be inserted into tasks

    //task.destroy();
// task will be deleted from the store
// and will be removed from tasks
})();