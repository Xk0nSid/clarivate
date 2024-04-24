<script setup lang="ts">
import { Ref, onMounted, ref } from 'vue';
import UsersService from '../services/users.service';
import { AppUser } from '../models/app_user';

const users: Ref<AppUser[]> = ref<AppUser[]>([]);

const fetchUsers = async () => {
  users.value = await UsersService.fetchUsers();
}

const deleteUser = async (id: number) => {
  await UsersService.deleteUser(id);
  await fetchUsers();
}

onMounted(async () => {
  await fetchUsers();
})

</script>

<template>
  <div class="relative overflow-x-auto p-10">
    <button @click="fetchUsers" type="button"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
      Refresh
    </button>

    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">
            Id
          </th>
          <th scope="col" class="px-6 py-3">
            First Name
          </th>
          <th scope="col" class="px-6 py-3">
            Last Name
          </th>
          <th scope="col" class="px-6 py-3">
            Email
          </th>
          <th scope="col" class="px-6 py-3">
            Organization
          </th>
          <th scope="col" class="px-6 py-3">
            Created On
          </th>
          <th scope="col" class="px-6 py-3">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{ user.id }}
          </th>
          <td class="px-6 py-4">
            {{ user.first_name }}
          </td>
          <td class="px-6 py-4">
            {{ user.last_name }}
          </td>
          <td class="px-6 py-4">
            {{ user.email }}
          </td>
          <td class="px-6 py-4">
            {{ user.organization }}
          </td>
          <td class="px-6 py-4">
            {{ user.created_on }}
          </td>
          <td>
            <div class="inline-flex rounded-md shadow-sm p-4" role="group">
              <button @click="deleteUser(user.id)" type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Delete
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
