<template>
    <div class="bg frame">
        <div class="container pt-5 pb-5">
            <h1 class="text-center">My tasks 📝</h1>
        </div>

        <div class="d-flex pt-5 addTask">
            <form class="tasks_new input-group" method="post" @submit.prevent="handleSubmit">
                <input type="text" required id="btn-check-outlined" class="button input form-control addTask-text"
                    v-model="title" placeholder="Add a new task" aria-describedby="button-addon4">
                <div>
                    <button class="btn btn-dark addTask-button" type="submit">Submit</button>
                </div>
            </form>
        </div>

        <table class="table table-bordered mt-5">
            <thead>
                <tr>
                    <th scope="col"> Pending Tasks</th>
                    <!-- <th scope="col" class="text-center">Edit your task</th>
                    <th scope="col" class="text-center">Delete</th> -->
                </tr>
            </thead>
            <tbody class="table-group-divider">
                <tr v-for="(task, index) in tasks" :key="index">
                </tr>
            </tbody>
        </table>


        <div class="newTask">
            <ul class="toDoList list-group">
                <li v-for="task in tasks" class="input list-group-item">

                    <div v-if="editId === task.id" class="input-group">

                        <input v-model="newTitle" type="text" class="input form-control" placeholder="edit your task"
                            aria-label="Recipient's username with two button addons" aria-describedby="button-addon4">
                        <div class="input-group-append" id="button-addon4">
                            <button @click="disableEditing" class="btn btn-dark" type="button">Cancel</button>
                            <button @click="saveEdit(task)" class="btn btn-success addTask-save" type="button"
                                style="--bs-btn-padding-y: .45rem; --bs-btn-padding-x: 1.2rem;">Save</button>
                        </div>
                    </div>

                    <div v-else class="PendingTasks">
                        <div class="input-group PendingTasks-checkbox">
                            <input @click="changeIsComplete(task)" type="checkbox" v-model="task.is_complete">
                        </div>

                        <div class="PendingTasks-title">
                            <span v-if="task.is_complete" @click="enableEditing(task)"><del>{{
                                    task.title
                            }}</del></span>
                            <span v-else @click="enableEditing(task)">{{ task.title }}</span>
                        </div>
                        <div>
                            <button @click="deleteTasks(task)" class="btn btn-danger" type="button">Delete</button>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>


</template>

<script setup>
import { useTaskStore } from "../stores/task"
import { ref } from "vue"
import { useRouter } from 'vue-router'
import { useUserStore } from "../stores/user"
import { storeToRefs } from "pinia"

const router = useRouter()
const title = ref('');
const is_complete = ref(false);
const newTitle = ref('')
const editId = ref(null)
const completeId = ref(false)

const taskStore = useTaskStore();
const userStore = useUserStore();
const { user } = storeToRefs(userStore);
const { tasks } = storeToRefs(taskStore);

const handleSubmit = async () => {
    await taskStore.createTasks(title.value, is_complete.value, user._object.user.id,)
    title.value = ""
    is_complete.value = false
    await taskStore.fetchTasks();
};
const fetchTasks = async () => {
    await taskStore.fetchTasks();
}
fetchTasks();
const deleteTasks = async (task) => {
    await taskStore.deleteTasks(task.id)
    await taskStore.fetchTasks();
};
const enableEditing = (task) => {
    newTitle.value = task.title
    editId.value = task.id
};
const disableEditing = () => {
    newTitle.value = ''
    editId.value = null
};
const saveEdit = async (task) => {
    task.title = newTitle.value
    await taskStore.updateTitle(newTitle.value, task.id)
    editId.value = null
    await taskStore.fetchTasks();
};
const changeIsComplete = async (task) => {
    task.is_complete = !task.is_complete
    await taskStore.updateIsComplete(task.is_complete, task.id)
    await taskStore.fetchTasks();
};
</script>


<style scoped>
.addTask-button {
    margin-left: 10px;
}

.PendingTasks {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.PendingTasks-checkbox {
    width: 15%;
}

.PendingTasks-title {
    width: 230%;
    text-align: left;
}

.newTask button {
    margin-top: auto;
    margin-right: 20px;
}

.frame {
    margin: 1rem 4.5rem 15rem 4.5rem
}
</style>