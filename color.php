<?php

$r = rand(0,255);
$g = rand(0,255);
$b = rand(0,255);

echo json_encode(array('r' => $r, 'g' => $g, 'b' => $b));