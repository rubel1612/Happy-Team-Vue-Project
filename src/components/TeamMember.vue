
<script setup>

    defineProps({
        name: String,
        email: String,
        status: String
    })
    
</script>

<template>
<tr>
      <td class="profile-data">
        <img :src="`https://i.pravatar.cc/50?u=${email}`">
    {{ name }}
      </td>
      <td class="email-data">
         {{ email }}
    </td>
    <td class="status-data">
        <button class="status-button">{{ status }}</button>
    </td>
      </tr>

</template>

 
<style>
    tr{
      background-color: #f3f4f6;
      padding: 0 48px;
    }

    .profile-data{
   display: flex;
   align-items: center;
   font-size: 1.25rem;
   font-weight: 500;
   padding: 1rem 1.5rem;
    }

    .profile-data img{
      border-radius: 0.75rem;
      margin-right: 8px;
    }

    .email-data{
      color: #6b7280;
      padding: 1rem 1.5rem;
    }

    .status-data{
      padding: 1rem 1.5rem;
    }

    .status-button{
      color: #22c55e;
      font-size: 1.25rem;
      border: none;
    }
</style>