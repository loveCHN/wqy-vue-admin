import { defineStore } from "pinia";
import { reactive } from "vue";
import router from "@/router";
interface TabsMenuProps {
  icon: string;
  title: string;
  path: string;
  name: string;
  close: boolean;
}

export const useTabsStore = defineStore("tab", () => {
  let tabsMenuList: TabsMenuProps[] = reactive([]);
  const addTab = (tabItem: TabsMenuProps) => {
    if (tabsMenuList.every((item) => item.path !== tabItem.path)) {
      tabsMenuList.push(tabItem);
    }
  };
  const removeTabs = (tabPath: string, isCurrent: boolean = true) => {
    if (isCurrent) {
      tabsMenuList.forEach((item, index) => {
        if (item.path !== tabPath) return;
        const nextTab = tabsMenuList[index + 1] || tabsMenuList[index - 1];
        if (!nextTab) return;
        router.push(nextTab.path);
      });
    }
    const indexToRemove = tabsMenuList.findIndex(
      (item) => item.path === tabPath
    );
    if (indexToRemove !== -1) {
      tabsMenuList.splice(indexToRemove, 1);
    }
  };
  return {
    tabsMenuList,
    addTab,
    removeTabs,
  };
});
