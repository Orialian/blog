<template>
    <div>
        <div class="pagebg sh"></div>
        <div class="container">
            <h1 class="t_nav">
                <span>慢生活，不是懒惰，放慢速度不是拖延时间，而是让我们在生活中寻找到平衡。 </span>
                <a href="/" class="n1">网站首页</a><a href="/" class="n2">慢生活</a></h1>
            <blog></blog>
            <side-bar></side-bar>
        </div>
    </div>
</template>
<script>
import Blog from '~/components/home/Blog'
import SideBar from '~/components/SideBar'
export default {
    components: {
        Blog,
        SideBar
    }
}
</script>

