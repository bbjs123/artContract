<?php
header("Content-type: text/html; charset=utf8");
/**
 * Created by PhpStorm.
 * User: code
 * Date: 17-3-14
 * Time: 上午11:06
 */
ini_set("display_errors", "On");
error_reporting(E_ALL | E_STRICT);

$root_path = dirname(__FILE__);
chdir($root_path);
$path_arr = explode(DIRECTORY_SEPARATOR, $root_path);
$var_name = 'branch' . md5(end($path_arr));
$sh = "cd $root_path 2>&1;sudo -udsftp git fetch --all 2>&1;{$var_name}=$(git symbolic-ref --short -q HEAD) 2<&1;sudo -udsftp git reset --hard origin/\${$var_name} 2>&1;";
exec($sh, $result, $data);

if ($data !== 0) {
    exec("echo $root_path >> $root_path/gitupdatelog.log  2>&1;", $status, $sta);
    echo '更新失败';
} else {
    echo '更新成功';
}
echo '<pre>';
$str = '';
foreach ($result as $k => $v) {
    $str .= $k . ' : ' . $v . "\n";
}
echo $str;
