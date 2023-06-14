<script setup>
   defineProps({
       show: Boolean
   })
</script>

<template>
   <transition name="modal">
    <div v-if="show" class="modal-container">
        <div class="modal-content">

           <div>
           <slot>default body</slot>
           </div>

           <footer>
              <button
              @click="$emit('close')"
               class="cancel" >cancel</button>
           </footer>
        </div>
    </div>
   </transition>
</template>

<style>
.modal-container {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
  }
  
  .modal-content {
    background-color: white;
    margin: auto;
    margin-top: 10%;
    padding: 10px;
    border: 1px solid #888;
    width: 500px;
    max-width: 90%;
    border-radius: 7px;
  }
  
  footer{
    border-top: 1px solid #ddd;
  margin-top: 6px;
  padding-top: 0.5rem;
  font-size: .8rem;
  }
  
  footer button {
  background: #ddd;
  padding: .25rem .75rem;
  border-radius: 20px;
}
footer button:hover {
  background: #c8c8c8;
}

.modal-enter-active, .modal-leave-active{
          transition: opacity 1s;
}
  
.modal-enter-from, .modal-leave-to{
        opacity: 0;
}

.modal-enter-to, .modal-leave-form{
    opacity: 100;
}
</style>