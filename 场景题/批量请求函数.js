// 实现一个批量请求函数, 能够限制并发量
function batchRequest(urls, maxConcurrent) {
    return new Promise((resolve, reject) => {
        const results = [];
        let currentIndex = 0;
        let activeCount = 0;

        function next() {
            // 终止条件：所有URL都已处理完成且没有活跃请求
            if (currentIndex >= urls.length && activeCount === 0) {
                resolve(results); // 把结果吐出Promise
                return;
            }
            // 控制并发activeCount 和更新已请求的URL数组索引currentIndex++
            while (activeCount < maxConcurrent && currentIndex < urls.length) {
                const index = currentIndex++;
                activeCount++;

                fetch(urls[index])
                    .then(response => response.json())
                    .then(data => {
                        results[index] = data; // 对应的结果放到对应的位置，每个请求只会产生一个结果
                        activeCount--;
                        next(); // 线性递归控制异步任务
                    })
                    .catch(error => {
                        reject(error);
                    });
            }
        }

        next();
    });
}