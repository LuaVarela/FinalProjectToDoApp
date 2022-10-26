<template>
    <div class="bg">
        <div class="container pt-5 pb-5">
            <h1 class="text-center mt-5"> My list 📝</h1>
            <!--Input-->
            <div class="d-flex pt-5">
                <input v-model="task" type="text" placeholder="enter task" class="form-control">
                <button @click="submitTask" class="btn btn-dark">Submit</button>
            </div>
            <!--Task Table-->
            <table class="table table-bordered mt-5">
                <thead>
                    <tr>
                        <th scope="col"> Pendign Task</th>
                        <th scope="col">Status</th>
                        <th scope="col" class="text-center">Change your task</th>
                        <th scope="col" class="text-center">Delete</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider">
                    <tr v-for="(task, index) in tasks" :key="index">
                        <td style="width: 500px">
                            <span :class="{ 'finished': task.status === 'finished' }">
                                {{ task.name }}
                            </span>
                        </td>
                        <td style="width: 120px">
                            <span @click="changeStatus(index)" class="pointer" :class="{
                                'text-danger': task.status === 'to-do', 'text-warning': task.status === 'in-progress',
                                'text-success': task.status === 'finished'
                            }">
                                {{ task.status }}
                            </span>
                        </td>
                        <td>
                            <div class="text-center" @click="editTask(index)">
                                <button type="submit" class="btn btn-success btn-sm">Edit <svg
                                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path
                                            d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                        <path fill-rule="evenodd"
                                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                    </svg> </button>
                            </div>
                        </td>
                        <td>
                            <div class="text-center" @click="deleteTask(index)">
                                <button type="submit" class="btn btn-danger btn-sm">Delete <svg
                                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-trash-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                    </svg></button>
                            </div>
                        </td>
                    </tr>


                </tbody>
            </table>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            task: '',
            editedTask: null,
            availableStatuses: ['to-do', 'in-progress', 'finished'],
            tasks: [
                {
                    name: 'New task                                         ',
                    status: 'to-do'
                },
            ]
        }
    },
    methods: {
        submitTask() {
            if (this.task.length === 0)
                return;
            if (this.editedTask === null) {
                this.tasks.push({
                    number: '',
                    name: this.task,
                    status: 'to-do'
                });
            } else {
                this.tasks[this.editedTask].name = this.task;
                this.editedTask = null;
            }
            this.task = '';
        },
        deleteTask(index) {
            this.tasks.splice(index, 1);
        },
        editTask(index) {
            this.task = this.tasks[index].name;
            this.editedTask = index;
        },
        changeStatus(index) {
            let newIndex = this.availableStatuses.indexOf(this.tasks[index].status);
            if (++newIndex > 2) newIndex = 0;
            this.tasks[index].status = this.availableStatuses[newIndex];
        },
    }
};
</script>


<style scoped>
.pointer {
    cursor:pointer
}

.finished {
    text-decoration: line-through;
}

</style>

