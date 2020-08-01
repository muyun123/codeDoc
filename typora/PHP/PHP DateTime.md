# PHP 5 Date/Time 函数

------

## PHP Date/Time 简介

Date/Time 函数允许您从 PHP 脚本运行的服务器上获取日期和时间。您可以使用 Date/Time 函数通过不同的方式来格式化日期和时间。

**注释：**这些函数依赖于服务器的本地设置。使用这些函数时请记住要考虑夏令时和闰年。

------

## 安装

PHP Date/Time 函数是PHP 核心的组成部分。无需安装即可使用这些函数。

------

## Runtime 配置

Date/Time 函数的行为受到 php.ini 中设置的影响：

| 名称                   | 描述                                                         | 默认      | PHP 版本 |
| :--------------------- | :----------------------------------------------------------- | :-------- | :------- |
| date.timezone          | 规定默认时区（所有的 Date/Time 函数使用该选项）              | ""        | PHP 5.1  |
| date.default_latitude  | 规定默认纬度（date_sunrise() 和 date_sunset() 使用该选项）   | "31.7667" | PHP 5.0  |
| date.default_longitude | 规定默认经度（date_sunrise() 和 date_sunset() 使用该选项）   | "35.2333" | PHP 5.0  |
| date.sunrise_zenith    | 规定默认日出天顶（date_sunrise() 和 date_sunset() 使用该选项） | "90.83"   | PHP 5.0  |
| date.sunset_zenith     | 规定默认日落天顶（date_sunrise() 和 date_sunset() 使用该选项） | "90.83"   | PHP 5.0  |



------

## PHP 5 Date/Time 函数

| 函数                                                         | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [checkdate()](https://www.runoob.com/php/func-date-checkdate.html) | 验证格利高里日期。                                           |
| [date_add()](https://www.runoob.com/php/func-date-date-add.html) | 添加日、月、年、时、分和秒到一个日期。                       |
| [date_create_from_format()](https://www.runoob.com/php/func-date-create-from-format.html) | 返回一个根据指定格式进行格式化的新的 DateTime 对象。         |
| [date_create()](https://www.runoob.com/php/func-date-date-create.html) | 返回一个新的 DateTime 对象。                                 |
| [date_date_set()](https://www.runoob.com/php/func-date-date-set.html) | 设置一个新的日期。                                           |
| [date_default_timezone_get()](https://www.runoob.com/php/func-date-default-timezone-get.html) | 返回默认时区，被所有的 Date/Time 函数使用。                  |
| [date_default_timezone_set()](https://www.runoob.com/php/func-date-default-timezone-set.html) | 设置默认时区，被所有的 Date/Time 函数使用。                  |
| [date_diff()](https://www.runoob.com/php/func-date-date-diff.html) | 返回两个日期间的差值。                                       |
| [date_format()](https://www.runoob.com/php/func-date-date-format.html) | 返回根据指定格式进行格式化的日期。                           |
| [date_get_last_errors()](https://www.runoob.com/php/func-date-get-last-errors.html) | 返回日期字符串中的警告/错误。                                |
| date_interval_create_from_date_string()                      | 从字符串的相关部分建立一个 DateInterval。                    |
| [date_interval_format()](https://www.runoob.com/php/func-date-interval-format.html) | 格式化时间间隔。                                             |
| [date_isodate_set()](https://www.runoob.com/php/func-date-isodate-set.html) | 设置 ISO 日期。                                              |
| [date_modify()](https://www.runoob.com/php/func-date-modify.html) | 修改时间戳。                                                 |
| [date_offset_get()](https://www.runoob.com/php/func-date-offset-get.html) | 返回时区偏移。                                               |
| [date_parse_from_format()](https://www.runoob.com/php/func-date-parse-from-format.html) | 根据指定的格式返回一个带有指定日期的详细信息的关联数组。     |
| [date_parse()](https://www.runoob.com/php/func-date-date-parse.html) | 返回一个带有指定日期的详细信息的关联数组。                   |
| [date_sub()](https://www.runoob.com/php/func-date-date-sub.html) | 从指定日期减去日、月、年、时、分和秒。                       |
| [date_sun_info()](https://www.runoob.com/php/func-date-sun-info.html) | 返回一个包含有关指定日期与地点的日出/日落和黄昏开始/黄昏结束的信息的数组。 |
| [date_sunrise()](https://www.runoob.com/php/func-date-sunrise.html) | 返回指定日期与地点的日出时间。                               |
| [date_sunset()](https://www.runoob.com/php/func-date-sunset.html) | 返回指定日期与地点的日落时间。                               |
| [date_time_set()](https://www.runoob.com/php/func-date-time-set.html) | 设置时间。                                                   |
| [date_timestamp_get()](https://www.runoob.com/php/func-date-timestamp-get.html) | 返回 Unix 时间戳。                                           |
| [date_timestamp_set()](https://www.runoob.com/php/func-date-timestamp-set.html) | 设置基于 Unix 时间戳的日期和时间。                           |
| [date_timezone_get()](https://www.runoob.com/php/func-date-timezone-get.html) | 返回给定 DateTime 对象的时区。                               |
| [date_timezone_set()](https://www.runoob.com/php/func-date-timezone-set.html) | 设置 DateTime 对象的时区。                                   |
| [date()](https://www.runoob.com/php/func-date-date.html)     | 格式化本地日期和时间。                                       |
| [getdate()](https://www.runoob.com/php/func-date-getdate.html) | 返回某个时间戳或者当前本地的日期/时间的日期/时间信息。       |
| [gettimeofday()](https://www.runoob.com/php/func-date-gettimeofday.html) | 返回当前时间。                                               |
| [gmdate()](https://www.runoob.com/php/func-date-gmdate.html) | 格式化 GMT/UTC 日期和时间。                                  |
| [gmmktime()](https://www.runoob.com/php/func-date-gmmktime.html) | 返回 GMT 日期的 UNIX 时间戳。                                |
| [gmstrftime()](https://www.runoob.com/php/func-date-gmstrftime.html) | 根据区域设置格式化 GMT/UTC 日期和时间。                      |
| [idate()](https://www.runoob.com/php/func-date-idate.html)   | 格式化本地时间/日期为整数。                                  |
| [localtime()](https://www.runoob.com/php/func-date-localtime.html) | 返回本地时间。                                               |
| [microtime()](https://www.runoob.com/php/func-date-microtime.html) | 返回当前 Unix 时间戳的微秒数。                               |
| [mktime()](https://www.runoob.com/php/func-date-mktime.html) | 返回一个日期的 Unix 时间戳。                                 |
| [strftime()](https://www.runoob.com/php/func-date-strftime.html) | 根据区域设置格式化本地时间/日期。                            |
| [strptime()](https://www.runoob.com/php/func-date-strptime.html) | 解析由 strftime() 生成的时间/日期。                          |
| [strtotime()](https://www.runoob.com/php/func-date-strtotime.html) | 将任何英文文本的日期或时间描述解析为 Unix 时间戳。           |
| [time()](https://www.runoob.com/php/func-date-time.html)     | 返回当前时间的 Unix 时间戳。                                 |
| [timezone_abbreviations_list()](https://www.runoob.com/php/func-date-timezone-abbreviations-list.html) | 返回包含夏令时、偏移量和时区名称的关联数组。                 |
| [timezone_identifiers_list()](https://www.runoob.com/php/func-date-timezone-identifiers-list.html) | 返回带有所有时区标识符的数值数组。                           |
| [timezone_location_get()](https://www.runoob.com/php/func-date-timezone-location-get.html) | 返回指定时区的位置信息。                                     |
| [timezone_name_from_ abbr()](https://www.runoob.com/php/func-date-timezone-name-from-abbr.html) | 根据时区缩略语返回时区名称。                                 |
| [timezone_name_get()](https://www.runoob.com/php/func-date-timezone-name-get.html) | 返回时区的名称。                                             |
| [timezone_offset_get()](https://www.runoob.com/php/func-date-timezone-offset-get.html) | 返回相对于 GMT 的时区偏移。                                  |
| [timezone_open()](https://www.runoob.com/php/func-date-timezone-open.html) | 创建一个新的 DateTimeZone 对象。                             |
| timezone_transitions_get()                                   | 返回时区的所有转换。                                         |
| [timezone_version_get()](https://www.runoob.com/php/func-date-timezone-version-get.html) | 返回时区数据库的版本。                                       |



------

## PHP 5 预定义的 Date/Time 常量

| 常量         | 描述                                               |
| :----------- | :------------------------------------------------- |
| DATE_ATOM    | Atom (例如：2005-08-15T16:13:03+0000)              |
| DATE_COOKIE  | HTTP Cookies (例如：Sun, 14 Aug 2005 16:13:03 UTC) |
| DATE_ISO8601 | ISO-8601 (例如：2005-08-14T16:13:03+0000)          |
| DATE_RFC822  | RFC 822 (例如：Sun, 14 Aug 2005 16:13:03 UTC)      |
| DATE_RFC850  | RFC 850 (例如：Sunday, 14-Aug-05 16:13:03 UTC)     |
| DATE_RFC1036 | RFC 1036 (例如：Sunday, 14-Aug-05 16:13:03 UTC)    |
| DATE_RFC1123 | RFC 1123 (例如：Sun, 14 Aug 2005 16:13:03 UTC)     |
| DATE_RFC2822 | RFC 2822 (例如：Sun, 14 Aug 2005 16:13:03 +0000)   |
| DATE_RSS     | RSS (例如：Sun, 14 Aug 2005 16:13:03 UTC)          |
| DATE_W3C     | 万维网联盟 (例如：2005-08-14T16:13:03+0000)        |