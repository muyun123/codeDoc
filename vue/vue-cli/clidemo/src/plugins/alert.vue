<template>
    <div class="ivue-alert">
        <span v-html="info"></span>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.ivue-alert{
    border: 1px solid #abdcff;
    background-color: #f0faff;
    padding: 8px 48px 8px 16px;
    border-radius: 4px;
    color: #515a6e;
    font-size: 14px;
    line-height: 16px;
    margin-bottom: 10px;
    display: inline-block;
    position:fixed;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
}
</style>