<?php
function get_rooms_by_cate($request)
{
    $response = array();
    
    $room_types = get_terms(array(
        'taxonomy' => 'room-type',
        'hide_empty' => false,
        'orderby' => 'term_id',
    ));

    foreach ($room_types as $room_type) {
        $args = array(
            'post_type' => 'room',
            'tax_query' => array(
                array(
                    'taxonomy' => 'room-type',
                    'field' => 'term_id',
                    'terms' => $room_type->term_id
                )
            ),
            'posts_per_page' => -1,
        );

        $posts = get_posts($args);

        $rooms = array();
        foreach ($posts as $post) {
            $room = array(
                'id' => $post->ID,
                'title' => $post->post_title,
                'slug' => $post->post_name,
                'content' => $post->post_content,
                'fields' => get_fields($post->ID),
                // 其他需要的欄位
            );
            $rooms[] = $room;
        }

        $response[$room_type->slug]['rooms'] = $rooms;
        $response[$room_type->slug]['title']['title'] = $room_type->name;
        $response[$room_type->slug]['title']['deco_title'] = get_field('deco_title', $room_type);
    }

    return new WP_REST_Response($response);
}