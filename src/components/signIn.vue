<template>
    <form @submit.prevent="handleLogin" class="container-f">
        <!-- Email input -->
        <div class="form-outline mb-4">
            <input type="email" required id="form1Example1" v-model="email" class="form-control" />
            <label class="form-label" for="form1Example1">Email address</label>
        </div>

        <!-- Password input -->
        <div class="form-outline mb-4">
            <input type="password" required id="form1Example2" v-model="password" class="form-control" />
            <label class="form-label" for="form1Example2">Password</label>
        </div>

        <!-- Checkbox  -->
        <!-- <div class="row mb-4"> -->
        <!-- <div class="col d-flex justify-content-center"> -->
        <!-- Checkbox -->
        <!-- <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="form1Example3" checked />
                    <label class="form-check-label" for="form1Example3"> Remember me </label>
                </div>
            </div>
        </div> -->

        <!-- Submit button -->
        <div class="col d-flex justify-content-center">
            <button type="submit" class="btn btn-dark"
                style="--bs-btn-padding-y: .75rem; --bs-btn-padding-x: 1.75rem; --bs-btn-font-size: 1rem;">Sign in
            </button>
        </div>
    </form>
</template>

<script setup >
import { ref } from "vue";
import { storeToRefs } from 'pinia'
import { useUserStore } from '../stores/user'
import { useRouter } from 'vue-router'
const email = ref("");
const password = ref("");
const router = useRouter()
const userStore = useUserStore()
const { user } = storeToRefs(userStore)


const handleLogin = async () => {
    try {
        await userStore.signIn(email.value, password.value)
        if (!user.value) {
            router.push({ path: '/signUp' });
        }
        else {
            router.push({ path: '/ToDoList' });
        }
    } catch (e) {
        console.log(e)
    }
}
</script>

<style>
.container-f {
    margin: 100px;
}
</style>