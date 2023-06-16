<?php
/**
 * ES nuxt theme
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 * @package WordPress
 */

add_filter( 'acf/settings/rest_api_format', function () {
    return 'standard';
});

// Cros
add_filter( 'allowed_http_origins', 'add_allowed_origins' );
function add_allowed_origins( $origins ) {
    $origins[] = 'http://localhost:3000';
    return $origins;
};

// 引入
// include_once "setting/cpt.php"; 
include_once "setting/tools.php"; 
include_once "setting/acf.php"; 
include_once "setting/dashboard.php"; 
include_once "setting/admin.php"; 
include_once "api/index.php"; 

add_filter('acfe/flexible/thumbnail/layout=full_cards', 'full_cards_thumbnail', 10, 3);
function full_cards_thumbnail($thumbnail, $field, $layout){
    return get_template_directory_uri() . '/asset/thumbnail/full_cards.jpg';
}

add_filter('acfe/flexible/thumbnail/layout=ani_number', 'ani_number_thumbnail', 10, 3);
function ani_number_thumbnail($thumbnail, $field, $layout){
    return get_template_directory_uri() . '/asset/thumbnail/ani_number.jpg';
}

add_filter('acfe/flexible/thumbnail/layout=ig_show', 'ig_show_thumbnail', 10, 3);
function ig_show_thumbnail($thumbnail, $field, $layout){
    return get_template_directory_uri() . '/asset/thumbnail/ig_show.jpg';
}

add_filter('acfe/flexible/thumbnail/layout=room_show', 'room_show_thumbnail', 10, 3);
function room_show_thumbnail($thumbnail, $field, $layout){
    return get_template_directory_uri() . '/asset/thumbnail/room_show.jpg';
}

add_filter('acfe/flexible/thumbnail/layout=big_slider', 'big_slider_thumbnail', 10, 3);
function big_slider_thumbnail($thumbnail, $field, $layout){
    return get_template_directory_uri() . '/asset/thumbnail/big_slider.jpg';
}

add_filter('acfe/flexible/thumbnail/layout=half_layout', 'half_layout_thumbnail', 10, 3);
function half_layout_thumbnail($thumbnail, $field, $layout){
    return get_template_directory_uri() . '/asset/thumbnail/half_layout.jpg';
}

add_filter('acfe/flexible/thumbnail/layout=full_bg', 'full_bg_thumbnail', 10, 3);
function full_bg_thumbnail($thumbnail, $field, $layout){
    return get_template_directory_uri() . '/asset/thumbnail/full_bg.jpg';
}

add_filter('acfe/flexible/thumbnail/layout=title_double', 'title_double_thumbnail', 10, 3);
function title_double_thumbnail($thumbnail, $field, $layout){
    return get_template_directory_uri() . '/asset/thumbnail/title_double.jpg';
}

add_filter('acfe/flexible/thumbnail/layout=title_big_img', 'title_big_img_thumbnail', 10, 3);
function title_big_img_thumbnail($thumbnail, $field, $layout){
    return get_template_directory_uri() . '/asset/thumbnail/title_big_img.jpg';
}