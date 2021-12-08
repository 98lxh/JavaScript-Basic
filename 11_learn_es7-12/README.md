### ES7 Array Includes
+ 在ES7之前，如果我们想判断一个数组中是否包含某个元素，需要通过 indexOf 获取结果，并且判断是否为 -1。
+ 在ES7中，我们可以通过includes来判断一个数组中是否包含一个指定的元素，根据情况，如果包含则返回 true， 否则返回false。
### ES7 指数运算符
+ 在ES7之前，计算数字的乘方需要通过 Math.pow 方法来完成。
+ 在ES7中，增加了 ** 运算符，可以对数字来计算乘方。
### ES8 Object values
+ 之前我们可以通过 Object.keys 获取一个对象所有的key，在ES8中提供了 Object.values 来获取所有的value值
### ES8 Object entries
+ 通过Object.entries 可以获取到一个数组，数组中会存放可枚举属性的键值对数组。
### ES8 String Padding
+ 某些字符串我们需要对其进行前后的填充，来实现某种格式化效果，ES8中增加了 padStart 和 padEnd 方法，分 别是对字符串的首尾进行填充的。
### ES8 Trailing Commas
+ 在ES8中，我们允许在函数定义和调用时多加一个逗号
### ES8 Object Descriptors
+ ES8中增加了另一个对对象的操作是 Object.getOwnPropertyDescriptors
### ES10 flat flatMap
+ flat() 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返 回。
+ flatMap() 方法首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。
    - 注意一:flatMap是先进行map操作，再做flat的操作;
    - 注意二:flatMap中的flat相当于深度为1;
### ES10 Object fromEntries
+ 在前面，我们可以通过 Object.entries 将一个对象转换成 entries，那么如果我们有一个entries了，如何将其转换 成对象呢?
+ ES10提供了 Object.formEntries来完成转换
### ES10 trimStart trimEnd
+ ES10中给我们提供了trimStart和trimEnd可以选择去除首尾空格
### ES11 BigInt
+ 在早期的JavaScript中，我们不能正确的表示过大的数字:
    - 大于MAX_SAFE_INTEGER的数值，表示的可能是不正确的。
+ 那么ES11中，引入了新的数据类型BigInt，用于表示大的整数:
    - BitInt的表示方法是在数值的后面加上n
### ES11 Nullish Coalescing Operator
+ Nullish Coalescing Operator增加了空值合并操作符
### ES11 Optional Chaining
+ 可选链也是ES11中新增一个新特性，主要作用是让代码进行null和undefined判断时间更加清晰
### ES11 Global This
+ 在之前我们希望获取JavaScript环境的全局对象，不同的环境获取的方式是不一样的
    - 比如在浏览器中可以通过this、window来获取;
    - 比如在Node中我们需要通过global来获取;
+ 那么在ES11中对获取全局对象进行了统一的规范:globalThis
### ES11 for..in标准化
+  在ES11中，对其进行了标准化，for...in是用于遍历对象的key的:
### ES12 FinalizationRegistry
+ FinalizationRegistry 对象可以让你在对象被垃圾回收时请求一个回调。
    - FinalizationRegistry 提供了这样的一种方法:当一个在注册表中注册的对象被回收时，请求在某个时间点上调
用一个清理回调。(清理回调有时被称为 finalizer );
    - 你可以通过调用register方法，注册任何你想要清理回调的对象，传入该对象和所含的值;
### ES12 logical assignment operators
