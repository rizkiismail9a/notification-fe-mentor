<script setup lang="ts">
import dummyNotification from '@/services/notification.dummy';
import { Notification } from '@/types/notif.type';
import { getImage } from '@/utils/getImage.utils';
import { onMounted, ref } from 'vue';

onMounted(() => {
  getNotification();
});

const notificationData = ref<Notification[]>([]);

// Get the notification list
const getNotification = () => {
  notificationData.value = dummyNotification;
};

// Read a notif
const readNotif = (bulk: boolean, notifId?: string) => {
  notificationData.value.forEach((item) => {
    if (bulk || (notifId && item._id === notifId)) {
      item.isRead = true;
    }
  });
};
</script>
<template>
  <div
    class="w-full flex items-center justify-between tracking-[0.24px] leading-normal"
    data-nt-section="header"
  >
    <!-- Title -->
    <div class="flex items-center gap-2">
      <span class="font-bold text-lg text-very-dark-grayish-blue">
        Notifications
      </span>
      <div
        class="px-2 rounded text-xs bg-primary-blue text-xtra-light-grayish-blue"
      >
        {{ notificationData.filter((item) => !item.isRead).length }}
      </div>
    </div>
    <!-- Button read -->
    <div
      class="text-s text-dark-grayish-blue hover:text-primary-blue cursor-pointer"
      @click="readNotif(true)"
    >
      Mark all as read
    </div>
  </div>
  <!-- Main content -->
  <div class="flex flex-col gap-1" data-nt-section="main-notif">
    <div
      :key="i"
      v-for="(notif, i) in notificationData"
      :class="`flex items-start gap-4 p-4 cursor-pointer ${!notif.isRead ? 'bg-xtra-light-grayish-blue' : ''} rounded`"
      data-nt-section="main-notif-card"
      @click="readNotif(false, notif._id)"
    >
      <img
        :src="getImage(notif.user.userImage)"
        alt="profile"
        class="w-[46px] h-[46px]"
      />
      <div class="flex flex-col flex-1 gap-1">
        <div class="tablet:text-base text-xs tracking-[0.24px] leading-normal">
          <span
            class="font-semibold hover:text-primary-blue pr-1 cursor-pointer"
          >
            {{ notif.user.name }}
          </span>
          <span class="text-dark-grayish-blue font-medium pr-1">
            {{ notif.action }}
          </span>
          <span
            class="font-semibold text-dark-grayish-blue hover:text-primary-blue cursor-pointer"
          >
            {{ notif.destination }}
            <div
              v-if="!notif.isRead"
              class="ml-1 w-2 h-2 bg-primary-red inline-block rounded-full"
            />
          </span>
        </div>
        <div class="text-xs text-grayish-blue font-medium">1m ago</div>
        <div
          v-if="notif.message"
          class="border rounded p-3 font-medium text-dark-grayish-blue text-sm tracking-[0.24px] hover:bg-light-grayish-blue-2 cursor-pointer"
        >
          {{ notif.message }}
        </div>
      </div>
    </div>
  </div>
</template>
