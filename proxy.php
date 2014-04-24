<?php
 header('Content-type: text/html; charset=utf-8');

$url = "http://api.tumblr.com/v2/blog/thulioph.tumblr.com/posts/text?api_key=oRPllhCbg5hkjgcDcsrG0FpmsaPhuDkt9ztQV0fGOKMWrnAIto";
$dados = file_get_contents($url);

echo $dados;

?>