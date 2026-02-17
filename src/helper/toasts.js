import { h } from 'vue'
import { toast } from 'vue3-toastify'

export function toastCustom(message, { type = "success", icon = "✅" } = {}) {
	const isDark = document.documentElement.classList.contains("dark")

	const baseClasses =
		"px-6 py-3 rounded-lg shadow-lg font-bold text-sm flex items-center gap-3"

	const themeClasses = isDark
		? "bg-gray-800 text-white"
		: "bg-white text-slate-900"

	const typeClasses = {
		success: "border border-green-500",
		error: "border border-red-500",
		info: "border border-blue-500",
		warning: "border border-yellow-400"
	}[type]

	const iconVNode = h("span", { class: "text-2xl leading-none" }, icon)

	toast(message, {
		icon: iconVNode,
		className: `${baseClasses} ${themeClasses} ${typeClasses}`,
		style: {
			lineHeight: "1.2rem",
		}
	})
}
