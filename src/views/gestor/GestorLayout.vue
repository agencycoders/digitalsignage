<template>
  <div class="wrapper">
    <!-- Sidebar -->
    <nav id="sidebar" :class="{ active: !sidebarOpen }">
      <div class="sidebar-header">
        <h3>Painel Admin</h3>
      </div>

      <ul class="list-unstyled components">
        <li :class="{ active: currentPage === 'dashboard' }">
          <a href="#" @click="changePage('dashboard')">
            <i class="bi bi-speedometer2"></i> Dashboard
          </a>
        </li>
        <li :class="{ active: currentPage === 'purchases' }">
          <a href="#" @click="changePage('purchases')">
            <i class="bi bi-cart"></i> Compras
          </a>
        </li>
        <li :class="{ active: currentPage === 'subscriptions' }">
          <a href="#" @click="changePage('subscriptions')">
            <i class="bi bi-calendar-check"></i> Subscrições
          </a>
        </li>
        <li :class="{ active: currentPage === 'customers' }">
          <a href="#" @click="changePage('customers')">
            <i class="bi bi-people"></i> Clientes
          </a>
        </li>
        <li :class="{ active: currentPage === 'smtp' }">
          <a href="#" @click="changePage('smtp')">
            <i class="bi bi-envelope-gear"></i> Config. SMTP
          </a>
        </li>
        <li :class="{ active: currentPage === 'email-templates' }">
          <a href="#" @click="changePage('email-templates')">
            <i class="bi bi-envelope-paper"></i> E-mails Transacionais
          </a>
        </li>
      </ul>
    </nav>

    <!-- Page Content -->
    <div id="content">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <button type="button" class="btn btn-info" @click="toggleSidebar">
            <i class="bi bi-list"></i>
          </button>
          <div class="ms-auto">
            <span class="navbar-text">
              Bem-vindo, Administrador
            </span>
          </div>
        </div>
      </nav>

      <div id="main-content" class="container-fluid">
        <component :is="currentComponent" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

const sidebarOpen = ref(true)
const currentPage = ref('dashboard')

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
}

const changePage = (page: string) => {
  currentPage.value = page
}
</script>

<style scoped>
@import '../../assets/gestor/styles.css';
</style>
