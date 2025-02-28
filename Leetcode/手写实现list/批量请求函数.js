// 实现一个批量请求函数, 能够限制并发量

function batchRequest(urls, maxConcurrent) {
    return new Promise((resolve, reject) => {
        const results = [];
        let currentIndex = 0;
        let activeCount = 0;

        function next() {
            if (currentIndex >= urls.length && activeCount === 0) {
                resolve(results);
                return;
            }

            while (activeCount < maxConcurrent && currentIndex < urls.length) {
                const index = currentIndex++;
                activeCount++;

                fetch(urls[index])
                    .then(response => response.json())
                    .then(data => {
                        results[index] = data;
                        activeCount--;
                        next();
                    })
                    .catch(error => {
                        reject(error);
                    });
            }
        }

        next();
    });
}