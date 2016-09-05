<?php
$file = fopen("data/salesrecords.csv", "a+") or exit ("Unable to add item");

fputcsv($file,"3,test,69,42,21");

fclose($file);
?>