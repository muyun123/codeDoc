# PHP 5 Calendar 函数

------

## PHP Calendar 简介

日历扩展包含了简化不同日历格式间的转换的函数。

**它是基于 Julian Day Count（儒略日计数），是从公元前 4713 年 1 月 1 日开始计算的。**

**注释：**如需在日历格式之间转换，必须首先转换为 Julian Day Count，然后再转换为您需要的日历格式。

**注释：**Julian Day Count（儒略日计数）与 Julian Calendar（儒略历法） 不是一回事！

------

## 安装

为了让这些函数能够工作，您必须通过 --enable-calendar 编译 PHP。

PHP 的 Windows 版本已内建了对日历扩展的支持。因此，Calendar 函数会自动工作。

------

## PHP 5 Calendar 函数

| 函数                                                         | 描述                                          |
| :----------------------------------------------------------- | :-------------------------------------------- |
| [cal_days_in_month()](https://www.runoob.com/php/func-cal-cal-days-in-month.html) | 针对指定的年份和历法，返回一个月中的天数。    |
| [cal_from_jd()](https://www.runoob.com/php/func-cal-cal-from-jd.html) | 把儒略日计数转换为指定历法的日期。            |
| [cal_info()](https://www.runoob.com/php/func-cal-cal-info.html) | 返回有关指定历法的信息。                      |
| [cal_to_jd()](https://www.runoob.com/php/func-cal-cal-to-jd.html) | 把指定历法的日期转换为儒略日计数。            |
| [easter_date()](https://www.runoob.com/php/func-cal-easter-date.html) | 返回指定年份的复活节午夜的 Unix 时间戳。      |
| [easter_days()](https://www.runoob.com/php/func-cal-easter-days.html) | 返回指定年份的复活节与 3 月 21 日之间的天数。 |
| [frenchtojd()](https://www.runoob.com/php/func-cal-frenchtojd.html) | 把法国共和历法的日期转换成为儒略日计数。      |
| [gregoriantojd()](https://www.runoob.com/php/func-cal-gregoriantojd.html) | 把格利高里历法的日期转换成为儒略日计数。      |
| [jddayofweek()](https://www.runoob.com/php/func-cal-jddayofweek.html) | 返回日期在周几。                              |
| [jdmonthname()](https://www.runoob.com/php/func-cal-jdmonthname.html) | 返回月的名称。                                |
| [jdtofrench()](https://www.runoob.com/php/func-cal-jdtofrench.html) | 把儒略日计数转换为法国共和历法的日期。        |
| [jdtogregorian()](https://www.runoob.com/php/func-cal-jdtogregorian.html) | 把儒略日计数转换为格利高里历法的日期。        |
| [jdtojewish()](https://www.runoob.com/php/func-cal-jdtojewish.html) | 把儒略日计数转换为犹太历法的日期。            |
| [jdtojulian()](https://www.runoob.com/php/func-cal-jdtojulian.html) | 把儒略日计数转换为儒略历法的日期。            |
| [jdtounix()](https://www.runoob.com/php/func-cal-jdtounix.html) | 把儒略日计数转换为 Unix 时间戳。              |
| [jewishtojd()](https://www.runoob.com/php/func-cal-jewishtojd.html) | 把犹太历法的日期转换为儒略日计数。            |
| [juliantojd()](https://www.runoob.com/php/func-cal-juliantojd.html) | 把儒略历法的日期转换为儒略日计数。            |
| [unixtojd()](https://www.runoob.com/php/func-cal-unixtojd.html) | 把 Unix 时间戳转换为儒略日计数。              |

## PHP 5 预定义的 Calendar 常量

| 常量                         | 类型    | PHP 版本 |
| :--------------------------- | :------ | :------- |
| CAL_GREGORIAN                | Integer | PHP 4    |
| CAL_JULIAN                   | Integer | PHP 4    |
| CAL_JEWISH                   | Integer | PHP 4    |
| CAL_FRENCH                   | Integer | PHP 4    |
| CAL_NUM_CALS                 | Integer | PHP 4    |
| CAL_DOW_DAYNO                | Integer | PHP 4    |
| CAL_DOW_SHORT                | Integer | PHP 4    |
| CAL_DOW_LONG                 | Integer | PHP 4    |
| CAL_MONTH_GREGORIAN_SHORT    | Integer | PHP 4    |
| CAL_MONTH_GREGORIAN_LONG     | Integer | PHP 4    |
| CAL_MONTH_JULIAN_SHORT       | Integer | PHP 4    |
| CAL_MONTH_JULIAN_LONG        | Integer | PHP 4    |
| CAL_MONTH_JEWISH             | Integer | PHP 4    |
| CAL_MONTH_FRENCH             | Integer | PHP 4    |
| CAL_EASTER_DEFAULT           | Integer | PHP 4.3  |
| CAL_EASTER_ROMAN             | Integer | PHP 4.3  |
| CAL_EASTER_ALWAYS_GREGORIAN  | Integer | PHP 4.3  |
| CAL_EASTER_ALWAYS_JULIAN     | Integer | PHP 4.3  |
| CAL_JEWISH_ADD_ALAFIM_GERESH | Integer | PHP 5.0  |
| CAL_JEWISH_ADD_ALAFIM        | Integer | PHP 5.0  |
| CAL_JEWISH_ADD_GERESHAYIM    | Integer | PHP 5.0  |