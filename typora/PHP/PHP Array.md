# PHP 5 Array 函数

------

## PHP Array 简介

PHP Array 函数允许您访问并操作数组。

支持简单的数组和多维数组。

------

## 安装

PHP Array 函数是 PHP 核心的组成部分。无需安装即可使用这些函数。

------

## PHP 5 Array 函数

| 函数                                                         | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [array()](https://www.runoob.com/php/func-array.html)        | 创建数组。                                                   |
| [array_change_key_case()](https://www.runoob.com/php/func-array-change-key-case.html) | 返回其键均为大写或小写的数组。                               |
| [array_chunk()](https://www.runoob.com/php/func-array-chunk.html) | 把一个数组分割为新的数组块。                                 |
| [array_column()](https://www.runoob.com/php/func-array-column.html) | 返回输入数组中某个单一列的值。                               |
| [array_combine()](https://www.runoob.com/php/func-array-combine.html) | 通过合并两个数组（一个为键名数组，一个为键值数组）来创建一个新数组。 |
| [array_count_values()](https://www.runoob.com/php/func-array-count-values.html) | 用于统计数组中所有值出现的次数。                             |
| [array_diff()](https://www.runoob.com/php/func-array-diff.html) | 比较数组，返回两个数组的差集（只比较键值）。                 |
| [array_diff_assoc()](https://www.runoob.com/php/func-array-diff-assoc.html) | 比较数组，返回两个数组的差集（比较键名和键值）。             |
| [array_diff_key()](https://www.runoob.com/php/func-array-diff-key.html) | 比较数组，返回两个数组的差集（只比较键名）。                 |
| [array_diff_uassoc()](https://www.runoob.com/php/func-array-diff-uassoc.html) | 比较数组，返回两个数组的差集（比较键名和键值，使用用户自定义的键名比较函数）。 |
| [array_diff_ukey()](https://www.runoob.com/php/func-array-diff-ukey.html) | 比较数组，返回两个数组的差集（只比较键名，使用用户自定义的键名比较函数）。 |
| [array_fill()](https://www.runoob.com/php/func-array-fill.html) | 用给定的键值填充数组。                                       |
| [array_fill_keys()](https://www.runoob.com/php/func-array-fill-keys.html) | 用给定的指定键名的键值填充数组。                             |
| [array_filter()](https://www.runoob.com/php/func-array-filter.html) | 用回调函数过滤数组中的元素。                                 |
| [array_flip()](https://www.runoob.com/php/func-array-flip.html) | 反转/交换数组中的键名和对应关联的键值。                      |
| [array_intersect()](https://www.runoob.com/php/func-array-intersect.html) | 比较数组，返回两个数组的交集（只比较键值）。                 |
| [array_intersect_assoc()](https://www.runoob.com/php/func-array-intersect-assoc.html) | 比较数组，返回两个数组的交集（比较键名和键值）。             |
| [array_intersect_key()](https://www.runoob.com/php/func-array-intersect-key.html) | 比较数组，返回两个数组的交集（只比较键名）。                 |
| [array_intersect_uassoc()](https://www.runoob.com/php/func-array-intersect-uassoc.html) | 比较数组，返回两个数组的交集（比较键名和键值，使用用户自定义的键名比较函数）。 |
| [array_intersect_ukey()](https://www.runoob.com/php/func-array-intersect-ukey.html) | 比较数组，返回两个数组的交集（只比较键名，使用用户自定义的键名比较函数）。 |
| [array_key_exists()](https://www.runoob.com/php/func-array-key-exists.html) | 检查指定的键名是否存在于数组中。                             |
| [array_keys()](https://www.runoob.com/php/func-array-keys.html) | 返回数组中所有的键名。                                       |
| [array_map()](https://www.runoob.com/php/func-array-map.html) | 将用户自定义函数作用到给定数组的每个值上，返回新的值。       |
| [array_merge()](https://www.runoob.com/php/func-array-merge.html) | 把一个或多个数组合并为一个数组。                             |
| [array_merge_recursive()](https://www.runoob.com/php/func-array-merge-recursive.html) | 递归地把一个或多个数组合并为一个数组。                       |
| [array_multisort()](https://www.runoob.com/php/func-array-multisort.html) | 对多个数组或多维数组进行排序。                               |
| [array_pad()](https://www.runoob.com/php/func-array-pad.html) | 将指定数量的带有指定值的元素插入到数组中。                   |
| [array_pop()](https://www.runoob.com/php/func-array-pop.html) | 删除数组中的最后一个元素（出栈）。                           |
| [array_product()](https://www.runoob.com/php/func-array-product.html) | 计算数组中所有值的乘积。                                     |
| [array_push()](https://www.runoob.com/php/func-array-push.html) | 将一个或多个元素插入数组的末尾（入栈）。                     |
| [array_rand()](https://www.runoob.com/php/func-array-rand.html) | 从数组中随机选出一个或多个元素，返回键名。                   |
| [array_reduce()](https://www.runoob.com/php/func-array-reduce.html) | 通过使用用户自定义函数，迭代地将数组简化为一个字符串，并返回。 |
| [array_replace()](https://www.runoob.com/php/func-array-replace.html) | 使用后面数组的值替换第一个数组的值。                         |
| [array_replace_recursive()](https://www.runoob.com/php/func-array-replace-recursive.html) | 递归地使用后面数组的值替换第一个数组的值。                   |
| [array_reverse()](https://www.runoob.com/php/func-array-reverse.html) | 将原数组中的元素顺序翻转，创建新的数组并返回。               |
| [array_search()](https://www.runoob.com/php/func-array-search.html) | 在数组中搜索给定的值，如果成功则返回相应的键名。             |
| [array_shift()](https://www.runoob.com/php/func-array-shift.html) | 删除数组中的第一个元素，并返回被删除元素的值。               |
| [array_slice()](https://www.runoob.com/php/func-array-slice.html) | 返回数组中的选定部分。                                       |
| [array_splice()](https://www.runoob.com/php/func-array-splice.html) | 把数组中的指定元素去掉并用其它值取代。                       |
| [array_sum()](https://www.runoob.com/php/func-array-sum.html) | 返回数组中所有值的和。                                       |
| [array_udiff()](https://www.runoob.com/php/func-array-udiff.html) | 比较数组，返回两个数组的差集（只比较键值，使用一个用户自定义的键名比较函数）。 |
| [array_udiff_assoc()](https://www.runoob.com/php/func-array-udiff-assoc.html) | 比较数组，返回两个数组的差集（比较键名和键值，使用内建函数比较键名，使用用户自定义函数比较键值）。 |
| [array_udiff_uassoc()](https://www.runoob.com/php/func-array-udiff-uassoc.html) | 比较数组，返回两个数组的差集（比较键名和键值，使用两个用户自定义的键名比较函数）。 |
| [array_uintersect()](https://www.runoob.com/php/func-array-uintersect.html) | 比较数组，返回两个数组的交集（只比较键值，使用一个用户自定义的键名比较函数）。 |
| [array_uintersect_assoc()](https://www.runoob.com/php/func-array-uintersect-assoc.html) | 比较数组，返回两个数组的交集（比较键名和键值，使用内建函数比较键名，使用用户自定义函数比较键值）。 |
| [array_uintersect_uassoc()](https://www.runoob.com/php/func-array-uintersect-uassoc.html) | 比较数组，返回两个数组的交集（比较键名和键值，使用两个用户自定义的键名比较函数）。 |
| [array_unique()](https://www.runoob.com/php/func-array-unique.html) | 删除数组中重复的值。                                         |
| [array_unshift()](https://www.runoob.com/php/func-array-unshift.html) | 在数组开头插入一个或多个元素。                               |
| [array_values()](https://www.runoob.com/php/func-array-values.html) | 返回数组中所有的值。                                         |
| [array_walk()](https://www.runoob.com/php/func-array-walk.html) | 对数组中的每个成员应用用户函数。                             |
| [array_walk_recursive()](https://www.runoob.com/php/func-array-walk-recursive.html) | 对数组中的每个成员递归地应用用户函数。                       |
| [arsort()](https://www.runoob.com/php/func-array-arsort.html) | 对关联数组按照键值进行降序排序。                             |
| [asort()](https://www.runoob.com/php/func-array-asort.html)  | 对关联数组按照键值进行升序排序。                             |
| [compact()](https://www.runoob.com/php/func-array-compact.html) | 创建一个包含变量名和它们的值的数组。                         |
| [count()](https://www.runoob.com/php/func-array-count.html)  | 返回数组中元素的数目。                                       |
| [current()](https://www.runoob.com/php/func-array-current.html) | 返回数组中的当前元素。                                       |
| [each()](https://www.runoob.com/php/func-array-each.html)    | 返回数组中当前的键／值对。                                   |
| [end()](https://www.runoob.com/php/func-array-end.html)      | 将数组的内部指针指向最后一个元素。                           |
| [extract()](https://www.runoob.com/php/func-array-extract.html) | 从数组中将变量导入到当前的符号表。                           |
| [in_array()](https://www.runoob.com/php/func-array-in-array.html) | 检查数组中是否存在指定的值。                                 |
| [key()](https://www.runoob.com/php/func-array-key.html)      | 从关联数组中取得键名。                                       |
| [krsort()](https://www.runoob.com/php/func-array-krsort.html) | 对关联数组按照键名降序排序。                                 |
| [ksort()](https://www.runoob.com/php/func-array-ksort.html)  | 对关联数组按照键名升序排序。                                 |
| [list()](https://www.runoob.com/php/func-array-list.html)    | 把数组中的值赋给一些数组变量。                               |
| [natcasesort()](https://www.runoob.com/php/func-array-natcasesort.html) | 用"自然排序"算法对数组进行不区分大小写字母的排序。           |
| [natsort()](https://www.runoob.com/php/func-array-natsort.html) | 用"自然排序"算法对数组排序。                                 |
| [next()](https://www.runoob.com/php/func-array-next.html)    | 将数组中的内部指针向后移动一位。                             |
| [pos()](https://www.runoob.com/php/func-array-pos.html)      | current() 的别名。                                           |
| [prev()](https://www.runoob.com/php/func-array-prev.html)    | 将数组的内部指针倒回一位。                                   |
| [range()](https://www.runoob.com/php/func-array-range.html)  | 创建一个包含指定范围的元素的数组。                           |
| [reset()](https://www.runoob.com/php/func-array-reset.html)  | 将数组的内部指针指向第一个元素。                             |
| [rsort()](https://www.runoob.com/php/func-array-rsort.html)  | 对数值数组进行降序排序。                                     |
| [shuffle()](https://www.runoob.com/php/func-array-shuffle.html) | 把数组中的元素按随机顺序重新排列。                           |
| [sizeof()](https://www.runoob.com/php/func-array-sizeof.html) | count() 的别名。                                             |
| [sort()](https://www.runoob.com/php/func-array-sort.html)    | 对数值数组进行升序排序。                                     |
| [uasort()](https://www.runoob.com/php/func-array-uasort.html) | 使用用户自定义的比较函数对数组中的键值进行排序。             |
| [uksort()](https://www.runoob.com/php/func-array-uksort.html) | 使用用户自定义的比较函数对数组中的键名进行排序。             |
| [usort()](https://www.runoob.com/php/func-array-usort.html)  | 使用用户自定义的比较函数对数组进行排序。                     |