<template>
  <v-app id="inspire" class="bg-grey-lighten-4">
    <v-navigation-drawer expand-on-hover :rail="drawer">
      <v-list>
        <v-list-item prepend-icon="mdi-application" title="App Name"/>
      </v-list>
      <v-divider/>
      <v-list
        v-model:selected="menuSelectedValues"
        nav density="compact"
        color="primary"
        @update:selected="handleMenuSelectionChange"
      >
        <v-list-item
          v-for="menu in menus"
          :key="menu.name"
          :value="menu.path"
          :title="menu.name"
          :prepend-icon="menu.icon"
          :to="{ path: menu.path }"
        />
      </v-list>

      <template #append>
        <div class="pa-2">
          <v-btn icon="mdi-logout" block rounded color="primary"/>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-breadcrumbs :items="breadcrumbItems" density="compact"/>
    </v-app-bar>

    <v-main>
      <v-tabs
        v-model="activeTab"
        bg-color="primary"
        density="compact"
        @update:model-value="handleActiveTabChange"
      >
        <v-tab value="/home">Home</v-tab>
        <v-tab value="/about">About</v-tab>
        <v-tab value="/setting">Setting</v-tab>
      </v-tabs>
      <v-layout class="ma-3 bg-white rounded-lg pa-3" min-height="48rem">
        <router-view/>
      </v-layout>
    </v-main>
  </v-app>
</template>

<script setup>
  import { ref } from 'vue'
  import { menus } from '@/router/menu.data'
  import { useRouter } from 'vue-router'

  const router = useRouter()

  const drawer = ref(false)
  const activeTab = ref('/home')
  // 面包屑项数组
  const breadcrumbItems = ref([])

  // 菜单当前选中的 value 数组
  const menuSelectedValues = ref([])

  /**
   * 当前菜单所选项改变时，将当前激活的标签页修改为跳转后的路由页面对应的标签页
   * @author shiloh
   * @date 2024/7/5 22:27
   */
  const handleMenuSelectionChange = () => {
    const selectedMenuValue = menuSelectedValues.value[0]
    activeTab.value = selectedMenuValue
    const menu = menus.find(menu => menu.path === selectedMenuValue)
    breadcrumbItems.value = [menu.name]
  }

  /**
   * 当前激活的 tab 改变时，跳转到对应的路由页面
   * @author shiloh
   * @date 2024/7/5 22:27
   */
  const handleActiveTabChange = () => {
    router.push(activeTab.value)
    menuSelectedValues.value = [activeTab.value]
    const menu = menus.find(menu => menu.path === activeTab.value)
    breadcrumbItems.value = [menu.name]
  }
</script>
