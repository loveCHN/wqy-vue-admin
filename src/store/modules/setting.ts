import { defineStore } from "pinia";
import { ref } from "vue";
let useLayoutSetting = defineStore("SettingStore", () => {
  let refsh = ref<boolean>(false);
  let fold = ref<boolean>(false);
  let changeRefsh = () => {
    refsh.value = !refsh.value;
  };
  const changeIcon = () => (fold.value = !fold.value);
  return {
    refsh,
    fold,
    changeIcon,
    changeRefsh,
  };
});
export default useLayoutSetting;
