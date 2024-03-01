<template>
  <div class="min-h-full" v-if="user">
    <DesktopAppNavBar :navigation="navigation" :teams="teams" />
    <div class="lg:pl-64 flex flex-col">
      <MobileAppNavBar :navigation="navigation" :teams="teams" />
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import { useAuth0 } from "@/auth";
import MobileAppNavBar from "@/components/navbars/MobileAppNavBar";
import DesktopAppNavBar from "@/components/navbars/DesktopAppNavBar";
import { ClockIcon, HomeIcon, ViewListIcon } from "@heroicons/vue/outline";

const navigation = [
  { name: "menu.home", href: "/app/dashboard", icon: HomeIcon },
  {
    name: "menu.tasks",
    href: "/app/tasks",
    icon: ViewListIcon,
  },
  {
    name: "menu.recent",
    href: "/app/notifications",
    icon: ClockIcon,
  },
];
const teams = [
  { name: "Engineering", href: "#", bgColorClass: "bg-indigo-500" },
  { name: "Human Resources", href: "#", bgColorClass: "bg-green-500" },
  { name: "Customer Success", href: "#", bgColorClass: "bg-yellow-500" },
];
const projects = [
  {
    id: 1,
    title: "GraphQL API",
    initials: "GA",
    team: "Engineering",
    members: [
      {
        name: "Dries Vincent",
        handle: "driesvincent",
        imageUrl:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        name: "Lindsay Walton",
        handle: "lindsaywalton",
        imageUrl:
          "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        name: "Courtney Henry",
        handle: "courtneyhenry",
        imageUrl:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        name: "Tom Cook",
        handle: "tomcook",
        imageUrl:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    ],
    totalMembers: 12,
    lastUpdated: "March 17, 2020",
    pinned: true,
    bgColorClass: "bg-pink-600",
  },
  // More projects...
];
const pinnedProjects = projects.filter((project) => project.pinned);

export default {
  components: { DesktopAppNavBar, MobileAppNavBar },
  setup() {
    const auth0 = useAuth0();

    const user = auth0 ? auth0.user : null;
    return {
      user,
      navigation,
      teams,
      projects,
      pinnedProjects,
    };
  },
};
</script>
