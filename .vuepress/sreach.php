<?php
@error_reporting(E_ALL & ~E_NOTICE);

$path = dirname(__FILE__). '/dist';
$lists = __arrayChang(__fetchFiles($path));
$regular = "/(<(h[1-6])[^>]*id=\"(.*?)\"[^>]*>)(.*?)(<\/\\2>)/i";
//
$data = [];
foreach ($lists AS $item) {
    if (__rightExists($item, '.html') && !__rightExists($item, '404.html') && !__leftExists($item, '/vendor')) {
        $url = __leftDelete($item, $path);
        $title = "";
        $array = [];
        $content = __getMiddle(file_get_contents($item), '<main class="page">', '</main>');
        $content = __getMiddle(trim($content), null, '<footer class="page-edit">');
        $segment = preg_split($regular, $content);
        preg_match_all($regular, $content, $matchs);
        foreach ($segment AS $index => $value) {
            if ($index == 0) {
                continue;
            }
            $tmpTitle = trim(htmlspecialchars_decode(strip_tags($matchs[4][$index - 1])));
            $tmpTitle = trim(__leftDelete($tmpTitle, "#"));
            if (empty($tmpTitle)) {
                continue;
            }
            $tmpContent = $value;
            $tmpContent = preg_replace("/<div class=\"(language-[^>]*) extra-class\"><pre class=\"\\1\"><code>(.*?)<\/code><\/pre><\/div>/s", "", $tmpContent);
            $tmpContent = preg_replace("/<div class=\"sreach-filter-start\"><\/div>(.*?)<div class=\"sreach-filter-end\"><\/div>/s", "", $tmpContent);
            $tmpContent = trim(htmlspecialchars_decode(strip_tags($tmpContent)));
            if (empty($title)) $title = $tmpTitle;
            if ($title) {
                $array[] = [
                    'url' => $url,
                    'hash' => $matchs[3][$index - 1],
                    'title' => $tmpTitle,
                    'content' => $tmpContent,
                ];
            }
        }
        if ($array) {
            $data[] = [
                'title' => $title,
                'url' => $url,
                'hash' => '',
                'data' => $array,
            ];
        }
    }
}
//
file_put_contents($path . "/../theme/components/sreach.json", json_encode($data, JSON_UNESCAPED_UNICODE));
echo "Success \n";

/** ************************************************************** */
/** ************************************************************** */
/** ************************************************************** */

/**
 * 列出目录下的文件或目录
 * @param $path
 * @return array
 */
function __fetchFiles($path)
{
    $fetchdir = scandir($path);
    $arr_file = array();
    foreach ($fetchdir as $key => $value) {
        if ($value == "." || $value == "..") {
            continue;
        }
        if (is_dir($path . "/" . $value)) {
            $arr_file[$value] = __fetchFiles($path . "/" . $value);
        } else {
            $arr_file[] = $path . "/" . $value;
        }
    }
    return $arr_file;
}

/**
 * 将多维数组转换为一维数组
 * @param $array
 * @return array
 */
function __arrayChang($array)
{
    static $result_array = array();
    foreach ($array as $key => $value) {
        if (is_array($value)) {
            __arrayChang($value);
        } else {
            $result_array[] = $value;
        }
    }
    return $result_array;
}

/**
 * 替换所有空格
 * @param $str
 * @return mixed
 */
function __sRemove($str) {
    $str = str_replace("  ", " ", $str);
    if (__strExists($str, "  ")) {
        return __sRemove($str);
    }
    return $str;
}

/**
 * 是否包含字符
 * @param $string
 * @param $find
 * @return bool
 */
function __strExists($string, $find)
{
    return !(strpos($string, $find) === FALSE);
}

/**
 * @param string $str 补零
 * @param int $length
 * @param int $after
 * @return bool|string
 */
function __zeroFill($str, $length = 0, $after = 1) {
    if (strlen($str) >= $length) {
        return $str;
    }
    $_str = '';
    for ($i = 0; $i < $length; $i++) {
        $_str .= '0';
    }
    if ($after) {
        $_ret = substr($_str . $str, $length * -1);
    } else {
        $_ret = substr($str . $_str, 0, $length);
    }
    return $_ret;
}

/**
 * 截取指定字符串
 * @param $str
 * @param string $ta
 * @param string $tb
 * @return bool|string
 */
function __getMiddle($str, $ta = '', $tb = ''){
    if ($ta && strpos($str, $ta) !== false){
        $str = substr($str, strpos($str, $ta) + strlen($ta));
    }
    if ($tb && strpos($str, $tb) !== false){
        $str = substr($str, 0, strpos($str, $tb));
    }
    return $str;
}

/**
 * 判断字符串开头包含
 * @param string $string //原字符串
 * @param string $find //判断字符串
 * @param bool|false $lower //是否不区分大小写
 * @return int
 */
function __leftExists($string, $find, $lower = false)
{
    if (!is_string($string) || !is_string($find)) {
        return false;
    }
    if ($lower) {
        $string = strtolower($string);
        $find = strtolower($find);
    }
    return (substr($string, 0, strlen($find)) == $find);
}

/**
 * 判断字符串结尾包含
 * @param string $string //原字符串
 * @param string $find //判断字符串
 * @param bool|false $lower //是否不区分大小写
 * @return int
 */
function __rightExists($string, $find, $lower = false)
{
    if (!is_string($string) || !is_string($find)) {
        return false;
    }
    if ($lower) {
        $string = strtolower($string);
        $find = strtolower($find);
    }
    return (substr($string, strlen($find) * -1) == $find);
}

/**
 * 删除开头指定字符串
 * @param $string
 * @param $find
 * @param bool $lower
 * @return string
 */
function __leftDelete($string, $find, $lower = false)
{
    if (__leftExists($string, $find, $lower)) {
        $string = substr($string, strlen($find));
    }
    return $string ? $string : '';
}

/**
 * 删除结尾指定字符串
 * @param $string
 * @param $find
 * @param bool $lower
 * @return string
 */
function __rightDelete($string, $find, $lower = false)
{
    if (__rightExists($string, $find, $lower)) {
        $string = substr($string, 0, strlen($find) * -1);
    }
    return $string;
}