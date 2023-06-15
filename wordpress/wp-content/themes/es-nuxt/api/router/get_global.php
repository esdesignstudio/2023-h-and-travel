<?php
function get_global($request)
{
    $response = get_fields('option');

    return new WP_REST_Response(
        $response, 200
    );
}
