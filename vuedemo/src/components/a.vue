<template>
<div class='xx'>
    <div class="box">
        <p>hello</p>
        <h5>name</h5>
    </div>
</div>
</template>
<script>
</script>
<style lang='scss' scoped>
@mixin alert($magin-top,$font,$color) {
    font-size: $font;
    margin-top: $magin-top;
    color: $color;
  
    
    
}
$color:orange;
.box{
    width:200px;
    height: 20px;
    p{
      @include alert(20px,30px,orange);
        // height: 100px;
        // height: 100px;
        // background-color:$color;
         border: {
            style:solid;
            color: red;
            width: 15px;
           
        }
        @at-root h5{
            color:orange;
        }
    }
}
</style>