import Vue3StatusIndicator from "./components/statusIndicator.vue"; // 引入封装好的组件

export { Vue3StatusIndicator } //实现按需引入*


const components = [Vue3StatusIndicator];
const install = function(App: any, options?: any) {
	components.forEach((component) => {
		App.component(component.name,component);
	});
};
export default { install }