import { onLoad } from "@dcloudio/uni-app";
import { ComponentPublicInstance, ref } from "vue"
import { isArray, isEmpty, isObject, isString, isUnDef } from "/@/utils/is";
//如果想要使用框架的自带工具函数请输入uni.$tm.u.?你的方法
//网络请示为uni.$tm.fetch.?你的方法

interface beforeRouterOpts {
	path:string,//当前页面路径，不含前缀 /
	opts?:any,//页面参数
	context:ComponentPublicInstance|null,
}

interface PageRouterOptions extends UniApp.NavigateToOptions {
	mode: 'navigateTo' | 'redirectTo' | 'reLaunch' | 'switchTab' | 'preloadPage',
	query?: Object,
	params?: Object
}

/**
 * 路由访问前执行的函数
 * @param path 页面路径，不带前缀/
 */
export const useTmRouterBefore = (arg:beforeRouterOpts):void=>{
    // 每一个页面在初化前都会执行
		console.log(arg);
}
/**
 * 路由访问后执行的函数
 * @param path 页面路径，不带前缀/
 * @param opts 页面加载完成后返回的参数
 */
export const useTmRouterAfter = (arg:beforeRouterOpts):void=>{
    //每一个页面初始后都会执行
		console.log(arg);
	 
}

export const usePageRouter = ()=> {
	/**
	 * ref
	 */
	const pageQuery = ref({});
	onLoad((options)=> {
		if(isUnDef(options) || isEmpty(options)) return;
		const tempQuery = options as any;
		for (const key in tempQuery) {
			tempQuery[key] = JSON.parse(decodeURIComponent(tempQuery[key]));
		}
		pageQuery.value = tempQuery;
	});

	/**
	 * 页面跳转
	 * @param options 
	 */
	function goPage(options: PageRouterOptions | string) {
		if(isString(options)) {
			options = {
				url: options,
				mode: 'navigateTo',
			}
		}
		const pageOption: PageRouterOptions = options;
		// query参数拼接
		if(!!pageOption.query && isObject(pageOption.query)) {
			const queryList = [];
			for (const key in pageOption.query) {
				const tempVal = pageOption.query[key];
				let value;
				if(isArray(tempVal)) {
					value = `[${JSON.stringify(tempVal)}]`
				} else if(isObject(tempVal)) {
					value = JSON.stringify(tempVal)
				} else {
					value = tempVal;
				}
				value = encodeURIComponent(value);
				queryList.push(`${key}=${value}`);
			}
			pageOption.url += `?${queryList.join('&')}`;
		}
		// params暂存
		const {
			mode,
			url,
			animationDuration,
			animationType,
			success,
			complete,
			events,
			fail
		} = pageOption;
		switch (mode) {
			case 'navigateTo':
				uni.navigateTo({
					url,
					animationDuration,
					animationType,
					events,
					success,
					complete,
					fail
				})
				break;
			case 'redirectTo':
				uni.redirectTo({
					url,
					success,
					complete,
					fail
				})
				break;
			case 'switchTab':
				uni.switchTab({
					url,
					success,
					complete,
					fail
				})
				break;
			case 'reLaunch':
				uni.reLaunch({
					url,
					success,
					complete,
					fail
				})
				break;
			case 'preloadPage':
				uni.reLaunch({
					url,
					success,
					complete,
					fail
				})
				break;
			default:
				break;
		}
	}

	/**
	 * 返回
	 * @returns 
	 */
	 function backPage(options: UniApp.NavigateBackOptions) {
		uni.navigateBack(options);
	}

	function getCurrentPage() {
		const pages = getCurrentPages();
		return pages[pages.length - 1];
	}

	/**
	 * 获取当前页面
	 * @returns 当前页面信息
	 */
	function pageInfo() {
		const pages = getCurrentPage();
		return {
			...pages,
			query: pageQuery.value
		}
	}

	return {
		goPage,
		backPage,
		pageInfo,
		pageQuery
	}
}