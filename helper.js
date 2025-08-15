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
                    .then(res => res.json())
                    .then(data => {
                        results[index] = data;
                        activeCount--;
                        next();
                    })
                    .catch(err => {
                        reject(err);
                    })
            }
        }

        next();
    })
}






// reduce实现 批量请求函数 npm循环依赖 Object.create() currying call bind deepClone