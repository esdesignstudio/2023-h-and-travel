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

        if (isset($fields['flex'])) {
            foreach ($fields['flex'] as $flex) {
                if ($flex['acf_fc_layout'] === 'room_show') {
                    foreach ($flex['rooms'] as $room) {
                        $id = $room['room_type']->term_id;
                        $image = get_field('image', 'term_' . $id);
                        $deco_title = get_field('deco_title', 'term_' . $id);
                        $room['room_type']->image = $image;
                        $room['room_type']->deco_title = $deco_title;
                    }
                }
            }
        }

        $response['data'] = $fields;
        $response['status'] = 200;
    }

    return new WP_REST_Response($response, $response['status']);
}