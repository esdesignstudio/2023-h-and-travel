<?php
function get_single_room($request)
{
    $parameters = $request->get_params();
    $response['status'] = 404;

    if ($parameters['slug'] === '/') {
        $page_id = get_option('page_on_front'); // 取得首頁的 ID
        $post = get_post($page_id);
    } else {
        $args = array(
            'name' => $parameters['slug'],
            'post_type' => 'room',
            'post_status' => 'publish',
            'numberposts' => 1
        );

        $posts = get_posts($args);
        $post = isset($posts[0]) ? $posts[0] : null;
    }

    if ($post) {
        $fields = get_fields($post->ID);
        $fields['post'] = $post;

        $response['data'] = $fields;
        $response['status'] = 200;
    }

    return new WP_REST_Response($response, $response['status']);
}