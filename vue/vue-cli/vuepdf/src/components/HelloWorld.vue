<template>
	<div class="mod-config">
		<div style="padding: 10px;">
			<button @click="handleDown">PDF下载-离职申请表</button>
			<button @click="handleWindowPrint( '#demo', '离职申请表' )">浏览器方式下载</button>
			<button class="filter-item" style="margin-left: 10px;" @click="goBack">返回
			</button>
		</div>
		<div style="width: 100%">
			<div id="demo">
				<table border="1" class="table_style" v-for="(item,key) in [1,2,1,1]" :key="key">
					<thead>
						<th colspan="5" style="font-size: 30px">离职申请表</th>
					</thead>
					<tbody>
						<tr>
							<td rowspan="3">申请人</td>
							<td>工号</td>
							<td>{{leaveData.userno}}</td>
							<td>职位</td>
							<td>{{leaveData.position}}</td>
						</tr>
						<tr>
							<td>姓名</td>
							<td>{{leaveData.realName}}</td>
							<td>离职原因</td>
							<td>{{leaveData.reason | typeFilter}}</td>
						</tr>
						<tr>
							<td>部门</td>
							<td>{{leaveData.dept}}</td>
							<td>离岗日期</td>
							<td>{{leaveData.leaveDate}}</td>
						</tr>
						<tr>
							<td colspan="5" style="font-size: 20px">各级审批信息</td>
						</tr>
						<tr>
							<td>审批人姓名</td>
							<td colspan="3">审批意见</td>
							<td>审批时间</td>
						</tr>
						<tr v-for="(item,index) in approvalLogs" :key="index">
							<td>{{item.approveName}}</td>
							<td colspan="3">{{item.approveMsg}}</td>
							<td>{{item.approveDate}}</td>
						</tr>
					</tbody>
				</table>
				<p v-for="(item,key) in [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]" :key="key">结婚证VB在是就不错急诊科滑过11回家说几句话就会更健康</p>
			</div>
		</div>
	</div>
</template>

<script>
	import htmlToPdf from '@/assets/htmlToPdf'
	const libraryOption = [{
			id: 0,
			name: '家庭原因'
		}, {
			id: 1,
			name: '个人发展'
		}, {
			id: 2,
			name: '薪资福利'
		},
		{
			id: 3,
			name: '工作环境'
		}, {
			id: 4,
			name: '工作时间'
		}, {
			id: 5,
			name: '身体健康'
		}
	]
	const calendarTypeKeyValue = libraryOption.reduce((acc, cur) => {
		acc[cur.id] = cur.name
		return acc
	}, {})
	export default {
		// name: 'PdfDemo',
		data() {
			// 和导出pdf没关系
			return {
				leaveData: {
					dimId: ''
				},
				approvalLogs: [{
					approveName:'111',
					approveMsg:'111',
					approveDate:'2020-10-12'
				},{
					approveName:'111',
					approveMsg:'111',
					approveDate:'2020-10-12'
				},{
					approveName:'111',
					approveMsg:'111',
					approveDate:'2020-10-12'
				},{
					approveName:'111',
					approveMsg:'111',
					approveDate:'2020-10-12'
				},{
					approveName:'111',
					approveMsg:'111',
					approveDate:'2020-10-12'
				},]
			}
		},
		filters: {
			typeFilter(type) {
				return calendarTypeKeyValue[type]
			}
		},
		created() {
		},
		methods: {
			handleWindowPrint(ele, fileName) {
				// 留存原来的 html
				// let bdHtml = window.document.body.innerHTML;
				// let bdHtml = document.querySelector('#app').innerHTML;

				// 要打印的 内容 html
				// document.body.innerHTML =  document.querySelector('#demo').innerHTML;
				// document.body.innerHTML =  document.querySelector('#demo').outerHTML;
				// document.querySelector('#app').innerHTML =  document.querySelector('#demo').outerHTML;
				// document.querySelector('#main').innerHTML =  document.querySelector('#demo').outerHTML;
				console.log(666)
				// 去除页面不必要的 head 标签内  内容， 避免影响打印页 ， title 为保存为 pdf 的文件时的 文件名
				document.head.innerHTML = '<meta charset="utf-8">\n' +
					' <title> ' + fileName + '</title>\n' +
					' <meta name="format-detection" content="telephone=no">\n' +
					' <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">\n' +
					' <meta name="viewport" content="width=device-width,initial-scale=1.0">\n' +
					' <link rel="stylesheet" href="./static/css/contract.css"/>' // 生成pdf的外部css样式
				// document.body.innerHTML =  document.querySelector('#demo').outerHTML;
				// document.querySelector('#main').innerHTML =  document.querySelector('#demo').outerHTML;
				// document.body.innerHTML =  document.querySelector('#demo').outerHTML;
				document.body.innerHTML = document.querySelector(ele).outerHTML

				// window.print();

				// 转异步 等待dom元素渲染（样式）完毕在打印
				setTimeout(() => {
					// 打印
					window.print()
					// 刷新页面
					window.location.reload()
				}, 20)

				// 重新设会当前页面
				// window.document.body.innerHTML = bdHtml;
				// document.querySelector('#app').innerHTML =  bdHtml;
				// 刷新页面
				// window.location.reload();
			},
			goBack() {
				this.$router.go(-1)
			},
			handleDown() {
				htmlToPdf.downloadPDF(document.querySelector('#demo'), '离职申请表')
			}
		}
	}
</script>

<style scoped>
	#demo {
		background-color: #fff;
		width: 1000px;
		/* height: 400px; */
		margin: auto;
		padding: 40px;
		box-sizing: border-box;
	}

	.table_style td,
	th {
		padding: 10px;
		font-size: 15px;
	}

	.table_style {
		border-collapse: collapse;
		width: 100%;
		text-align: center
	}
</style>
