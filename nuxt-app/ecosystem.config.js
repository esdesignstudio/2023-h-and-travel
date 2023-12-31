module.exports = {
	apps: [{
        name: 'h-and-travel',
        script: './.output/server/index.mjs', // Nuxt3 官網上面說的方式
		instances: 'max', // 負載平衡模式下的 cpu 數量
		exec_mode: 'cluster', // cpu 負載平衡模式
		max_memory_restart: '1G', // 緩存了多少記憶體重新整理
		env: {
			name: 'h-and-travel', // 專案啟動記得改名字
			PORT: 4018 // 專案啟動記得避開其他專案的 port
		},
	}]
}