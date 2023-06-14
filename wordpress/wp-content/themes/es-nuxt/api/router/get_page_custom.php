<?php
function get_page_custom($request)
{
    $parameters = $request->get_params();
    $response['status'] = 404;

    if ($parameters['slug'] === '/') {
        $page_id = get_option('page_on_front'); // 取得首頁的 ID
        $post = get_post($page_id);
    } else {
        $post = get_page_by_path($parameters['slug']);
    }

    if ($post) {
        $fields = get_fields($post->ID);
        $fields['post'] = $post;

        $response['data'] = $fields;
        $response['status'] = 200;
    }

    return new WP_REST_Response($response, $response['status']);
}