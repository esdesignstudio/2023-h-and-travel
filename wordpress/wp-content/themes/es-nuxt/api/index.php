<?php
require_once 'router/get_page_custom.php';
require_once 'router/get_global.php';

require_once 'router/get_single_room.php';


/**
 * origin api
 * wp-json/wp/v2/[router]
 */

add_action('rest_api_init', function () {

    register_rest_route('api', '/get_global', array(
        'methods' => 'GET',
        'callback' => 'get_global'
    ));
    
    register_rest_route('api', '/get_rooms_by_cate', array(
        'methods' => 'GET',
        'callback' => 'get_rooms_by_cate'
    ));
    
    register_rest_route('api', '/get_page_custom', array(
        'methods' => 'POST',
        'callback' => 'get_page_custom'
    ));
    
    register_rest_route('api', '/get_single_room', array(
        'methods' => 'POST',
        'callback' => 'get_single_room'
    ));
});
