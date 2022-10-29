<template>
  <div>
    <NavBar />
    <RouterView />
    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { RouterView, useRouter, /*useRouter*/ } from 'vue-router'
import { useUserStore } from './stores/user'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
// import ToDoList from './components/ToDoList.vue'
const router = useRouter()
/*import Home from './components/home.vue'*/
/*import signIn from './components/signIn.vue'*/
/*import signUp from './components/signUp.vue'*/

const userStore = useUserStore()
const { user } = storeToRefs(userStore)
onMounted(async () => {
  console.log("Mounted")
  try {
    await userStore.fetchUser() // here we call fetch user
    console.log(user.value)
    if (!user.value) {
      console.log('No estas logeado')
      router.push({ path: '/Home' });

    } else {
      console.log('Estas logeado')
      console.log(user.value)
      // continue to dashboard
      router.push({ path: '/ToDoList' });
    }
  } catch (e) {
    console.log(e)
  }
})
</script>