<?php

  $hit_count = @file_get_contents("../data/MMBN3D.txt");
  $hit_count++;
  @file_put_contents("../data/MMBN3D.txt", $hit_count);

  header("Location: ./MMBN3D_DEMO_V1.zip"); // redirect to the real file to be downloaded

?>
