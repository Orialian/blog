<template>
    <div>
        <div class="pagebg timer"></div>
        <div class="container">
            <h1 class="t_nav">
                <span>时光飞逝，机会就在我们眼前，何时找到了灵感，就要把握机遇，我们需要智慧和勇气去把握机会。 </span>
                <a href="/" class="n1">网站首页</a><a href="/" class="n2">时间轴</a></h1>
            <time-list></time-list>
        </div>
    </div>
</template>
<script>
import TimeList from '~/components/TimeList'
export default {
    components: {
        TimeList
    }
}
</script>

