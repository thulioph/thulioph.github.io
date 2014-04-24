<?php

header('Content-type: application/json; charset=utf-8');
$url = "http://api.tumblr.com/v2/blog/blog.thulioph.com/posts/text?api_key=oRPllhCbg5hkjgcDcsrG0FpmsaPhuDkt9ztQV0fGOKMWrnAIto";

$dados = file_get_contents($url);

var_dump($dados);
die();

echo $dados;

?>