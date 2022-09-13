$(document).ready(function(){
    $nav=$('.nav');
    $toggleCollapse=$('.toggle-collapse');

    /**click evet toggle menu */
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })
});